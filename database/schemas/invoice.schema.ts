import {
  numeric,
  pgEnum,
  pgSchema,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./user.schema";
import { clients } from "./client.schema";

export const statusEnum = pgEnum("status", [
  "draft",
  "sent",
  "paid",
  "overdue",
]);

export const invoiceSchema = pgSchema("invoice");

export const invoices = invoiceSchema.table("invoices", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .references(() => users.id)
    .notNull(),
  clientId: text("client_id")
    .references(() => clients.id)
    .notNull(),
  invoiceNumber: text("invoice_number").notNull().unique(),
  status: statusEnum("status").default("draft").notNull(),
  dueDate: timestamp("due_date").notNull(),
  currency: varchar("currency", { length: 10 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  totalAmount: numeric("total_amount", { precision: 10, scale: 2 }).notNull(),
});
