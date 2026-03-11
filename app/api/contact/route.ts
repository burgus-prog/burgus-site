import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, websiteField, formStartedAt, lang } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: lang === "en" ? "Missing required fields." : "Manjkajo obvezna polja." },
        { status: 400 }
      );
    }

    // anti-spam 1: honeypot
    if (websiteField && String(websiteField).trim() !== "") {
      return NextResponse.json({ success: true });
    }

    // anti-spam 2: prehitro oddan obrazec
    const started = Number(formStartedAt || 0);
    const secondsElapsed = started ? (Date.now() - started) / 1000 : 0;

    if (!started || secondsElapsed < 4) {
      return NextResponse.json(
        {
          error:
            lang === "en"
              ? "Form submission failed. Please try again."
              : "Oddaja obrazca ni uspela. Poskusite znova.",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "BURGUS Contact <onboarding@resend.dev>",
      to: ["info@burgus.si"],
      replyTo: email,
      subject: `Novo povpraševanje z burgus.si - ${name}`,
      text: `
Ime: ${name}
E-pošta: ${email}

Sporočilo:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Pošiljanje ni uspelo." },
      { status: 500 }
    );
  }
}