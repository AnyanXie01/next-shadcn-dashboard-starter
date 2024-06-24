CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"price" real DEFAULT 0,
	"image" text NOT NULL,
	"inventory" integer NOT NULL,
	"reviews" text NOT NULL,
	"productRatings" real DEFAULT 0
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "product_company_name_index" ON "product" ("companyName");