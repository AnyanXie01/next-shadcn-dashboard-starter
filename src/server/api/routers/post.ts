import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db";
import { companyTable, productTable } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export const postRouter = createTRPCRouter({
  saveCompanyInfo: publicProcedure.
    input(z.object({companyName: z.string(), companyWebsite : z.string()}))
    .mutation( async ({ input }) => {
      console.log("save company info...", input.companyName, input.companyWebsite);
      const res = await db.insert(companyTable).values({
        companyName: input.companyName,
        companyWebsite: input.companyWebsite
      })
      console.log(res);
    }),
  saveProductInfo: publicProcedure.
    input(z.object({
      companyName: z.string(), 
      productName: z.string(),
      productCategory: z.string(),
      productDescription: z.string(),
      productPrice: z.string(),
      productImage: z.string(),
      productInventory: z.number(),
      productReviews: z.number(),
      productRatings: z.number()
    }))
    .mutation( async ({ input }) => {
      console.log("save product info...");
      const res = await db.insert(productTable).values({
        companyName: input.companyName,
        productName: input.productName,
        productDescription: input.productDescription,
        productPrice: input.productPrice,
        productCategory: input.productCategory,
        productImage: input.productImage,
        productInventory: input.productInventory,
        productReviews: input.productReviews,
        productRatings: input.productRatings,
      })
      console.log(res);
    }),
  getProductInfo: publicProcedure
    .input(z.object({companyName: z.string()}))
    .query (async({ input }) => {
      const res = await db.select({
        productName: productTable.productName,
        productCategory: productTable.productCategory,
        productInventory: productTable.productInventory,
        productPrice: productTable.productPrice,
        productRatings: productTable.productRatings,
        productReviews: productTable.productRatings,
        productImage: productTable.productImage
      })
      .from(productTable)
      .where(eq(productTable.companyName, input.companyName))
      console.log("Get Product Result: ", res)
      return res
    }
    ),
})

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
