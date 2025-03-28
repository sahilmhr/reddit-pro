import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    // Generate new verification code
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    // TODO: Get user email from session
    // TODO: Update user's verification code in database
    // TODO: Send new verification email

    return NextResponse.json({
      message: "Verification code resent successfully"
    });

  } catch (error) {
    console.error("Resend code error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 