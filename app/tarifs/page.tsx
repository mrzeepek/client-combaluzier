import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  ShoppingBag,
  Sparkles,
  Check,
} from "lucide-react";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Tarifs — Joy's Personal Shopper",
  description:
    "Découvrez les tarifs de Joy's Personal Shopper : accompagnement shopping, tri de dressing, conseil en image. Packs sur mesure à partir de 150€ à Montpellier.",
};

/* ─── Shadow système Notion adapté Joy's ─── */
const shadowCard =
  "rgba(26,23,20,0.04) 0px 4px 18px, rgba(26,23,20,0.027) 0px 2px 7.8px, rgba(26,23,20,0.02) 0px 0.8px 2.9px, rgba(26,23,20,0.01) 0px 0.175px 1px";
const shadowFeatured =
  "rgba(26,23,20,0.05) 0px 23px 52px, rgba(26,23,20,0.04) 0px 14px 28px, rgba(26,23,20,0.03) 0px 7px 15px, rgba(26,23,20,0.02) 0px 3px 7px, rgba(26,23,20,0.01) 0px 1px 3px";

const services = [
  {
    icon: Scissors,
    label: "Éditing & épuration",
    title: "Tri de dressing",
    options: [
      { duration: "1 heure", price: "70€" },
      { duration: "2 heures", price: "130€" },
    ],
    description:
      "Ensemble, nous faisons un audit complet de votre garde-robe. Repartez avec un espace épuré, organisé, où chaque pièce a sa raison d'être.",
  },
  {
    icon: ShoppingBag,
    label: "Shopping & accompagnement",
    title: "Accompagnement shopping",
    options: [
      { duration: "2 heures", price: "140€" },
      { duration: "3 heures", price: "180€" },
    ],
    description:
      "Je vous accompagne en boutique pour des choix qui vous correspondent — morphologie, couleurs, style de vie. Des achats réfléchis, une confiance retrouvée.",
  },
  {
    icon: Sparkles,
    label: "Image & identité",
    title: "Conseil en image",
    options: [{ duration: "1 heure", price: "90€" }],
    description:
      "Un temps dédié à votre image : analyse colorimétrique, morphologie, conseils personnalisés pour affiner votre style et votre présence.",
  },
];

