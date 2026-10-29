"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.6fr]"
    >
      <div>
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <p className="mt-3 text-neutral-600">
          Everything you need to know before you book a visit to Felixa Vistas.
        </p>
        <a
          href="#enquiry"
          className="mt-5 inline-block font-medium text-brand underline underline-offset-4"
        >
          Visit us now
        </a>
      </div>
      <ul className="divide-y divide-neutral-200">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <li key={f.q}>
              <h3>
                <button
                  className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium"
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {f.q}
                  <span aria-hidden className="text-xl">
                    {open ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {open && (
                <p id={`faq-${i}`} className="pb-4 text-neutral-600">
                  {f.a}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
