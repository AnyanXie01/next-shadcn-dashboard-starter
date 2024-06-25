CREATE TABLE IF NOT EXISTS "lastView" (
	"id" serial PRIMARY KEY NOT NULL,
	"companyName" text NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "company_name_index" ON "lastView" ("companyName");