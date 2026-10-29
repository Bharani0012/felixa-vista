export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-semibold">Felixa Vistas</h2>
          <p className="mt-2 text-sm text-white/70">Padappai, Chennai</p>
        </div>
        <div>
          <h3 className="font-medium">Head office</h3>
          <p className="mt-2 text-sm text-white/70">
            16, Balaraman Road, Adyar, Chennai 600 020
          </p>
        </div>
        <div>
          <h3 className="font-medium">Contact</h3>
          <p className="mt-2 text-sm text-white/70">
            Phone / WhatsApp: [placeholder]
          </p>
          <p className="text-sm text-white/70">Email: [placeholder]</p>
        </div>
        <div>
          <h3 className="font-medium">RERA</h3>
          <p className="mt-2 text-sm text-white/70">
            RERA No: TNRERA/**/**/****/****
          </p>
          <p className="text-sm text-white/70">www.rera.tn.gov.in</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright 2026. All rights reserved.
      </p>
    </footer>
  );
}
