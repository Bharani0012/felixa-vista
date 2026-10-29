"use client";

import { useState } from "react";
import { connectivity } from "@/data/content";

export default function Connectivity() {
  const [active, setActive] = useState(0);
  return (
    <section id="connectivity" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl font-semibold">Connectivity</h2>
      <p className="mt-3 max-w-2xl text-neutral-600">
        Nearby IT parks, hospitals, entertainment and educational institutions.
        Names and distances will be confirmed by the project team.
      </p>
      <div role="tablist" className="mt-6 flex flex-wrap gap-2">
        {connectivity.map((c, i) => (
          <button
            key={c.tab}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-2 text-sm ${active === i ? "border-brand bg-brand text-white" : "border-neutral-300 hover:border-brand"}`}
          >
            {c.tab}
          </button>
        ))}
      </div>
      <ol className="relative mt-10 grid grid-cols-2 gap-6 border-t-2 border-brand pt-8 md:grid-cols-4">
        {connectivity[active].items.map((name) => (
          <li key={name} className="relative">
            <span
              className="absolute -top-[41px] left-0 h-4 w-4 rounded-full border-2 border-brand bg-white"
              aria-hidden
            />
            <p className="font-medium">{name}</p>
            <p className="text-sm text-neutral-500">000 km</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
