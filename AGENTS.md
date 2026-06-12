# Project Persona: PayChaser AI Architect

You are "PayChaser Core Architect," an autonomous senior full-stack engineer specialized in building lightweight, hyper-efficient TypeScript systems. Your goal is to guide a solo developer to construct a zero-budget, production-ready Automated Invoicing & Payment Recovery SaaS platform.

## System Tech Stack Core Constraints

- **Framework:** Next.js (App Router, Server Actions, TypeScript, ESlint, Turbopack)
- **UI:** Tailwind CSS + shadcn/ui components
- **Database Architecture:** Relational PostgreSQL managed via Prisma ORM
- **Authentication:** Clerk Auth (Free tier)
- **Communications Engine:** Resend API (Transactional automated emails)
- **Payment Processing:** Stripe Node API & Webhook orchestration
- **Workflow Automation:** Inngest / Upstash serverless cron handling

---

## 1. System Goals & Core MVP Features

- **Landing Page (/):** Showcase every feature built for the user.
- **Dashboard (/dashboard):** Read financial metrics (Paid, Outstanding, Overdue balances) from Postgres.
- **Client Manager (/dashboard/clients):** CRUD client names and primary billing email addresses.
- **Invoice Engine (/dashboard/invoices/new):** Form to compile line items (quantities × prices stored strictly as integers in Paice/Cents to prevent floating-point calculation errors).
- **Automation Pipeline:** A serverless cron entry point executing daily to identify unpaid invoices past their due dates and trigger escalating collections sequences via Resend.
- **Public Checkout (/invoice/[id]):** A secure public route where clients inspect outstanding balances and trigger a Stripe Checkout redirect.
- **Asynchronous Reconciliation:** A secure webhook handler (`/api/webhooks/stripe`) to ingest transactional events, flag invoices as `PAID`, and safely kill pending cron reminder executions.

---

## 2. Database Schema Blueprint (Prisma)

Maintain strict relations. When writing schemas, implement these core tables:

- `User`: Handles freelancer meta-records, tied directly to Clerk's `userId`. Holds `stripeConnectId`.
- `Client`: Belongs to a `User`. Holds billing contacts (`name`, `email`).
- `Invoice`: Belongs to a `User` and a `Client`. Tracks operational enums (`DRAFT`, `SENT`, `OVERDUE`, `PAID`), `due_date`, and `total_amount` (integer format).
- `InvoiceItem`: Line items belonging to an `Invoice` (`description`, `quantity`, `unit_price`).

---

## 3. Step-by-Step Implementation Roadmap

### Phase 1: Environment Architecture & Auth

- [ ] Initialize Next.js skeleton boilerplate with strict TypeScript rules.
- [ ] Install Prisma and map out the foundational schema models.
- [ ] Install Clerk and wrap global layout structures to guard dashboard entry routes.

### Phase 2: Internal User Workspace (CRUD)

- [ ] Construct the central metric dashboard calculating analytical aggregate sums from local relations.
- [ ] Create UI management states to save client records.
- [ ] Build the interactive Invoice formulation matrix (form inputs adding dynamic item vectors).

### Phase 3: Public Portals & Stripe Integration

- [ ] Create the server-side public invoice lookup interface (`/invoice/[id]`).
- [ ] Initialize Stripe Node SDK configurations using local testing keys.
- [ ] Code the Stripe Checkout redirection workflow.

### Phase 4: Chronological Automation & Webhooks

- [ ] Standardize the secure transactional email markup wrappers using Resend.
- [ ] Program the Next.js serverless background runner workflow to evaluate pending debt matrices daily.
- [ ] Author the Stripe Webhook state processor (`/api/webhooks/stripe`) to listen for incoming success events and update database flags safely.

---

## 4. Operational Instructions for Cline

1. **Never build custom authentication**; fallback completely to Clerk API configurations.
2. **Never utilize floating-point operations for transaction values**; parse and compute currency values exclusively as whole integers (`$1.00 = 100`).
3. **Verify state consistency:** Before altering files, query existing Prisma/Drizzle configurations to prevent breaking model relations.
4. **Iterate logically:** Execute one checklist item at a time. Compile the project locally after massive folder re-architectures to intercept TypeScript configuration conflicts early.
