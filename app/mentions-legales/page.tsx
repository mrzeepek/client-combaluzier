import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site Joy's Personal Shopper — Claire Combaluzier.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="section-label animate-fade-in mb-5">
            Joy&apos;s Personal Shopper
          </p>
          <h1
            className="font-serif italic text-charcoal animate-slide-up leading-[0.88]"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            Mentions légales
          </h1>
          <div className="w-12 h-px bg-gold mt-8 animate-fade-in" />
        </div>
      </section>

      {/* ─── CONTENU ─── */}
      <section className="pb-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto space-y-12 text-[15px] text-muted leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Éditeur du site
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              <strong className="text-charcoal font-medium">
                Raison sociale :
              </strong>{" "}
              JOY&apos;S Personal Shopper
            </p>
            <p>
              <strong className="text-charcoal font-medium">
                Responsable :
              </strong>{" "}
              Claire Combaluzier
            </p>
            <p>
              <strong className="text-charcoal font-medium">Adresse :</strong>{" "}
              Montpellier, France
            </p>
            <p>
              <strong className="text-charcoal font-medium">Email :</strong>{" "}
              <a
                href="mailto:cjoli334@gmail.com"
                className="text-gold hover:text-gold-dark transition-colors"
              >
                cjoli334@gmail.com
              </a>
            </p>
            <p>
              <strong className="text-charcoal font-medium">Téléphone :</strong>{" "}
              <a
                href="tel:0659255869"
                className="text-gold hover:text-gold-dark transition-colors"
              >
                06 59 25 58 69
              </a>
            </p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Hébergement
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              Ce site est hébergé par un prestataire professionnel. Les
              coordonnées complètes de l&apos;hébergeur sont disponibles sur
              demande à l&apos;adresse{" "}
              <a
                href="mailto:cjoli334@gmail.com"
                className="text-gold hover:text-gold-dark transition-colors"
              >
                cjoli334@gmail.com
              </a>
              .
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Propriété intellectuelle
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo) est la propriété exclusive de Claire Combaluzier —
              JOY&apos;S Personal Shopper, sauf mention contraire.
            </p>
            <p className="mt-3">
              Toute reproduction, distribution, modification ou utilisation de
              ce contenu, quel qu&apos;en soit le support, est strictement
              interdite sans autorisation écrite préalable de l&apos;éditeur.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Données personnelles & RGPD
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi Informatique et Libertés, vous disposez
              d&apos;un droit d&apos;accès, de rectification, d&apos;effacement
              et d&apos;opposition concernant vos données personnelles.
            </p>
            <p className="mt-3">
              Les données collectées via le formulaire de contact (prénom,
              email, message) sont utilisées uniquement pour répondre à votre
              demande et ne sont jamais transmises à des tiers.
            </p>
            <p className="mt-3">
              Pour exercer vos droits ou pour toute question relative à vos
              données, contactez-nous à{" "}
              <a
                href="mailto:cjoli334@gmail.com"
                className="text-gold hover:text-gold-dark transition-colors"
              >
                cjoli334@gmail.com
              </a>
              .
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Cookies
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires ou de traçage.
              Des cookies techniques strictement nécessaires au bon
              fonctionnement du site peuvent être utilisés. Aucune donnée de
              navigation n&apos;est partagée avec des tiers à des fins
              commerciales.
            </p>
          </div>

          {/* Responsabilité */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Limitation de responsabilité
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              JOY&apos;S Personal Shopper s&apos;efforce de maintenir les
              informations du site à jour et exactes, mais ne peut être tenu
              responsable des erreurs ou omissions éventuelles, ni des dommages
              résultant de l&apos;utilisation du site.
            </p>
          </div>

          {/* Droit applicable */}
          <div>
            <h2 className="font-serif text-2xl italic text-charcoal mb-4">
              Droit applicable
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et à défaut de résolution amiable, les tribunaux
              français seront compétents.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
