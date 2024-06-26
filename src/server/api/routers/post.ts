import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db/db";
import {
  companyTable,
  lastViewTable,
  productTable,
  categoryTable,
  reviewTable,
  faqTable,
} from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { Service } from "./service";

export const postRouter = createTRPCRouter({
  saveCompanyInfo: publicProcedure
    .input(
      z.object({
        companyName: z.string(),
        companyWebsite: z.string(),
        productName: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log(
        "save company info...",
        input.companyName,
        input.companyWebsite,
        input.productName,
      );
      const res = await db
        .insert(companyTable)
        .values({
          companyName: input.companyName.toLocaleLowerCase(),
          companyWebsite: input.companyWebsite,
          brandName: input.productName,
          headLine: "",
          subHeadLine: "",
          heroImage: "",
          headLineFontSize: "",
          subHeadLineFontSize: "",
          email: "",
          phone: "",
          address: "",
          facebook: "",
          instagram: "",
          youtube: "",
        })
        .onConflictDoUpdate({
          target: companyTable.companyName,
          set: {
            companyName: input.companyName,
            companyWebsite: input.companyWebsite,
            brandName: input.productName,
          },
        });
      await db
        .delete(productTable)
        .where(eq(productTable.companyName, input.companyName));
      await db
        .delete(categoryTable)
        .where(eq(categoryTable.companyName, input.companyName));
      await db
        .delete(reviewTable)
        .where(eq(reviewTable.companyName, input.companyName));
      await db
        .delete(faqTable)
        .where(eq(faqTable.companyName, input.companyName));
      console.log(res);
    }),
  saveProductInfo: publicProcedure
    .input(
      z.object({
        companyName: z.string(),
        productName: z.string(),
        productLink: z.string(),
        productCategory: z.string(),
        productDescription: z.string(),
        productPrice: z.string(),
        productInventory: z.number(),
        productReviews: z.number(),
        productRatings: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log("save product info...");
      const res = await db.insert(productTable).values({
        companyName: input.companyName.toLocaleLowerCase(),
        productName: input.productName,
        productDescription: input.productDescription,
        productLink: input.productLink,
        productPrice: input.productPrice,
        productCategory: input.productCategory,
        productInventory: input.productInventory,
        productReviews: input.productReviews,
        productRatings: input.productRatings,
      });
      console.log(res);
    }),
  getProductInfo: publicProcedure
    .input(z.object({ companyName: z.string() }))
    .query(async ({ input }) => {
      const res = await db
        .select({
          productName: productTable.productName,
          productCategory: productTable.productCategory,
          productInventory: productTable.productInventory,
          productPrice: productTable.productPrice,
          productRatings: productTable.productRatings,
          productReviews: productTable.productReviews,
          productLink: productTable.productLink,
        })
        .from(productTable)
        .where(eq(productTable.companyName, input.companyName));
      return res;
    }),
  getCompanyInfo: publicProcedure
    .input(z.object({ companyName: z.string() }))
    .query(async ({ input }) => {
      const res = await db
        .select({
          // companyName: companyTable.companyName,
          companyWebsite: companyTable.companyWebsite,
          brandName: companyTable.brandName,
        })
        .from(companyTable)
        .where(eq(companyTable.companyName, input.companyName));
      return res[0];
    }),
  getImageInfo: publicProcedure
    .input(z.object({ companyName: z.string() }))
    .query(async ({ input }) => {
      const res = await db
        .select({
          imageLinks: productTable.productLink,
        })
        .from(productTable)
        .where(eq(productTable.companyName, input.companyName));
      return res;
    }),
  getLastView: publicProcedure.query(async () => {
    const res = await db
      .select({
        companyName: lastViewTable.companyName,
      })
      .from(lastViewTable)
      .where(eq(lastViewTable.id, 0));
    console.log("getLastView", res);
    return res[0];
  }),
  saveLastView: publicProcedure
    .input(
      z.object({
        companyName: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log("save last view info...");
      const res = await db
        .insert(lastViewTable)
        .values({
          id: 0,
          companyName: input.companyName.toLocaleLowerCase(),
        })
        .onConflictDoUpdate({
          target: lastViewTable.id,
          set: {
            companyName: input.companyName.toLocaleLowerCase(),
          },
        });
      console.log(res);
    }),
  callCozeTest: publicProcedure.query(async () => {
    // return await Service.createWebsite();
  }),
  callCoze: publicProcedure
    .input(
      z.object({
        companyName: z.string(),
        companyWebsite: z.string(),
        brandName: z.string(),
      }),
    )
    .query(async ({ input: { companyName, companyWebsite, brandName } }) => {
      const productImage: any[] = (
        await Service.getProductsByCompanyName({ companyName })
      ).map((product) => {
        return product.productLink;
      });
      return await Service.createWebsite({
        companyName,
        companyWebsite,
        brandName,
        productImage,
      });
    }),
  getByCompanyName: publicProcedure
    .input(z.string())
    .query(async ({ input: companyName }) => {
      const company = await Service.getCompanyByCompanyName({ companyName });
      const products = await Service.getProductsByCompanyName({ companyName });
      const categories = await Service.getCategoriesByCompanyName({
        companyName,
      });
      const reviews = await Service.getReviewsByCompanyName({ companyName });
      const faqs = await Service.getFaqsByCompanyName({ companyName });
      return {
        company,
        products,
        categories,
        reviews,
        faqs,
      };
    }),
});

// import { posts } from "~/server/db/schema";

// export const postRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   create: publicProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       await ctx.db.insert(posts).values({
//         name: input.name,
//       });
//     }),

//   getLatest: publicProcedure.query(({ ctx }) => {
//     return ctx.db.query.posts.findFirst({
//       orderBy: (posts, { desc }) => [desc(posts.createdAt)],
//     });
//   }),
// });
