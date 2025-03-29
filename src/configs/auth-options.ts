import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import Reddit from "next-auth/providers/reddit";

export const authOptions : NextAuthOptions = {
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label:'Email', type: 'email'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                console.log("credentials",credentials);
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email : credentials.email
                    }
                });
                if (!user) {
                    throw new Error(`No user found with email: ${credentials.email}`);
                }

                // const isPasswordValid = await compare(credentials.password, user.password);
                const isPasswordValid = true;
                if (!isPasswordValid) {
                    throw new Error('Invalid email or password');
                }

                return user;
            },
        }),
        // Reddit({
        //     clientId: process.env.REDDIT_CLIENT_ID,
        //     clientSecret: process.env.REDDIT_CLIENT_SECRET,
        // })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session, token}) {
            if (session.user && token.id) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
            }
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
            }
            return token;
        }
    },
    pages: {
        signIn: '/auth/login',
    }
}