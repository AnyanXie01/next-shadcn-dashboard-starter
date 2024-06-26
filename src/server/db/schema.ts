import { index, pgTable, serial, text, timestamp, real, integer } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const companyTable = pgTable("company", {
  companyName: text("companyName").primaryKey(),
  companyWebsite: text("companyWebsite"),
  brandName: text("brandName"),
  headLine: text("headLine"),
  subHeadLine: text("subHeadLine"),
  heroImage: text("heroImage"),
  headLineFontSize: text("headLineFontSize"),
  subHeadLineFontSize: text("subHeadLineFontSize"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  facebook: text("facebook"),
  instagram: text("instagram"),
  youtube: text("youtube"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const productTable = pgTable("product", {
  id: serial("id").primaryKey(),
  companyName: text("companyName"),
  productName: text("productName"),
  productDescription: text("productDescription"),
  productLink: text("productLink"),
  productPrice: text("price"),
  productCategory: text("category"),
  productInventory: integer("inventory"),
  productReviews: integer("reviews"),
  productRatings: real("productRatings").default(0.0)
}, (table) => {
  return {
    productCompanyNameIndex: index("product_company_name_index").on(table.companyName),
  }
});

export const categoryTable = pgTable("category", {
  id: serial("id").primaryKey(),
  companyName: text("companyName"),
  name: text("name"),
  description: text("description"),
  image: text("image"),
}, (table) => {
  return {
    categoryCompanyNameIndex: index("category_company_name_index").on(table.companyName),
  }
});

export const reviewTable = pgTable("review", {
  id: serial("id").primaryKey(),
  companyName: text("companyName"),
  name: text("name"),
  review: text("review"),
}, (table) => {
  return {
    reviewCompanyNameIndex: index("review_company_name_index").on(table.companyName),
  }
});

export const faqTable = pgTable("faq", {
  id: serial("id").primaryKey(),
  companyName: text("companyName"),
  question: text("question"),
  answer: text("answer"),
}, (table) => {
  return {
    fagCompanyNameIndex: index("faq_company_name_index").on(table.companyName),
  }
});

export const lastViewTable = pgTable("lastView", {
  id: serial("id").primaryKey(),
  companyName: text("companyName")
}, (table) => {
  return {
    lastViewCompanyNameIndex: index("company_name_index").on(table.companyName),
  }
});