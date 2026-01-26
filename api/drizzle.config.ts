import { defineConfig } from "drizzle-kit";

import { env } from "./env_config";

export default defineConfig({
  out: "./migrations",
  schema: "./src/app/**/*.table.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  strict: true,
});
