import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const MAX_NAME_LENGTH = 200;
const MAX_COMPANY_LENGTH = 200;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function validatePayload(payload: ContactPayload) {
  const details: Record<string, string> = {};

  if (!payload.name || !payload.name.trim()) {
    details.name = "Name is required.";
  } else if (payload.name.length > MAX_NAME_LENGTH) {
    details.name = "Name is too long.";
  }

  if (!payload.email || !payload.email.trim()) {
    details.email = "Email is required.";
  } else if (
    payload.email.length > MAX_EMAIL_LENGTH ||
    !payload.email.includes("@")
  ) {
    details.email = "Email is invalid.";
  }

  if (!payload.message || !payload.message.trim()) {
    details.message = "Message is required.";
  } else if (payload.message.length > MAX_MESSAGE_LENGTH) {
    details.message = "Message is too long.";
  }

  if (payload.company && payload.company.length > MAX_COMPANY_LENGTH) {
    details.company = "Company is too long.";
  }

  const ok = Object.keys(details).length === 0;
  return { ok, details };
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const payload = {
      name: data.name?.trim() ?? "",
      company: data.company?.trim() ?? "",
      email: data.email?.trim() ?? "",
      message: data.message?.trim() ?? "",
    };

    const { ok, details } = validatePayload(payload);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", details },
        { status: 400 },
      );
    }

    if (!resend) {
      // TODO: Configure RESEND_API_KEY and recipient email before production use.
      return NextResponse.json(
        { ok: false, error: "Email service not configured" },
        { status: 503 },
      );
    }

    const textBody = [
      `Name: ${payload.name}`,
      `Company: ${payload.company || "-"}`,
      `Email: ${payload.email}`,
      "Message:",
      payload.message,
      "",
      `Submitted at: ${new Date().toISOString()}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: "no-reply@marco-site.local",
      to: ["cristian.leu82@gmail.com"],
      subject: `New contact from ${payload.name} via personal website`,
      text: textBody,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { ok: false, error: "Failed to process request" },
      { status: 500 },
    );
  }
}
