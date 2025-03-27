import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

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

                const isPasswordValid = await compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    throw new Error('Invalid email or password');
                }

                return user;
            },
        })
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