const packs = [
  {
    slug: "essentiel",
    name: "Pack Essentiel",
    price: "150",
    duration: "~2 heures",
    featured: false,
    includes: ["Tri de dressing 2h", "Conseils personnalisés inclus"],
    description:
      "Pour repartir du placard existant, épurer et réorganiser. La base solide pour construire votre style.",
  },
  {
    slug: "transformation",
    name: "Pack Transformation",
    price: "260",
    duration: "~4 heures",
    featured: true,
    badge: "Le plus demandé",
    includes: [
      "Tri de dressing 2h",
      "Accompagnement shopping 2h",
      "Compte-rendu personnalisé",
    ],
    description:
      "On épure, puis on complète ensemble en boutique. Le duo parfait pour une transformation complète et durable.",
  },
  {
    slug: "premium",
    name: "Pack Premium",
    subtitle: "Demi-journée",
    price: "320",
    duration: "3 à 4 heures",
    featured: false,
    includes: [
      "Tri de dressing",
      "Accompagnement shopping",
      "Conseil en image complet",
    ],
    description:
      "L'expérience la plus complète. Une demi-journée entière dédiée à votre style, de A à Z.",
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      {/* Fond crème chaud, lettre décorative en watermark, typographie compressée */}
      <section
        className="relative overflow-hidden flex items-end pt-32 pb-0"
        style={{ backgroundColor: "#faf8f5", minHeight: "52vh" }}
      >
        {/* Lettre décorative — philosophie "analog warmth" */}
        <span
          aria-hidden
          className="hidden md:block absolute right-[-2rem] bottom-0 font-serif italic select-none pointer-events-none"
          style={{
            fontSize: "clamp(14rem, 32vw, 28rem)",
            lineHeight: 0.82,
            color: "#1a1714",
            opacity: 0.035,
            letterSpacing: "-0.04em",
          }}
        >
          T
        </span>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <p className="section-label animate-fade-in mb-8">
            Joy&apos;s Personal Shopper
          </p>

          {/* Titre display — compression à la Notion adaptée Cormorant */}
          <h1
            className="font-serif italic text-charcoal animate-slide-up leading-[0.85] mb-10"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 10.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Mes tarifs
          </h1>

          <div className="flex items-center gap-8 pb-0">
            <div
              className="h-px flex-shrink-0"
              style={{ width: "5rem", backgroundColor: "rgba(167,123,0,0.45)" }}
            />
            <p
              className="font-sans text-sm tracking-[0.08em] mb-0 max-w-sm"
              style={{ color: "rgba(107,100,96,0.75)" }}
            >
              Des prestations pensées pour chaque étape de votre parcours.
            </p>
          </div>

          {/* Ligne séparatrice dégradée */}
          <div
            className="w-full h-px mt-12"
            style={{
              background:
                "linear-gradient(to right, rgba(167,123,0,0.4), rgba(167,123,0,0.15), transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── SERVICES À LA CARTE ─── */}
      {/* Fond blanc pur — alternance warm white/white inspirée Notion */}
      <section className="py-28 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <RevealWrapper>
            <div className="flex items-baseline gap-6 mb-16">
              <div>
                <p className="section-label mb-3">Prestations individuelles</p>
                <h2
                  className="font-serif italic text-charcoal"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 0.9,
                  }}
                >
                  À la carte
                </h2>
              </div>
              {/* Ligne séparatrice Notion-style — whisper */}
              <div
                className="flex-1 h-px hidden md:block"
                style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
              />
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <RevealWrapper key={service.title} delay={i * 90}>
                  <article
                    className="card-hover group flex flex-col h-full bg-white p-8"
                    style={{
                      border: "1px solid rgba(0,0,0,0.08)",
                      boxShadow: shadowCard,
                    }}
                  >
                    {/* Icône encadrée — border whisper or */}
                    <div
                      className="w-11 h-11 flex items-center justify-center mb-6 flex-shrink-0"
                      style={{
                        border: "1px solid rgba(167,123,0,0.22)",
                        backgroundColor: "rgba(167,123,0,0.04)",
                      }}
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        style={{ color: "#a77b00" }}
                      />
                    </div>

                    {/* Label + titre */}
                    <p
                      className="font-sans uppercase mb-2"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                        color: "#a77b00",
                        fontWeight: 500,
                      }}
                    >
                      {service.label}
                    </p>
                    <h3
                      className="font-serif italic text-charcoal mb-4"
                      style={{
                        fontSize: "clamp(1.35rem, 2.5vw, 1.65rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Séparateur whisper */}
                    <div
                      className="mb-5"
                      style={{
                        width: "2rem",
                        height: "1px",
                        backgroundColor: "rgba(167,123,0,0.4)",
                      }}
                    />

                    {/* Description */}
                    <p
                      className="font-sans leading-[1.85] mb-8 flex-1"
                      style={{
                        fontSize: "13.5px",
                        color: "#6b6460",
                        lineHeight: 1.85,
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Grille de prix — metrics Notion-style */}
                    <div className="flex flex-col mt-auto">
                      {service.options.map((opt, j) => (
                        <div
                          key={opt.duration}
                          className="flex items-center justify-between py-3.5"
                          style={{
                            borderTop:
                              j === 0
                                ? "1px solid rgba(0,0,0,0.07)"
                                : "1px solid rgba(0,0,0,0.05)",
                          }}
                        >
                          <span
                            className="font-sans uppercase"
                            style={{
                              fontSize: "11px",
                              letterSpacing: "0.16em",
                              color: "rgba(107,100,96,0.7)",
                              fontWeight: 500,
                            }}
                          >
                            {opt.duration}
                          </span>
                          {/* Prix large — "metric display" Notion */}
                          <span
                            className="font-serif text-charcoal"
                            style={{
                              fontSize: "1.625rem",
                              letterSpacing: "-0.025em",
                              fontWeight: 500,
                              lineHeight: 1,
                            }}
                          >
                            {opt.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PACKS ─── */}
      {/* Fond crème chaud — alternance de section Notion */}
      <section className="py-28 px-6" style={{ backgroundColor: "#f0ede7" }}>
        <div className="max-w-[1200px] mx-auto">
          <RevealWrapper>
            <div className="flex items-baseline gap-6 mb-16">
              <div>
                <p className="section-label mb-3">Offres groupées</p>
                <h2
                  className="font-serif italic text-charcoal"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 0.9,
                  }}
                >
                  Mes packs
                </h2>
              </div>
              <div
                className="flex-1 h-px hidden md:block"
                style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
              />
            </div>
          </RevealWrapper>

          {/* Grille packs — carte featured surélevée avec deep shadow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
            {packs.map((pack, i) => (
              <RevealWrapper key={pack.slug} delay={i * 110}>
                <article
                  className={`relative flex flex-col ${pack.featured ? "md:-translate-y-2.5" : ""} transition-all duration-300`}
                  style={{
                    backgroundColor: pack.featured ? "#1a1714" : "#ffffff",
                    border: pack.featured
                      ? "1px solid rgba(167,123,0,0.45)"
                      : "1px solid rgba(0,0,0,0.08)",
                    padding: pack.featured ? "2.25rem" : "1.875rem",
                    boxShadow: pack.featured ? shadowFeatured : shadowCard,
                  }}
                >
                  {/* Badge pill — philosophie Notion pill badge */}
                  {pack.badge && (
                    <div
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2"
                      style={{
                        backgroundColor: "#a77b00",
                        borderRadius: "9999px",
                        padding: "4px 14px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        className="font-sans font-semibold"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "#faf8f5",
                        }}
                      >
                        {pack.badge}
                      </span>
                    </div>
                  )}

                  {/* En-tête */}
                  <header className="mb-6">
                    <p
                      className="font-sans uppercase mb-2"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        color: "#a77b00",
                        fontWeight: 500,
                        opacity: pack.featured ? 0.9 : 1,
                      }}
                    >
                      {pack.subtitle ?? "Pack"}
                    </p>
                    <h3
                      className="font-serif italic mb-1"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.05,
                        color: pack.featured ? "#faf8f5" : "#1a1714",
                      }}
                    >
                      {pack.name}
                    </h3>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.1em",
                        color: pack.featured
                          ? "rgba(250,248,245,0.38)"
                          : "rgba(107,100,96,0.55)",
                      }}
                    >
                      {pack.duration}
                    </p>
                  </header>

                  {/* Séparateur whisper */}
                  <div
                    className="mb-6"
                    style={{
                      height: "1px",
                      backgroundColor: pack.featured
                        ? "rgba(167,123,0,0.28)"
                        : "rgba(0,0,0,0.07)",
                    }}
                  />

                  {/* Prix — metric display Notion 40px+ weight 700 */}
                  <div className="mb-8">
                    <span
                      className="font-serif"
                      style={{
                        fontSize: "clamp(2.75rem, 5vw, 3.75rem)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        color: pack.featured ? "#faf8f5" : "#1a1714",
                        fontWeight: 500,
                      }}
                    >
                      {pack.price}
                      <span
                        className="font-sans"
                        style={{
                          fontSize: "1.1rem",
                          letterSpacing: "0",
                          fontWeight: 400,
                          marginLeft: "0.1em",
                          color: pack.featured
                            ? "rgba(250,248,245,0.6)"
                            : "rgba(26,23,20,0.55)",
                        }}
                      >
                        €
                      </span>
                    </span>
                  </div>

                  {/* Liste inclus */}
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {pack.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={12}
                          strokeWidth={2.5}
                          style={{
                            color: "#a77b00",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        />
                        <span
                          className="font-sans"
                          style={{
                            fontSize: "13px",
                            lineHeight: 1.7,
                            color: pack.featured
                              ? "rgba(250,248,245,0.72)"
                              : "#6b6460",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Description courte */}
                  <p
                    className="font-sans mb-8"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.85,
                      color: pack.featured
                        ? "rgba(250,248,245,0.38)"
                        : "rgba(107,100,96,0.65)",
                    }}
                  >
                    {pack.description}
                  </p>

                  {/* CTA */}
                  {pack.featured ? (
                    <Link href="/contact" className="btn-primary">
                      Réserver une séance
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="btn-ghost"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Réserver <ArrowRight size={12} />
                    </Link>
                  )}
                </article>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOTE DÉPLACEMENT ─── */}
      {/* Fond crème léger, section discrète — "whisper section" */}
      <section
        className="py-14 px-6"
        style={{
          backgroundColor: "#faf8f5",
          borderTop: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <RevealWrapper>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-12">
              <div
                className="flex-shrink-0 hidden md:block"
                style={{
                  width: "3rem",
                  height: "1px",
                  backgroundColor: "rgba(167,123,0,0.4)",
                  marginTop: "2px",
                }}
              />
              <div>
                <p className="section-label mb-2">À noter</p>
                <p
                  className="font-sans max-w-2xl"
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.9,
                    color: "#6b6460",
                  }}
                >
                  Les frais de déplacement peuvent s&apos;appliquer pour les
                  prestations hors Montpellier. Un devis personnalisé vous sera
                  communiqué lors de notre échange. N&apos;hésitez pas à me
                  contacter pour toute question ou prestation sur-mesure.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-28 px-6 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <RevealWrapper>
            <p
              className="font-sans uppercase mb-6"
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#a77b00",
                fontWeight: 500,
              }}
            >
              Prête à commencer ?
            </p>
            <h2
              className="font-serif italic text-cream mb-8"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 0.9,
              }}
            >
              Votre style,
              <br />
              revisité
            </h2>
            <div
              className="mx-auto mb-8"
              style={{
                width: "2.5rem",
                height: "1px",
                backgroundColor: "#a77b00",
              }}
            />
            <p
              className="font-sans leading-relaxed mb-10"
              style={{
                fontSize: "15px",
                color: "rgba(250,248,245,0.48)",
                lineHeight: 1.85,
              }}
            >
              Chaque parcours est unique. Contactez-moi pour qu&apos;on échange
              sur vos besoins et trouve ensemble la prestation adaptée.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="btn-primary">
                Réserver une séance
              </Link>
              <Link href="/services" className="btn-ghost-light">
                Découvrir les services <ArrowRight size={13} />
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
}
