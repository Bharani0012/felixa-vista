import { highlights, images } from "@/data/content";
import SafeImage from "./SafeImage";

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[560px] items-center bg-brand-dark text-white"
      >
        <SafeImage
          src={images.hero}
          alt="Modern home with landscaped garden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-28 pt-28">
          <p className="mb-3 text-sm">Padappai, Chennai</p>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
            Build your dream home at Felixa Vistas
          </h1>
          <p className="mt-4 max-w-lg text-white/90">
            Ready-to-construct plots in a secure gated community with 25+
            lifestyle amenities, 10 minutes from Vandalur Bus Stand.
          </p>
          <a
            href="#about"
            className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-medium text-brand-dark"
          >
            Explore Now
          </a>
        </div>
      </section>

      <section
        id="highlights"
        aria-label="Highlights"
        className="relative z-10 mx-auto -mt-16 max-w-5xl px-5"
      >
        <ul className="grid grid-cols-2 gap-y-6 rounded-3xl bg-brand px-4 py-7 text-center text-white shadow-lg md:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.label}>
              <p className="text-3xl font-semibold">{h.value}</p>
              <p className="mt-1 text-sm text-white/85">{h.label}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
