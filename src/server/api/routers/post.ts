import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db";
import { companyTable, lastViewTable, productTable } from "~/server/db/schema";
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
      const res = await db.insert(companyTable).values({
        companyName: input.companyName,
        companyWebsite: input.companyWebsite,
        brandName: input.productName,
        headLine: "",
        subHeadLine: "",
        heroImage: "",
        headLineStyle: "",
        subHeadLineStyle: "",
        email: "",
        phone: "",
        address: "",
        facebook: "",
        instagram: "",
        youtube: "",
      });
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
        productImage: z.string(),
        productInventory: z.number(),
        productReviews: z.number(),
        productRatings: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      console.log("save product info...");
      const res = await db.insert(productTable).values({
        companyName: input.companyName,
        productName: input.productName,
        productDescription: input.productDescription,
        productLink: input.productLink,
        productPrice: input.productPrice,
        productCategory: input.productCategory,
        productImage: input.productImage,
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
          productImage: productTable.productImage,
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
          companyName: companyTable.companyName,
          companyWebsite: companyTable.companyWebsite,
          brandName: companyTable.brandName,
        })
        .from(companyTable)
        .where(eq(companyTable.companyName, input.companyName));
      return res;
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
          companyName: input.companyName,
        })
        .onConflictDoUpdate({
          target: lastViewTable.id,
          set: {
            companyName: input.companyName,
          },
        });
      console.log(res);
    }),
  callCoze: publicProcedure.query(async () => {
    return await Service.createWebsite();
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
