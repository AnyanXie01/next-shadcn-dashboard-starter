import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db";
import { companyTable } from "~/server/db/schema";
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
  getCompanyInfo: publicProcedure
    .input(z.object({companyName: z.string()}))
    .query (async({ input }) => {
      return await db.query.companyTable.findFirst({
        where: eq(companyTable.companyName, input.companyName),
      })
    }

    )
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
