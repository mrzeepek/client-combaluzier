"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  prenom: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = { prenom: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Envoi échoué");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={40} className="text-gold" strokeWidth={1.5} />
        <h3 className="font-serif text-2xl italic text-charcoal">
          Message envoyé !
        </h3>
        <p className="text-muted text-sm max-w-sm">
          Merci pour votre message. Je vous recontacte dans les plus brefs
          délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs tracking-[0.2em] uppercase font-sans text-gold border-b border-gold pb-px hover:text-gold-dark transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Prénom */}
      <div className="space-y-2">
        <label
          htmlFor="prenom"
          className="block text-xs tracking-[0.2em] uppercase font-sans text-charcoal/60"
        >
          Prénom
        </label>
        <input
          id="prenom"
          name="prenom"
          type="text"
          value={form.prenom}
          onChange={handleChange}
          required
          autoComplete="given-name"
          placeholder="Votre prénom"
          className="w-full bg-transparent border-b border-cream-border py-3 text-charcoal placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors duration-200 font-sans text-sm"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-xs tracking-[0.2em] uppercase font-sans text-charcoal/60"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          placeholder="votre@email.com"
          className="w-full bg-transparent border-b border-cream-border py-3 text-charcoal placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors duration-200 font-sans text-sm"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.2em] uppercase font-sans text-charcoal/60"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Décrivez votre projet, vos besoins, vos questions..."
          className="w-full bg-transparent border-b border-cream-border py-3 text-charcoal placeholder:text-muted/40 focus:outline-none focus:border-gold transition-colors duration-200 font-sans text-sm resize-none"
        />
      </div>

      {/* Erreur */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} />
          Une erreur est survenue. Veuillez réessayer ou m&apos;écrire
          directement.
        </div>
      )}

      {/* Bouton */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send size={14} />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
