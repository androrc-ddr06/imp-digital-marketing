"use client";

import { useState, type FormEvent } from "react";
import Mark from "./Mark";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-forest/15 bg-cream/50 px-4 py-3 text-forest placeholder:text-forest/35 outline-none transition-colors duration-300 focus:border-forest focus:bg-white/70";

const labelClass = "mb-2 block text-sm font-medium text-forest";

export default function ContactForm({ formspreeId }: { formspreeId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!formspreeId || formspreeId === "your-form-id") {
      setStatus("error");
      setError(
        "Form isn't connected yet. Add your Formspree ID to NEXT_PUBLIC_FORMSPREE_ID to start receiving messages."
      );
      return;
    }

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setStatus("error");
        setError(
          body?.errors?.[0]?.message ?? "Something went wrong. Please try again or email me directly."
        );
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest/12 bg-cream-dim/40 p-10 text-center">
        <Mark title="" className="mx-auto h-12 w-12 text-sage" />
        <h2 className="font-display mt-6 text-3xl text-forest">Message received.</h2>
        <p className="mx-auto mt-3 max-w-md text-forest/70">
          Thanks for reaching out — I read every message personally and will get back to you
          shortly. Talk soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-8 text-sm font-medium text-forest"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* The two signature questions */}
      <div>
        <label htmlFor="struggle" className={labelClass}>
          What are you struggling with most right now? <span className="text-sage">*</span>
        </label>
        <textarea
          id="struggle"
          name="What they're struggling with"
          required
          rows={4}
          placeholder="Tell me what's not working — slow sales, a dated brand, no time for social, leads going cold…"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="why-now" className={labelClass}>
          Why is now the right time to fix it? <span className="text-sage">*</span>
        </label>
        <textarea
          id="why-now"
          name="Why now is the right time"
          required
          rows={3}
          placeholder="A busy season coming up, a new location, a competitor pulling ahead…"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-sage">*</span>
          </label>
          <input id="name" name="Name" required type="text" placeholder="Jane Doe" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name
          </label>
          <input
            id="business"
            name="Business"
            type="text"
            placeholder="Your company"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-sage">*</span>
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@business.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            placeholder="(555) 123-4567"
            className={fieldClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-300/60 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-cream transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-moss disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && (
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        )}
      </button>
    </form>
  );
}
