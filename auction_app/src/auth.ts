
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { database } from "./db/database"
import { users, accounts, sessions, verificationTokens } from "./db/Schema"
export const {  handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(database, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens,
    }),
    providers: [Google],
  })