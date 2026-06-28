import { pgSchema, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userSchema = pgSchema("user");

export const users = userSchema.table("users", {
  id: text("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 200 }).unique().notNull(),
  businessName: text("business_name"),
  stripeConnectId: text("stripe_connect_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
