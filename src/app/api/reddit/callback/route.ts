import { authOptions } from "@/configs/auth-options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { encode } from "querystring";

const clientId = process.env.REDDIT_CLIENT_ID;
const clientSecret = process.env.REDDIT_CLIENT_SECRET;
const redirectUri = process.env.REDDIT_REDIRECT_URI;

export async function GET(req: NextRequest){
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    if (!code || !state || state !== session.user.id) {
        return NextResponse.json({error: "Invalid state"}, {status: 400});
    }

    const tokenResponse = await fetch(`https://www.reddit.com/api/v1/access_token`, {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
        }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) {
        return NextResponse.json({error: "Failed to fetch access token"}, {status: 500});
    }

    const redditResponse = await fetch(`https://oauth.reddit.com/api/v1/me`, {
        headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
        },
    });
    
    if (!redditResponse.ok) {
        return NextResponse.json({error: "Failed to fetch user data"}, {status: 500});
    }
    const redditData = await redditResponse.json();

    const user = await prisma.redditAccount.upsert({
        where : {
            username: redditData.name,
        },
        update: {
            karma: redditData.total_karma,
            posts: redditData.post_karma,
            commentCount: redditData.comment_karma,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
        },
        create: {
            username: redditData.name,
            userId: session.user.id,
            karma: redditData.total_karma,
            posts: redditData.post_karma,
            commentCount: redditData.comment_karma,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
        }
    })

    console.log(user);

    return NextResponse.json({message: "Success", user}, {status: 200});
    
}