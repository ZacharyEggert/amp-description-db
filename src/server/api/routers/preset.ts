import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// import { z } from "zod";

export const presetRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.ampPresets.findMany();
  }),
});
