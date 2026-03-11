import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: "BURGUS Contact <onboarding@resend.dev>",
      to: ["info@burgus.si"],
      replyTo: email,
      subject: `Novo povpraševanje - ${name}`,
      text: `
Ime: ${name}
E-pošta: ${email}

Sporočilo:
${message}
      `,
    });

    console.error("RESEND RESULT:", result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        error: "Pošiljanje ni uspelo.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}