import { authOptions } from "@/configs/auth-options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }
    
    const user = await prisma.user.findUnique({
        where : {
            id: session.user.id
        }
    });

    if (!user) {
        return NextResponse.json({error: "User not found"}, {status: 404});
    }

    const redditAccounts = await prisma.redditAccount.findMany({
        where: {
            userId: user.id
        }
    });
        
    return NextResponse.json({accounts: redditAccounts}, {status: 200});
}