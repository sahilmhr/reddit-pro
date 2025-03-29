import { authOptions } from "@/configs/auth-options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const clientId = process.env.REDDIT_CLIENT_ID;
const redirectUri = process.env.REDDIT_REDIRECT_URI;

export async function GET(){
    console.log("login");
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }
    const user = session.user;
    const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${user.id}&redirect_uri=${redirectUri}&duration=permanent&scope=identity,read,history`;
    return NextResponse.redirect(authUrl);
}