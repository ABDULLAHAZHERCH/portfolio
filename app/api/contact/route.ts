import { NextRequest, NextResponse } from "next/server";
import sendEmail from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    const info = await sendEmail({ email, subject, message });

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
