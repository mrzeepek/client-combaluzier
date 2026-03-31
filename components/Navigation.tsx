"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#apropos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Animation d'entrée + scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const id = setTimeout(() => setNavReady(true), prefersReduced ? 0 : 100);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Détection mobile pour la couleur du logo (desktop = fond crème, mobile = fond image sombre)
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onResize);

    return () => {
      clearTimeout(id);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onResize);
    };
  }, []);

  // Fermer au changement de route
  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.125rem)",
          paddingBottom: "1.125rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          background: scrolled ? "rgba(250,248,245,0.97)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(167,123,0,0.12)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition:
            "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
          opacity: navReady ? 1 : 0,
          transform: navReady ? "none" : "translateY(-28px)",
          transitionProperty: "background, border-color, opacity, transform",
          transitionDuration: "0.35s, 0.35s, 0.5s, 0.5s",
          transitionTimingFunction: "ease, ease, ease-out, ease-out",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.6rem",
            fontStyle: "italic",
            fontWeight: 400,
            // Desktop : fond héro crème à gauche → texte sombre ; Mobile : fond image → texte crème
            color: scrolled ? "#1d1d1f" : isMobile ? "#faf8f5" : "#1d1d1f",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "color 0.35s ease",
          }}
        >
          Joy&apos;s
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color:
                  pathname === link.href
                    ? "#a77b00"
                    : scrolled
                      ? "rgba(29,29,31,0.6)"
                      : "rgba(250,248,245,0.85)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a77b00",
              border: "1px solid #a77b00",
              padding: "0.5rem 1.25rem",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            Rendez-vous
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="flex flex-col gap-[5px] w-7 md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            position: "relative",
            zIndex: 60,
          }}
        >
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              style={{
                display: "block",
                width: "100%",
                height: "1.5px",
                // Non-scrollé sur mobile : fond image → barres claires
                background: menuOpen
                  ? "#ffffff"
                  : scrolled
                    ? "#1d1d1f"
                    : "#faf8f5",
                borderRadius: "2px",
                transition: "transform 0.28s ease, opacity 0.2s ease",
                transform:
                  bar === 0 && menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : bar === 2 && menuOpen
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                opacity: bar === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "#1d1d1f",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          paddingTop: "80px",
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              fontStyle: "italic",
              color:
                pathname === link.href ? "#a77b00" : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "none" : "translateY(28px)",
              transition:
                "opacity 0.5s ease-out, transform 0.5s ease-out, color 0.2s ease",
              transitionDelay: menuOpen ? `${i * 0.07}s` : "0s",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#a77b00",
            border: "1px solid #a77b00",
            padding: "0.875rem 2.5rem",
            textDecoration: "none",
            marginTop: "1rem",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "none" : "translateY(28px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            transitionDelay: menuOpen ? `${navLinks.length * 0.07}s` : "0s",
          }}
        >
          Prendre rendez-vous →
        </Link>

        {/* Petite signature bas */}
        <p
          style={{
            position: "absolute",
            bottom: "2rem",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.15)",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
          }}
        >
          Joy&apos;s Personal Shopper
        </p>
      </div>
    </>
  );
}
