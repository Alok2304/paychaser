CREATE SCHEMA "client";
--> statement-breakpoint
CREATE SCHEMA "invoice";
--> statement-breakpoint
CREATE SCHEMA "invoice_item";
--> statement-breakpoint
CREATE SCHEMA "user";
--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('draft', 'sent', 'paid', 'overdue');--> statement-breakpoint
CREATE TABLE "client"."clients" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(200) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "clients_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "invoice"."invoices" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"client_id" text NOT NULL,
	"invoice_number" text NOT NULL,
	"status" "status" DEFAULT 'draft' NOT NULL,
	"due_date" timestamp NOT NULL,
	"currency" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"total_amount" numeric(10, 2) NOT NULL,
	CONSTRAINT "invoices_invoice_number_unique" UNIQUE("invoice_number")
);
--> statement-breakpoint
CREATE TABLE "invoice_item"."invoice_items" (
	"id" text PRIMARY KEY NOT NULL,
	"invoice_id" text NOT NULL,
	"description" text,
	"quantity" integer NOT NULL,
	"unit_price" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user"."users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(200) NOT NULL,
	"business_name" text,
	"stripe_connect_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "client"."clients" ADD CONSTRAINT "clients_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice"."invoices" ADD CONSTRAINT "invoices_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice"."invoices" ADD CONSTRAINT "invoices_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "client"."clients"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoice_item"."invoice_items" ADD CONSTRAINT "invoice_items_invoice_id_invoices_id_fk" FOREIGN KEY ("invoice_id") REFERENCES "invoice"."invoices"("id") ON DELETE no action ON UPDATE no action;