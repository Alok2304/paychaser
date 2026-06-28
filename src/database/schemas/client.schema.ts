import { pgSchema, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./user.schema";

export const clientSchema = pgSchema("client");

export const clients = clientSchema.table("clients", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .references(() => users.id)
    .notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 200 }).unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
