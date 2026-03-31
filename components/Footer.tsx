import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contenu principal */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <p className="font-serif text-3xl italic text-cream mb-1">
              Joy&apos;s
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-gold font-sans mb-5">
              Personal Shopper
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Accompagnement personnalisé pour trouver un style qui vous
              ressemble vraiment.
            </p>
            <p className="text-sm mt-2">Montpellier & toute la France</p>
          </div>

          {/* Liens */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-cream/30 font-sans mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/services"
                className="text-sm hover:text-gold transition-colors duration-200"
              >
                Mes services
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-gold transition-colors duration-200"
              >
                Contact & rendez-vous
              </Link>
              <Link
                href="/mentions-legales"
                className="text-sm hover:text-gold transition-colors duration-200"
              >
                Mentions légales
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-cream/30 font-sans mb-5">
              Me contacter
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0659255869"
                className="text-sm hover:text-gold transition-colors duration-200"
              >
                06 59 25 58 69
              </a>
              <a
                href="mailto:cjoli334@gmail.com"
                className="text-sm hover:text-gold transition-colors duration-200"
              >
                cjoli334@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur + copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © 2025 JOY&apos;S Personal Shopper — Claire Combaluzier
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://creamix.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-gold transition-colors duration-200"
            >
              Site conçu par Creamix.io
            </a>
            <Link
              href="/mentions-legales"
              className="text-xs hover:text-gold transition-colors duration-200"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
