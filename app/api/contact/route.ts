import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  prenom: string;
  email: string;
  message: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ContactBody;
    const { prenom, email, message } = body;

    /* Validation minimale */
    if (!prenom?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    /* Vérification basique du format email */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      /* Remplacer "onboarding@resend.dev" par un expéditeur de votre domaine
         une fois le domaine vérifié dans Resend */
      from: "JOY'S Personal Shopper <onboarding@resend.dev>",
      to: ["cjoli334@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${prenom} via joys-personal-shopper.fr`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head><meta charset="utf-8" /></head>
        <body style="margin:0;padding:0;background:#faf8f5;font-family:Georgia,serif;">
          <div style="max-width:560px;margin:40px auto;padding:40px;background:#ffffff;border-top:3px solid #a77b00;">
            <p style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#a77b00;font-family:system-ui,sans-serif;margin:0 0 24px;">
              JOY&apos;S Personal Shopper — Nouveau message
            </p>
            <h1 style="font-size:24px;color:#1a1714;margin:0 0 4px;font-weight:400;font-style:italic;">
              Message de ${prenom}
            </h1>
            <hr style="border:none;border-top:1px solid #e8e4dd;margin:24px 0;" />
            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#6b6460;font-family:system-ui,sans-serif;">
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1a1714;width:100px;">Prénom</td>
                <td style="padding:8px 0;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:600;color:#1a1714;">Email</td>
                <td style="padding:8px 0;">
                  <a href="mailto:${email}" style="color:#a77b00;">${email}</a>
                </td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e8e4dd;margin:24px 0;" />
            <p style="font-size:12px;font-weight:600;color:#1a1714;text-transform:uppercase;letter-spacing:0.1em;font-family:system-ui,sans-serif;margin:0 0 12px;">
              Message
            </p>
            <p style="font-size:15px;color:#6b6460;line-height:1.7;white-space:pre-line;margin:0;">${message}</p>
            <hr style="border:none;border-top:1px solid #e8e4dd;margin:32px 0 24px;" />
            <p style="font-size:11px;color:#aaa;font-family:system-ui,sans-serif;margin:0;">
              Message envoyé depuis le formulaire de contact de joys-personal-shopper.fr
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Erreur API contact :", err);
    return NextResponse.json(
      { error: "Une erreur inattendue est survenue" },
      { status: 500 },
    );
  }
}
