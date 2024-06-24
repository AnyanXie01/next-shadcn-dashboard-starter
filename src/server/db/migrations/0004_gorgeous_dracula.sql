ALTER TABLE "product" RENAME COLUMN "name" TO "productName";--> statement-breakpoint
ALTER TABLE "product" ADD COLUMN "productDescription" text NOT NULL;