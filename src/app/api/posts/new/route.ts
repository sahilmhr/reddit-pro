import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { title, content, subreddit, accountId, scheduledFor } = await req.json();

    // Validate input
    if (!title || !content || !subreddit || !accountId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify account belongs to user
    const account = await prisma.redditAccount.findFirst({
      where: {
        id: accountId,
        userId: session.user.id,
      },
    });

    if (!account) {
      return NextResponse.json(
        { error: "Invalid account" },
        { status: 400 }
      );
    }

    // Create scheduled post
    const post = await prisma.scheduledPost.create({
      data: {
        title,
        content,
        subreddit,
        scheduledFor: scheduledFor ? new Date(scheduledFor) : new Date(),
        status: scheduledFor ? "pending" : "posted",
        userId: session.user.id,
        accountId,
      },
    });

    // If not scheduled, post immediately
    if (!scheduledFor) {
      // TODO: Implement immediate posting logic
      // This would involve calling Reddit's API
    }

    return NextResponse.json({
      message: scheduledFor ? "Post scheduled successfully" : "Post created successfully",
      post,
    });

  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 