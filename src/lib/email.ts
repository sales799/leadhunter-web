/**
 * Email service for LeadHunterIQ
 * Uses Resend API for transactional emails
 * Falls back gracefully if RESEND_API_KEY is not set
 *
 * NOTE: Using onboarding@resend.dev until leadhunteriq.in domain is verified in Resend.
 * Once verified, switch FROM_EMAIL to "LeadHunterIQ <hello@leadhunteriq.in>"
 */

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// TODO: Switch to "LeadHunterIQ <hello@leadhunteriq.in>" after domain verification
const FROM_EMAIL = "LeadHunterIQ <onboarding@resend.dev>";

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.log("[Email] RESEND_API_KEY not set, skipping email:", payload.subject);
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (res.ok) {
      console.log("[Email] Sent:", payload.subject, "to", payload.to);
      return true;
    }

    const err = await res.text();
    console.error("[Email] Failed:", err);
    return false;
  } catch (err) {
    console.error("[Email] Error:", err);
    return false;
  }
}

export function buildWelcomeEmail(name: string): EmailPayload["html"] {
  const firstName = name.split(" ")[0];
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
<div style="max-width:600px;margin:0 auto;padding:40px 20px">
  <div style="background:#0f172a;border-radius:16px 16px 0 0;padding:32px;text-align:center">
    <h1 style="color:#fff;font-size:24px;margin:0">Welcome to LeadHunterIQ</h1>
    <p style="color:#94a3b8;margin:8px 0 0">India's Intent-First GTM Platform</p>
  </div>
  <div style="background:#fff;border-radius:0 0 16px 16px;padding:32px;border:1px solid #e2e8f0;border-top:none">
    <p style="font-size:16px;color:#1e293b;margin:0 0 16px">Hi ${firstName},</p>
    <p style="font-size:14px;color:#475569;line-height:1.6;margin:0 0 16px">
      Your 14-day free trial is now active. Here is what happens next:
    </p>
    <div style="background:#f1f5f9;border-radius:8px;padding:20px;margin:0 0 24px">
      <p style="font-size:14px;color:#1e293b;margin:0 0 8px"><strong>1.</strong> Our team will configure your signal feed within 24 hours</p>
      <p style="font-size:14px;color:#1e293b;margin:0 0 8px"><strong>2.</strong> You will receive your first batch of scored leads via email</p>
      <p style="font-size:14px;color:#1e293b;margin:0"><strong>3.</strong> Book a 15-min setup call to customize your ICP filters</p>
    </div>
    <a href="https://cal.com/talpro/leadhunteriq-demo" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
      Book Setup Call
    </a>
    <p style="font-size:13px;color:#94a3b8;margin:24px 0 0;line-height:1.5">
      Questions? Reply to this email or reach us at hello@leadhunteriq.in.<br>
      — Team LeadHunterIQ
    </p>
  </div>
  <p style="text-align:center;font-size:11px;color:#94a3b8;margin:16px 0 0">
    Talpro India Pvt Ltd, Bengaluru, Karnataka, India
  </p>
</div>
</body>
</html>`;
}
