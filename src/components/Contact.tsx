"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 border-t border-black/10 dark:border-white/10">
      <h2 className="text-sm font-medium text-foreground/50 uppercase tracking-widest">Contact</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-balance">
            Let&apos;s build something great together.
          </h3>
          <p className="mt-3 text-foreground/70 text-pretty">
            Have a project in mind? Tell me a bit about it and I&apos;ll get back to you within
            24 hours.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-foreground/70">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-foreground/70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
          </div>

          <div>
            <label htmlFor="budget" className="text-sm text-foreground/70">
              Budget (optional)
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="e.g. $2,000 – $5,000"
              className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm text-foreground/70">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-black/30 dark:focus:border-white/30"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks! Your message has been sent — I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
