import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    if (supabase) {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email,
        subscribed_at: new Date().toISOString(),
      });

      if (error) {
        // Handle duplicate emails gracefully
        if (error.code === "23505") {
          return NextResponse.json({ success: true, message: "Already subscribed." });
        }
        console.error("Supabase insert error:", error);
      }
    } else {
      console.log("Newsletter signup (Supabase not configured):", { email });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
