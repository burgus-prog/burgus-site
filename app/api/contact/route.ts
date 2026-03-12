import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY manjka v .env.local");
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // osnovna validacija
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Manjkajo obvezna polja." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "BURGUS Contact <onboarding@resend.dev>",
      to: ["burgus@siol.net"],
      replyTo: email,
      subject: `Novo povpraševanje - ${name}`,
      text: `
Ime: ${name}
E-pošta: ${email}

Sporočilo:
${message}
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          error: "Pošiljanje ni uspelo.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json({
      success: true,
      result: data,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        error: "Napaka na strežniku.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
