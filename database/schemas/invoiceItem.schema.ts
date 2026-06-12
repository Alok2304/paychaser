import { integer, pgSchema, text } from "drizzle-orm/pg-core";
import { invoices } from "./invoice.schema";

export const invoiceItemSchema = pgSchema("invoice_item");

export const invoiceItems = invoiceItemSchema.table("invoice_items", {
  id: text("id").primaryKey(),
  invoiceId: text("invoice_id").references(() => invoices.id).notNull(),
  description: text("description"),
  quantity: integer("quantity").notNull(),
  unitPrice: integer("unit_price").notNull(),
});
