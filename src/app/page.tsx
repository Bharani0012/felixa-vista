import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AmenityCard from "@/components/AmenityCard";
import SafeImage from "@/components/SafeImage";
import Connectivity from "@/components/Connectivity";
import Faq from "@/components/Faq";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { amenities, banks, images, locations, whyPoints } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2"
        >
          <div>
            <p className="text-sm font-medium text-brand">About project</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              A lifestyle shaped around you.
            </h2>
            <p className="mt-4 max-w-prose text-neutral-600">
              Discover Felixa Vistas, a plotted development in Padappai,
              Chennai, offering the freedom to build your dream home. With
              excellent connectivity to Vandalur, Mudichur and Tambaram, along
              with 25+ lifestyle amenities and a peaceful green environment, it
              brings together everyday convenience and comfortable living.
            </p>
          </div>
          <SafeImage
            src={images.about}
            alt="Modern residential property"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </section>

        <div className="mx-auto max-w-6xl px-5">
          <SafeImage
            src={images.banner}
            alt="Residential community"
            className="h-64 w-full rounded-3xl object-cover sm:h-96"
          />
        </div>

        <section
          id="why"
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2"
        >
          <SafeImage
            src={images.why}
            alt="Bright living room"
            className="h-72 w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm font-medium text-brand">Why us</p>
            <h2 className="mt-2 text-3xl font-semibold">Why Felixa Vistas?</h2>
            <ul className="mt-5 space-y-4">
              {whyPoints.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs text-white"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="font-medium">{p.title}</h3>
                    <p className="text-sm text-neutral-600">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="amenities" className="mx-auto max-w-6xl px-5 pb-20">
          <p className="text-sm font-medium text-brand">Amenities</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Designed for better living.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a) => (
              <AmenityCard key={a.title} {...a} />
            ))}
          </div>
        </section>

        <section className="relative flex min-h-[340px] items-center justify-center bg-brand-dark px-5 text-center text-white">
          <SafeImage
            src={images.quote}
            alt="Elegant interior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <p className="relative max-w-2xl text-xl leading-relaxed sm:text-2xl">
            Comfort, convenience and a green setting, all within a secure
            community built around the way you want to live.
          </p>
        </section>

        <section
          id="location"
          className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2"
        >
          <div>
            <p className="text-sm font-medium text-brand">
              Location advantages
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              A prime address, closer to everything.
            </h2>
            <p className="mt-4 max-w-prose text-neutral-600">
              Located on the highway in Padappai, Chennai, Felixa Vistas offers
              convenient connectivity to Vandalur, Mudichur and Tambaram. Just a
              10-minute drive from Vandalur Bus Stand, its strategic location
              brings everyday convenience closer while offering a peaceful,
              green environment to call home.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {locations.map((l) => (
                <li
                  key={l}
                  className="rounded-full bg-brand-light px-4 py-1.5 text-sm text-brand-dark"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <SafeImage
            src={images.location}
            alt="Aerial view of the Padappai area"
            className="h-72 w-full rounded-2xl object-cover"
          />
        </section>

        <Connectivity />

        <section id="loans" className="bg-sand py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-medium text-brand">
              Home loan facilities
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              A smarter, simpler path to homeownership.
            </h2>
            <p className="mt-4 max-w-3xl text-neutral-600">
              Felixa Vistas makes your home-buying journey more convenient with
              APF approval from leading banks, including SBI, HDFC, ICICI, Axis
              Bank, IDBI and LIC. With home loan facilities of up to 80%, you
              can take a confident step towards owning your dream plot.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {banks.map((b) => (
                <li
                  key={b}
                  className="rounded-xl bg-white px-3 py-5 text-center font-semibold text-brand-dark shadow-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Faq />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
