"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
        aria-label="Main"
      >
        <a href="#top" className="text-xl font-semibold tracking-wide">
          Felixa Vistas
        </a>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#enquiry"
              className="rounded-full bg-white px-4 py-2 font-medium text-brand-dark"
            >
              Book a site visit
            </a>
          </li>
        </ul>
        <button
          className="rounded border border-white/60 px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul
          id="mobile-menu"
          className="mx-5 space-y-1 rounded-2xl bg-white p-3 text-ink shadow-lg md:hidden"
        >
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 hover:bg-sand"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-brand px-3 py-2 text-center font-medium text-white"
            >
              Book a site visit
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
