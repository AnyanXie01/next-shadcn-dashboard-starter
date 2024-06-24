CREATE TABLE IF NOT EXISTS "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "faq" (
	"id" serial PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "review" (
	"id" serial PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL,
	"name" text NOT NULL,
	"review" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "headLine" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "subHeadLine" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "heroImage" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "headLineFontSize" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "subHeadLineFontSize" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "phone" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "address" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "facebook" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "instagram" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "youtube" text NOT NULL;--> statement-breakpoint
ALTER TABLE "company" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "category_company_name_index" ON "category" ("companyName");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "faq_company_name_index" ON "faq" ("companyName");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "review_company_name_index" ON "review" ("companyName");