// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTable, serial, text, timestamp, real, integer } from "drizzle-orm/pg-core";
import { number } from "zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const companyTable = pgTable("company", {
  companyName: text("companyName").primaryKey(),
  companyWebsite: text("companyWebsite").notNull(),
  brandName: text("brandName").notNull(),
  headLine: text("headLine").notNull(),
  subHeadLine: text("subHeadLine").notNull(),
  heroImage: text("heroImage").notNull(),
  headLineStyle: text("headLineFontSize").notNull(),
  subHeadLineStyle: text("subHeadLineFontSize").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  facebook: text("facebook").notNull(),
  instagram: text("instagram").notNull(),
  youtube: text("youtube").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const productTable = pgTable("product", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull(),
  productName: text("productName").notNull(),
  productDescription: text("productDescription").notNull(),
  productLink: text("productLink").notNull(),
  productPrice: text("price").notNull(),
  productImage: text("image").notNull(),
  productCategory: text("category").notNull(),
  productInventory: integer("inventory").notNull(),
  productReviews: integer("reviews").notNull(),
  productRatings: real("productRatings").default(0.0)
}, (table) => {
  return {
    productCompanyNameIndex: index("product_company_name_index").on(table.companyName),
  }
});

export const categoryTable = pgTable("category", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
}, (table) => {
  return {
    categoryCompanyNameIndex: index("category_company_name_index").on(table.companyName),
  }
});

export const reviewTable = pgTable("review", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull(),
  name: text("name").notNull(),
  review: text("review").notNull(),
}, (table) => {
  return {
    reviewCompanyNameIndex: index("review_company_name_index").on(table.companyName),
  }
});

export const faqTable = pgTable("faq", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
}, (table) => {
  return {
    fagCompanyNameIndex: index("faq_company_name_index").on(table.companyName),
  }
});

export const lastViewTable = pgTable("lastView", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull()
}, (table) => {
  return {
    lastViewCompanyNameIndex: index("company_name_index").on(table.companyName),
  }
});