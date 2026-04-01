import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";
import { sendEmail, buildWelcomeEmail } from "@/lib/email";

interface SignupPayload {
  fullName: string;
  workEmail: string;
  companyName: string;
  industry: string;
  teamSize: string;
  phone?: string;
}

const DATA_DIR = "/opt/apps/leadhunter-web/data";
const SIGNUPS_FILE = path.join(DATA_DIR, "signups.json");

async function ensureDataDir() {
  try { await mkdir(DATA_DIR, { recursive: true }); } catch { /* exists */ }
}

async function readSignups(): Promise<SignupPayload[]> {
  try {
    const data = await readFile(SIGNUPS_FILE, "utf-8");
    return JSON.parse(data);
  } catch { return []; }
}

async function pushToHubSpot(data: SignupPayload) {
  const hubspotKey = process.env.HUBSPOT_API_KEY;
  if (!hubspotKey) return null;
  try {
    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${hubspotKey}` },
      body: JSON.stringify({
        properties: {
          email: data.workEmail,
          firstname: data.fullName.split(" ")[0],
          lastname: data.fullName.split(" ").slice(1).join(" ") || "",
          company: data.companyName,
          industry: data.industry,
          phone: data.phone || "",
          lifecyclestage: "lead",
          hs_lead_status: "NEW",
          leadsource: "Website Signup",
          numberofemployees: data.teamSize,
        },
      }),
    });
    return res.ok ? await res.json() : null;
  } catch (err) {
    console.error("[HubSpot] Push failed:", err);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: SignupPayload = await request.json();

    if (!body.fullName || !body.workEmail || !body.companyName || !body.industry || !body.teamSize) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.workEmail)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const freedomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "yahoo.in", "rediffmail.com"];
    const domain = body.workEmail.split("@")[1]?.toLowerCase();
    if (freedomains.includes(domain)) {
      return NextResponse.json({ error: "Please use your work email address" }, { status: 400 });
    }

    // Save locally
    await ensureDataDir();
    const signups = await readSignups();
    const entry = { ...body, signedUpAt: new Date().toISOString(), source: "website" };
    signups.push(entry);
    await writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

    // Async: HubSpot + Welcome Email (non-blocking)
    pushToHubSpot(body).catch((err) => console.error("[HubSpot] Background:", err));
    sendEmail({
      to: body.workEmail,
      subject: `Welcome to LeadHunterIQ, ${body.fullName.split(" ")[0]}!`,
      html: buildWelcomeEmail(body.fullName),
    }).catch((err) => console.error("[Email] Background:", err));

    return NextResponse.json({ success: true, message: "Trial activated" }, { status: 201 });
  } catch (err) {
    console.error("[Signup API] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
