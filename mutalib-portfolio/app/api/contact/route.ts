import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const s = (k: string, max: number) => String(b[k] ?? "").trim().slice(0, max);
  if (s("website", 10)) return NextResponse.json({ ok: true }); // honeypot: bots filled the hidden field
  const name = s("name", 100), email = s("email", 200), topic = s("topic", 200), details = s("details", 5000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !topic || details.length < 10) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) return NextResponse.json({ error: "The contact form isn’t set up yet. Please message me on LinkedIn instead." }, { status: 503 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Portfolio enquiry: ${topic}`, text: `From: ${name} <${email}>\n\n${details}` }),
  });
  if (!r.ok) return NextResponse.json({ error: "Your message couldn’t be sent. Please try again later." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
