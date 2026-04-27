import { NextResponse } from "next/server";

// In-memory store for demo (replace with a DB in production)
const leads: unknown[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      courseDomain,
      candidates,
      deliveryMode,
      location,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !phone || !company || !courseDomain || !candidates || !deliveryMode || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store lead (in memory for demo)
    const lead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      courseDomain,
      candidates: Number(candidates),
      deliveryMode,
      location,
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);
    console.log("New lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been submitted successfully. Our advisor will contact you within 24 hours.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Admin endpoint to view leads (protect this in production)
  return NextResponse.json({ count: leads.length, leads });
}
