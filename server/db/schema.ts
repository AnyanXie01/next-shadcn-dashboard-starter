import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { type z } from "zod";

export const companyTable = pgTable("company", {
  companyName: text("companyName").primaryKey(),
  officialWebsite: text("officialWebsite").notNull(),
});

// export const productTable = pgTable("product", {
//   id: serial("id").primaryKey(),
//   companyName: text("companyName").notNull(),
//   name: text("name").notNull(),
//   description: text("description").notNull(),
//   price: text("price").notNull(),
//   image: text("image").notNull(),
// }, (table) => {
//   return {
//     productCompanyNameIndex: index("product_company_name_index").on(table.companyName),
//   }
// });

// export const categoryTable = pgTable("category", {
//   id: serial("id").primaryKey(),
//   companyName: text("companyName").notNull(),
//   name: text("name").notNull(),
//   description: text("description").notNull(),
//   image: text("image").notNull(),
// }, (table) => {
//   return {
//     categoryCompanyNameIndex: index("category_company_name_index").on(table.companyName),
//   }
// });

// export const reviewTable = pgTable("review", {
//   id: serial("id").primaryKey(),
//   companyName: text("companyName").notNull(),
//   name: text("name").notNull(),
//   review: text("review").notNull(),
// }, (table) => {
//   return {
//     reviewCompanyNameIndex: index("review_company_name_index").on(table.companyName),
//   }
// });

// export const faqTable = pgTable("faq", {
//   id: serial("id").primaryKey(),
//   companyName: text("companyName").notNull(),
//   question: text("question").notNull(),
//   answer: text("answer").notNull(),
// }, (table) => {
//   return {
//     fagCompanyNameIndex: index("faq_company_name_index").on(table.companyName),
//   }
// });

// export const lastViewTable = pgTable("lastView", {
//   id: serial("id").primaryKey(),
//   companyName: text("companyName").notNull()
// }, (table) => {
//   return {
//     lastViewCompanyNameIndex: index("company_name_index").on(table.companyName),
//   }
// })

// Schema for inserting a company - can be used to validate API requests
export const insertCompanySchema = createInsertSchema(companyTable);
export type InsertCompanyInput = z.infer<typeof insertCompanySchema>;
// Schema for selecting a company - can be used to validate API requests
export const selectCompanySchema = createSelectSchema(companyTable);
export type SelectCompanyInput = z.infer<typeof selectCompanySchema>;
