import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous",
  description:
    "Prenez rendez-vous avec Claire Combaluzier, personal shopper à Montpellier. Formulaire de contact, téléphone et email disponibles.",
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="section-label animate-fade-in mb-5">
            Joy&apos;s Personal Shopper
          </p>
          <h1
            className="font-serif italic text-charcoal animate-slide-up leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
          >
            Parlons-en
          </h1>
          <div className="w-12 h-px bg-gold mt-8 animate-fade-in" />
        </div>
      </section>

      {/* ─── CONTENU PRINCIPAL ─── */}
      <section className="pb-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 md:gap-20">
            {/* Informations de contact — 2 colonnes */}
            <div className="md:col-span-2">
              <RevealWrapper>
                <div className="space-y-10">
                  {/* Texte d'intro */}
                  <div>
                    <p className="text-muted leading-relaxed text-[15px] mb-6">
                      Que vous ayez une question sur mes prestations ou que vous
                      souhaitiez prendre rendez-vous, n&apos;hésitez pas à me
                      contacter. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <p className="font-serif text-xl italic text-charcoal">
                      Premier échange toujours sans engagement.
                    </p>
                  </div>

                  {/* Coordonnées */}
                  <div className="space-y-5">
                    <p className="text-xs tracking-[0.25em] uppercase text-charcoal/40 font-sans">
                      Coordonnées
                    </p>

                    <a
                      href="tel:0659255869"
                      className="group flex items-start gap-4 hover:text-gold transition-colors duration-200"
                    >
                      <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors duration-200">
                        <Phone size={13} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted/50 font-sans mb-1">
                          Téléphone
                        </p>
                        <p className="text-charcoal font-sans text-sm">
                          06 59 25 58 69
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:cjoli334@gmail.com"
                      className="group flex items-start gap-4 hover:text-gold transition-colors duration-200"
                    >
                      <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold transition-colors duration-200">
                        <Mail size={13} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted/50 font-sans mb-1">
                          Email
                        </p>
                        <p className="text-charcoal font-sans text-sm">
                          cjoli334@gmail.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0">
                        <MapPin size={13} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted/50 font-sans mb-1">
                          Zone d&apos;intervention
                        </p>
                        <p className="text-charcoal font-sans text-sm">
                          Montpellier & toute la France
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Séparateur décoratif */}
                  <div className="flex items-center gap-4">
                    <div className="h-px bg-cream-border flex-1" />
                    <span className="font-serif text-gold/40 italic text-lg">
                      ✦
                    </span>
                    <div className="h-px bg-cream-border flex-1" />
                  </div>

                  {/* Disponibilité */}
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-charcoal/40 font-sans mb-3">
                      Disponibilité
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      Je suis disponible du lundi au samedi, sur rendez-vous.
                      Les consultations peuvent se faire en présentiel à
                      Montpellier ou à distance pour toute la France.
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Formulaire — 3 colonnes */}
            <div className="md:col-span-3">
              <RevealWrapper delay={150}>
                <div className="border-l border-cream-border pl-0 md:pl-12">
                  <p className="text-xs tracking-[0.25em] uppercase text-charcoal/40 font-sans mb-8">
                    Formulaire de contact
                  </p>
                  <ContactForm />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
