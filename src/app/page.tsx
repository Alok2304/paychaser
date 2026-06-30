"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Stack", href: "#stack" },
];

const featureCards = [
  {
    title: "Client ledger",
    description:
      "Keep every client, billing email, and payment state in one focused workspace.",
    color: "bg-[#ff6b4a]",
  },
  {
    title: "Rupee-safe invoices",
    description:
      "Build itemized invoices with integer currency handling for predictable totals.",
    color: "bg-[#0f9f8b]",
  },
  {
    title: "Recovery automation",
    description:
      "Run daily overdue checks and trigger calm, escalating reminders through Resend.",
    color: "bg-[#f5c542]",
  },
  {
    title: "Checkout closure",
    description:
      "Route clients to hosted invoice pages, Stripe Checkout, and webhook reconciliation.",
    color: "bg-[#6d7cff]",
  },
];

const metrics = [
  { label: "Paid", value: "Rs. 2.4L", accent: "bg-[#0f9f8b]" },
  { label: "Outstanding", value: "Rs. 86K", accent: "bg-[#f5c542]" },
  { label: "Overdue", value: "Rs. 31K", accent: "bg-[#ff6b4a]" },
];

const timeline = [
  "Create client",
  "Draft invoice",
  "Send checkout",
  "Detect overdue",
  "Reconcile paid",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f6f8] text-[#171817]">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f3f6f8]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="PayChaser home"
          >
            <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-[#171817] text-sm font-black text-white">
              <motion.span
                className="absolute inset-0 bg-[#ff6b4a]"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative">PC</span>
            </span>
            <span className="truncate text-lg font-black tracking-normal">
              PayChaser
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-bold text-[#4f5856] md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="transition hover:text-[#171817]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link
            href="/dashboard"
            className="rounded-lg bg-[#171817] px-4 py-2.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(23,24,23,0.18)] transition hover:bg-[#303230]"
          >
            Dashboard
          </Link>
        </div>
      </motion.nav>

      <section className="relative flex min-h-[calc(100vh-28px)] items-center px-5 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,24,23,0.06)_1px,transparent_1px),linear-gradient(rgba(23,24,23,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <motion.div
          className="absolute left-[6%] top-28 h-36 w-36 rounded-full bg-[#ff6b4a]/25 blur-3xl"
          animate={{ scale: [1, 1.18, 1], x: [0, 24, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-[10%] h-44 w-44 rounded-full bg-[#0f9f8b]/20 blur-3xl"
          animate={{ scale: [1, 1.25, 1], y: [0, -28, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#4f5856] shadow-sm backdrop-blur"
            >
              Automated invoicing and payment recovery for solo operators
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-[#171817] sm:text-6xl lg:text-8xl"
            >
              Get paid without turning follow-ups into a second job.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5856]"
            >
              PayChaser gives freelancers a clean command center for clients,
              invoices, overdue reminders, hosted checkout, and payment status.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/dashboard"
                className="rounded-lg bg-[#ff6b4a] px-5 py-3 text-center text-sm font-black text-[#171817] shadow-[0_16px_34px_rgba(255,107,74,0.3)] transition hover:bg-[#ff805f]"
              >
                Open workspace
              </Link>
              <Link
                href="/invoice/demo"
                className="rounded-lg border border-black/15 bg-white px-5 py-3 text-center text-sm font-black text-[#171817] transition hover:border-black/35"
              >
                Preview invoice
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[520px] lg:min-h-[620px]"
          >
            <motion.div
              className="absolute left-0 right-0 top-8 rounded-lg border border-black/10 bg-white p-4 shadow-[0_30px_80px_rgba(23,24,23,0.14)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div>
                  <p className="text-sm font-bold text-[#6a706e]">
                    June recovery board
                  </p>
                  <p className="mt-1 text-2xl font-black">Invoice health</p>
                </div>
                <span className="rounded-full bg-[#d8ff5f] px-3 py-1 text-xs font-black text-[#171817]">
                  Live
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
                    className="rounded-lg border border-black/10 bg-[#f7f9fa] p-4"
                  >
                    <span className={`mb-4 block h-1.5 w-10 rounded-full ${metric.accent}`} />
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6a706e]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-black">{metric.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-lg bg-[#171817] p-4 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black">Acme Studios</p>
                    <p className="mt-1 text-sm text-white/60">
                      INV-1048 due today
                    </p>
                  </div>
                  <p className="text-right text-xl font-black">Rs. 42,000</p>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
                  <motion.div
                    className="h-full rounded-full bg-[#0f9f8b]"
                    initial={{ width: "18%" }}
                    animate={{ width: "72%" }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-4 w-[78%] rounded-lg border border-black/10 bg-[#171817] p-4 text-white shadow-[0_24px_60px_rgba(23,24,23,0.22)] sm:left-10 sm:w-[68%]"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-bold text-white/55">
                Automation sequence
              </p>
              <div className="mt-4 space-y-3">
                {["Due date passed", "Reminder sent", "Checkout opened"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <motion.span
                        className="size-2.5 rounded-full bg-[#d8ff5f]"
                        animate={{ opacity: [0.35, 1, 0.35] }}
                        transition={{
                          duration: 1.8,
                          delay: index * 0.35,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-sm font-bold">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-0 right-2 rounded-lg border border-black/10 bg-white p-4 shadow-[0_22px_56px_rgba(23,24,23,0.16)] sm:right-10"
              animate={{ rotate: [-1.5, 1.5, -1.5], y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#6a706e]">
                Stripe
              </p>
              <p className="mt-2 text-2xl font-black">Paid</p>
              <p className="mt-1 text-sm font-bold text-[#0f9f8b]">
                Webhook reconciled
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-black uppercase tracking-[0.18em] text-[#ff6b4a]"
            >
              MVP coverage
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-black tracking-normal sm:text-5xl"
            >
              Every recovery surface has a job and a place.
            </motion.h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-black/10 bg-[#f7f9fa] p-5"
              >
                <span className={`mb-7 block h-2 w-12 rounded-full ${feature.color}`} />
                <h3 className="text-lg font-black">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#59615f]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-black uppercase tracking-[0.18em] text-[#0f9f8b]"
            >
              Recovery loop
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-black tracking-normal sm:text-5xl"
            >
              The system keeps invoices moving until the ledger closes.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-7 text-[#59615f]"
            >
              Daily automation checks unpaid invoices, transactional email keeps
              the client informed, Stripe handles payment, and webhooks update
              the final state.
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-6 h-[calc(100%-48px)] w-px bg-black/15" />
            <div className="grid gap-3">
              {timeline.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex min-h-16 items-center gap-4 rounded-lg border border-black/10 bg-white p-4"
                >
                  <span className="z-10 grid size-10 shrink-0 place-items-center rounded-lg bg-[#171817] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-black">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-[#171817] px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d8ff5f]">
              Built for the free-tier stack
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-normal">
              Next.js, Clerk, Drizzle, Resend, Stripe, and serverless cron.
            </h2>
          </div>
          <Link
            href="/dashboard/clients"
            className="rounded-lg bg-white px-5 py-3 text-center text-sm font-black text-[#171817] transition hover:bg-[#eef2f3]"
          >
            Manage clients
          </Link>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 text-sm font-bold text-[#59615f] sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>PayChaser automates the quiet work between sending and getting paid.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="transition hover:text-[#171817]" href="/dashboard">
              Dashboard
            </Link>
            <Link
              className="transition hover:text-[#171817]"
              href="/dashboard/clients"
            >
              Clients
            </Link>
            <Link className="transition hover:text-[#171817]" href="/invoice/demo">
              Invoice
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
