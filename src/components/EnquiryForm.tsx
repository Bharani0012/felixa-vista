"use client";

import { useState } from "react";
import { timelines } from "@/data/content";

type Errors = Partial<
  Record<"name" | "mobile" | "email" | "timeline" | "date" | "consent", string>
>;

const field =
  "mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next: Errors = {};
    if (String(d.get("name")).trim().length < 2)
      next.name = "Enter your full name.";
    if (!/^[6-9]\d{9}$/.test(String(d.get("mobile")).replace(/\s/g, "")))
      next.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(String(d.get("email"))))
      next.email = "Enter a valid email address.";
    if (!d.get("timeline")) next.timeline = "Select when you plan to buy.";
    const date = String(d.get("date"));
    if (!date) next.date = "Choose a visit date.";
    else if (date < new Date().toISOString().slice(0, 10))
      next.date = "Choose today or a future date.";
    if (!d.get("consent")) next.consent = "Please agree to be contacted.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p className="mt-1 text-sm text-red-600">{errors[k]}</p> : null;

  return (
    <section id="enquiry" className="bg-sand py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-md sm:p-8">
          <p className="text-sm text-neutral-500">
            Your next chapter starts here
          </p>
          <h2 className="mb-5 text-3xl font-semibold">Book your site visit</h2>
          {done ? (
            <p
              role="status"
              className="rounded-lg bg-brand-light p-4 text-brand-dark"
            >
              Thank you! Your enquiry has been received. Our team will contact
              you shortly.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={field}
                />
                {err("name")}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="mobile">Mobile number</label>
                  <div className="flex items-center gap-2">
                    <span className="mt-1 rounded-lg border border-neutral-300 px-3 py-2 text-neutral-600">
                      +91
                    </span>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      className={field}
                    />
                  </div>
                  {err("mobile")}
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={field}
                  />
                  {err("email")}
                </div>
              </div>
              <div>
                <label htmlFor="timeline">When are you planning to buy?</label>
                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className={field}
                >
                  <option value="" disabled>
                    Select your timeline
                  </option>
                  {timelines.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {err("timeline")}
              </div>
              <div>
                <label htmlFor="date">When can you visit the site?</label>
                <input id="date" name="date" type="date" className={field} />
                {err("date")}
              </div>
              <div>
                <label className="flex items-start gap-2 text-sm">
                  <input type="checkbox" name="consent" className="mt-1" />
                  <span>I agree to be contacted about my enquiry.</span>
                </label>
                {err("consent")}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-brand-dark"
              >
                I&apos;m interested
              </button>
              <p className="text-xs text-neutral-500">
                Your information is confidential and will only be used to assist
                with your enquiry.
              </p>
            </form>
          )}
        </div>
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-brand/40 bg-brand-light text-center text-brand-dark">
          <p className="text-lg font-medium">Map placeholder</p>
          <p className="text-sm">Padappai, Chennai</p>
        </div>
      </div>
    </section>
  );
}
