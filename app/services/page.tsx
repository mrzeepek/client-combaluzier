import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MapPin, Heart, Star } from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Mes Services",
  description:
    "Accompagnement shopping en magasin, création de tenues, tri de garde-robe et personal shopping sur mesure. Découvrez toutes les prestations de Joy's Personal Shopper.",
};

interface Service {
  num: string;
  tagline: string;
  title: string[];
  description: string;
  image: { src: string; alt: string };
}

const services: Service[] = [
  {
    num: "01",
    tagline: "Shopping & accompagnement",
    title: ["Shopping", "en magasin"],
    description:
      "L'expérience shopping réinventée. Je vous accompagne en boutique pour faire des choix qui vous correspondent vraiment — non pas ce que la mode dicte, mais ce qui parle de vous. Ensemble, nous sélectionnons les pièces selon votre morphologie, vos couleurs et votre style de vie, dans des enseignes choisies avec soin. Vous repartez avec des achats réfléchis, une garde-robe enrichie, et surtout, la confiance de savoir quoi mettre.",
    image: {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85",
      alt: "Femme faisant du shopping dans une boutique élégante — personal shopper Montpellier",
    },
  },
  {
    num: "02",
    tagline: "Stylisme & composition",
    title: ["Création", "de tenues"],
    description:
      "Votre garde-robe recèle probablement bien plus de possibilités que vous ne le pensez. Ensemble, nous explorons ce que vous possédez déjà et créons des associations inédites — des looks cohérents, portables au quotidien, qui expriment qui vous êtes. Fini les matins face au placard à ne plus savoir quoi mettre. Je vous apprends à composer vos tenues avec instinct et aisance, pour que chaque sortie devienne une évidence.",
    image: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
      alt: "Composition de tenues élégantes — conseil en image",
    },
  },
  {
    num: "03",
    tagline: "Éditing & épuration",
    title: ["Tri de", "garde-robe"],
    description:
      "Une garde-robe qui fonctionne n'est pas forcément une grande garde-robe — c'est une garde-robe juste. Nous faisons ensemble un audit complet de ce que vous possédez : ce qui vous va vraiment, ce qui ne vous sert plus, ce qui mérite d'être gardé, transformé ou transmis. Vous repartez avec un espace épuré, organisé, où chaque pièce a sa raison d'être. Un nouveau souffle pour votre quotidien.",
    image: {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85",
      alt: "Garde-robe organisée et épurée — tri et conseil en image",
    },
  },
  {
    num: "04",
    tagline: "Sur-mesure & personnalisé",
    title: ["Personal", "shopping"],
    description:
      "La prestation la plus complète et la plus intime. Un accompagnement pensé entièrement pour vous — vos besoins, votre budget, votre personnalité, votre rythme. Que vous traversiez un changement de vie, prépariez un événement important ou souhaitiez simplement vous réinventer, je suis là de A à Z. Disponible à Montpellier et partout en France, en présentiel ou à distance selon vos préférences.",
    image: {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85",
      alt: "Personal shopping sur mesure — accompagnement personnalisé",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] bg-cream overflow-hidden flex items-end pt-24 pb-0">
        {/* Image éditoriale en arrière-plan — fondue à gauche */}
        <div className="absolute top-0 right-0 bottom-0 w-[55%] hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
            alt="Joy's Personal Shopper — services mode et style"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pb-0">
          {/* Label */}
          <p className="section-label animate-fade-in mb-8">
            Joy&apos;s Personal Shopper
          </p>

          {/* Titre — typographie éditoriale avec mot en relief */}
          <h1
            className="font-serif italic text-charcoal animate-slide-up leading-[0.85] mb-10"
            style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}
          >
            Mes
            <br />
            <span
              className="not-italic font-serif text-gold/80"
              style={{ fontSize: "0.55em", letterSpacing: "0.05em" }}
            >
              &nbsp;&nbsp;&nbsp;
            </span>
            ser<span className="italic">vices</span>
          </h1>

          {/* Ligne basse — citation + séparateur */}
          <div className="flex items-end gap-8 pb-0">
            <div className="w-20 h-px bg-gold/50 mb-2 flex-shrink-0" />
            <p className="font-sans text-muted/70 text-sm tracking-[0.1em] mb-2 max-w-xs">
              Chaque parcours est unique — chaque style, une histoire à écrire
              ensemble.
            </p>
          </div>

          {/* Bande dorée bas de hero */}
          <div className="w-full h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent mt-10" />
        </div>
      </section>

      {/* ─── BARRE DE VALEURS ─── */}
      <section
        className="py-16 px-6 border-b border-gold/10"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              Icon: Sparkles,
              label:
                "Accompagnement 100% personnalisé, adapté à votre personnalité",
            },
            {
              Icon: MapPin,
              label: "Disponible à Montpellier et partout en France",
            },
            {
              Icon: Heart,
              label: "Conseil en image bienveillant, sans jugement",
            },
            {
              Icon: Star,
              label:
                "Résultats durables — un style qui vous ressemble vraiment",
            },
          ].map(({ Icon, label }, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="flex flex-col items-center text-center gap-5">
                {/* Cercle blanc avec ombre + icône or */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1.5px solid #a77b0040",
                    boxShadow:
                      "0 4px 20px rgba(167, 123, 0, 0.12), 0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: "#a77b00" }}
                  />
                </div>
                <p
                  className="font-sans text-sm leading-relaxed max-w-[160px]"
                  style={{ color: "#515154" }}
                >
                  {label}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      {services.map((service, i) => {
        const isEven = i % 2 === 1;
        const rotation = isEven
          ? "rotate(1deg) translateY(-8px)"
          : "rotate(-1deg) translateY(-8px)";
        const bg = isEven ? "#f7f4f0" : "#faf8f5";

        return (
          <section
            key={service.num}
            style={{ backgroundColor: bg }}
            className="py-28 px-6 overflow-visible"
          >
            <div className="max-w-[1200px] mx-auto relative">
              {/* Numéro décoratif en fond */}
              <span
                aria-hidden
                className="hidden md:block absolute font-serif italic select-none pointer-events-none text-charcoal leading-none"
                style={{
                  fontSize: "clamp(8rem, 22vw, 18rem)",
                  opacity: 0.04,
                  top: isEven ? "auto" : "-2rem",
                  bottom: isEven ? "-2rem" : "auto",
                  right: isEven ? "auto" : "-1rem",
                  left: isEven ? "-1rem" : "auto",
                  zIndex: 0,
                }}
              >
                {service.num}
              </span>

              <RevealWrapper className="relative z-10">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center`}
                >
                  {/* Bloc texte */}
                  <div
                    className={`${isEven ? "md:order-2" : "md:order-1"} order-2 max-w-lg`}
                  >
                    <p className="section-label mb-5">{service.tagline}</p>

                    <h2
                      className="font-serif italic text-charcoal leading-[0.88] mb-6"
                      style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                    >
                      {service.title.map((line, j) => (
                        <span key={j} className="block">
                          {line}
                        </span>
                      ))}
                    </h2>

                    <div className="w-12 h-px bg-gold mb-8" />

                    <p className="text-muted text-[15px] leading-[1.9]">
                      {service.description}
                    </p>
                  </div>

                  {/* Image portrait */}
                  <div
                    className={`${isEven ? "md:order-1" : "md:order-2"} order-1 flex justify-center ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div
                      className="relative overflow-hidden w-full max-w-[340px]"
                      style={{
                        aspectRatio: "3/4",
                        transform: rotation,
                        boxShadow:
                          "0 24px 64px rgba(26, 23, 20, 0.13), 0 4px 16px rgba(26, 23, 20, 0.07)",
                      }}
                    >
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 340px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            </div>
          </section>
        );
      })}

      {/* ─── CTA ─── */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <RevealWrapper>
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans mb-6">
              Une question ? Un projet ?
            </p>
            <h2
              className="font-serif italic text-cream leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Parlons de
              <br />
              votre style
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-8" />
            <p className="text-cream/50 leading-relaxed mb-10 text-[15px]">
              Chaque parcours est unique. Contactez-moi pour qu&apos;on échange
              sur vos besoins et trouve ensemble la prestation adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary">
                Prendre rendez-vous
              </Link>
              <a href="tel:0659255869" className="btn-ghost-light">
                Appeler directement <ArrowRight size={13} />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
