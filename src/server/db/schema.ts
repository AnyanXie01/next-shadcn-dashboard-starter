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
});

export const productTable = pgTable("product", {
  id: serial("id").primaryKey(),
  companyName: text("companyName").notNull(),
  productName: text("productName").notNull(),
  productDescription: text("productDescription").notNull(),
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