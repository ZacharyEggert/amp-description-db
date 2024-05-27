ALTER TABLE "amp-description-db_preset" RENAME TO "amp-description-db_amp_preset";--> statement-breakpoint
ALTER TABLE "amp-description-db_amp_preset" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "amp-description-db_amp_preset" ADD COLUMN "sort_as" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "amp-description-db_amp_preset" ADD CONSTRAINT "amp-description-db_amp_preset_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "amp-description-db_amp_preset" ADD CONSTRAINT "amp-description-db_amp_preset_sort_as_unique" UNIQUE("sort_as");