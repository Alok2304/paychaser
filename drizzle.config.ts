import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in the .env file");
}

export default defineConfig({
  schema: "./database/schemas/*", // Your schema file path
  out: "./migrations/drizzle", // Your migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  schemaFilter: ["user", "client", "invoice", "invoice_item"],
  // List of schemas to include in migrations
});
