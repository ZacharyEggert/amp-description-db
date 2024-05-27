CREATE TABLE IF NOT EXISTS "amp-description-db_amp_preset" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"sort_as" varchar(256) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "amp-description-db_amp_preset_name_unique" UNIQUE("name"),
	CONSTRAINT "amp-description-db_amp_preset_sort_as_unique" UNIQUE("sort_as")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "amp-description-db_amp_preset" ("name");