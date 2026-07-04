import { siteConfig } from "@/data/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  budget?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown, maxLength = MAX_FIELD_LENGTH): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, budget, message } = payload;

  if (!isNonEmptyString(name, 200)) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isNonEmptyString(email, 200) || !EMAIL_REGEX.test(email.trim())) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!isNonEmptyString(message)) {
    return Response.json({ error: "Please describe your project." }, { status: 400 });
  }
  const safeBudget = isNonEmptyString(budget, 200) ? budget.trim() : "Not specified";

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!resendApiKey) {
    console.log("[contact] RESEND_API_KEY not set — logging submission instead of emailing.", {
      name,
      email,
      budget: safeBudget,
      message,
    });
    return Response.json({ ok: true });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact Form <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email.trim(),
        subject: `New project inquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nBudget: ${safeBudget}\n\nMessage:\n${message.trim()}`,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("[contact] Resend API error:", errorBody);
      return Response.json(
        { error: "Failed to send message. Please email me directly instead." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error sending email:", error);
    return Response.json(
      { error: "Failed to send message. Please email me directly instead." },
      { status: 500 }
    );
  }
}
