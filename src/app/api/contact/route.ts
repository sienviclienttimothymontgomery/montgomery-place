import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    if (supabase) {
      const { error } = await supabase.from("contact_inquiries").insert({
        name,
        email,
        phone: phone || null,
        subject: inquiryType ? `[${inquiryType}] ${subject}` : subject,
        message,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        // Still return success to the user — we log the error server-side
      }
    } else {
      // Supabase not configured — log to console for local development
      console.log("Contact form submission (Supabase not configured):", {
        name,
        email,
        phone,
        inquiryType,
        subject,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
