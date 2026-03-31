import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

const services = [
  {
    num: "01",
    title: "Accompagnement shopping en magasin",
    desc: "Je vous accompagne en boutique pour choisir les pièces qui vous correspondent vraiment.",
  },
  {
    num: "02",
    title: "Aide à la création de tenues",
    desc: "Créons ensemble des looks cohérents et adaptés à votre style de vie.",
  },
  {
    num: "03",
    title: "Tri de garde-robe",
    desc: "Faites le point sur ce que vous avez et repartez avec une garde-robe optimisée.",
  },
  {
    num: "04",
    title: "Personal shopping sur mesure",
    desc: "Un accompagnement 100% personnalisé selon vos besoins et votre budget.",
  },
] as const;

const testimonials = [
  {
    quote:
      "Claire a transformé ma façon de m'habiller. Je me sens enfin moi-même.",
    author: "Sophie M.",
    city: "Montpellier",
  },
  {
    quote:
      "Un accompagnement professionnel et bienveillant. Je recommande vivement Joy's.",
    author: "Isabelle L.",
    city: "Paris",
  },
  {
    quote: "Grâce à Joy's, j'ai redécouvert ma garde-robe et mon propre style.",
    author: "Marie-Christine B.",
    city: "Bordeaux",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen bg-cream overflow-hidden pt-16"
        aria-label="Accueil — Joy's Personal Shopper"
      >
        {/* Image fond mobile — plein écran derrière le texte */}
        <div className="lg:hidden absolute inset-0 z-0">
          <Image
            src="/claire-style.jpg"
            alt=""
            fill
            className="object-cover object-[50%_12%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-cream/55 to-cream" />
        </div>

        {/* Image — desktop, plein bord droit */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[52%] z-0 animate-fade-in motion-reduce:animate-none">
          <Image
            src="/claire-hero.jpg"
            alt="Claire Combaluzier, Personal Shopper à Montpellier"
            fill
            className="object-cover object-[50%_12%]"
            priority
          />
          {/* Dégradé gauche — fondu progressif sur toute la largeur */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(250,248,245,1) 0%, rgba(250,248,245,0.9) 15%, rgba(250,248,245,0.5) 35%, rgba(250,248,245,0.15) 55%, transparent 75%)'}} />
        </div>

        {/* Contenu — texte ancré en bas sur mobile, centré sur desktop */}
        <div className="relative z-10 flex flex-col justify-end lg:justify-center min-h-[calc(100vh-4rem)] lg:min-h-screen lg:w-[60%] px-8 lg:pl-16 lg:pr-8 pb-14 lg:pb-0">
          <p className="section-label animate-fade-in motion-reduce:animate-none mb-7">
            Joy&apos;s · Personal Shopper · Montpellier
          </p>

          {/* Headline — proposition de valeur sur 2 niveaux typographiques */}
          <div className="relative">
            <h1 className="font-serif italic text-charcoal leading-[0.85] animate-slide-up motion-reduce:animate-none">
              <span
                className="block"
                style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
              >
                Le style
              </span>
              <span
                className="block text-charcoal/80"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                qui vous ressemble.
              </span>
            </h1>
            {/* Ligne or qui s'étend au-delà de la colonne texte — effet éditorial */}
            <span
              className="absolute left-0 -bottom-1 block h-px bg-gradient-to-r from-gold via-gold/50 to-transparent animate-fade-in motion-reduce:animate-none"
              style={{
                width: "calc(100% + clamp(3rem, 10vw, 12rem))",
                animationDelay: "0.45s",
                animationFillMode: "both",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Signature */}
          <p
            className="font-sans text-[0.6875rem] tracking-[0.28em] uppercase text-muted animate-fade-in motion-reduce:animate-none mt-7 mb-8"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Claire Combaluzier
          </p>

          <p
            className="font-sans text-muted leading-relaxed mb-11 animate-slide-up-1 motion-reduce:animate-none"
            style={{
              fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
              maxWidth: "38ch",
            }}
          >
            Pas de shopping inutile. Pas de look imposé. Juste le style que vous
            cherchez depuis longtemps — enfin trouvé, avec moi.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 animate-fade-in-delay motion-reduce:animate-none">
            <Link
              href="/contact"
              className="btn-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/services"
              className="btn-ghost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Découvrir mes services <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES (aperçu) ─── */}
      <section className="py-28 px-6 bg-cream-dark">
        <div className="max-w-5xl mx-auto">
          <RevealWrapper>
            <div className="mb-14">
              <p className="section-label mb-4">Ce que je propose</p>
              <h2
                className="font-serif italic text-charcoal leading-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Mes services
              </h2>
            </div>
          </RevealWrapper>

          {/* Liste éditoriale numérotée */}
          <div className="divide-y divide-cream-border">
            {services.map((service, i) => (
              <RevealWrapper key={service.num} delay={i * 70}>
                <Link
                  href="/services"
                  className="group flex items-start md:items-center justify-between gap-6 py-6 -mx-3 px-3 hover:bg-cream transition-colors duration-200 rounded-sm"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 min-w-0">
                    <span className="font-serif text-sm text-gold/40 italic shrink-0 mt-0.5 md:mt-0 w-6">
                      {service.num}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal group-hover:text-gold transition-colors duration-200 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted mt-1 leading-relaxed md:hidden">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-6 shrink-0">
                    <p className="text-sm text-muted max-w-xs text-right leading-relaxed">
                      {service.desc}
                    </p>
                    <ArrowRight
                      size={16}
                      className="text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200 shrink-0"
                    />
                  </div>
                  <ArrowRight
                    size={16}
                    className="md:hidden text-gold/30 group-hover:text-gold transition-colors duration-200 shrink-0 mt-0.5"
                  />
                </Link>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper delay={360}>
            <div className="mt-12">
              <Link href="/services" className="btn-ghost">
                Toutes les prestations <ArrowRight size={13} />
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ─── À PROPOS ─── */}
      <section id="apropos" className="py-28 px-6 bg-cream scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* Texte — 3 colonnes */}
            <div className="md:col-span-3">
              <RevealWrapper>
                <p className="section-label mb-4">À propos</p>
                <h2
                  className="font-serif italic text-charcoal leading-[0.9] mb-6"
                  style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
                >
                  Claire
                  <br />
                  Combaluzier
                </h2>
                <div className="w-10 h-px bg-gold mb-8" />
                <div className="space-y-5 text-muted leading-relaxed text-[15px]">
                  <p>
                    Passionnée par la mode et le conseil en image, Claire
                    Combaluzier est personal shopper basée à Montpellier et
                    intervient partout en France.
                  </p>
                  <p>
                    Elle aide ses clients à trouver un style authentique qui
                    leur ressemble — un style qui parle de qui ils sont
                    vraiment, adapté à leur personnalité et à leur quotidien.
                  </p>
                  <p>
                    Chaque accompagnement est unique, pensé pour vous, à votre
                    rythme, avec bienveillance et professionnalisme.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MapPin size={13} className="text-gold shrink-0" />
                    Montpellier & toute la France
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Phone size={13} className="text-gold shrink-0" />
                    <a
                      href="tel:0659255869"
                      className="hover:text-gold transition-colors"
                    >
                      06 59 25 58 69
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <Mail size={13} className="text-gold shrink-0" />
                    <a
                      href="mailto:cjoli334@gmail.com"
                      className="hover:text-gold transition-colors"
                    >
                      cjoli334@gmail.com
                    </a>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Cadre décoratif — 2 colonnes */}
            <div className="md:col-span-2">
              <RevealWrapper delay={200}>
                <div className="relative aspect-[3/4] max-w-xs mx-auto md:mx-0">
                  {/* Photo Claire */}
                  <Image
                    src="/claire-portrait.jpg"
                    alt="Claire Combaluzier — Personal Shopper à Montpellier"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Accents dorés aux coins */}
                  <div className="absolute top-0 left-0 w-8 h-px bg-gold z-10" />
                  <div className="absolute top-0 left-0 h-8 w-px bg-gold z-10" />
                  <div className="absolute bottom-0 right-0 w-8 h-px bg-gold z-10" />
                  <div className="absolute bottom-0 right-0 h-8 w-px bg-gold z-10" />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <RevealWrapper>
            <div className="mb-14 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-4">
                Ce qu&apos;elles disent
              </p>
              <h2
                className="font-serif italic text-cream leading-tight"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                Témoignages
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <RevealWrapper key={i} delay={i * 100}>
                <div className="border border-cream/10 p-8 hover:border-gold/30 transition-colors duration-300 h-full flex flex-col">
                  <p className="font-serif text-4xl text-gold/30 leading-none mb-4">
                    &ldquo;
                  </p>
                  <p className="font-serif text-xl italic text-cream/75 leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="w-8 h-px bg-gold/30 mb-4" />
                  <p className="text-xs tracking-[0.15em] uppercase font-sans text-cream/40">
                    {t.author} · {t.city}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-32 px-6 bg-cream-dark">
        <div className="max-w-2xl mx-auto text-center">
          <RevealWrapper>
            <p className="section-label mb-6">Prête à commencer ?</p>
            <h2
              className="font-serif italic text-charcoal leading-[0.9] mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              Votre style,
              <br />
              revisité.
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="text-muted leading-relaxed mb-10 text-[15px]">
              Prenez rendez-vous pour un premier échange, sans engagement. Je
              suis là pour vous aider à révéler votre style.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary">
                Prendre rendez-vous
              </Link>
              <a href="tel:0659255869" className="btn-ghost">
                Appeler directement <ArrowRight size={13} />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
