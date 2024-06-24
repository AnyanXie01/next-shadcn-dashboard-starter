ALTER TABLE "product" ALTER COLUMN "price" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "price" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "product" ALTER COLUMN "price" SET NOT NULL;