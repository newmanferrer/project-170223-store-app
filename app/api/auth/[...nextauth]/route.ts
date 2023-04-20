import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'

export const adapter = PrismaAdapter(prisma)

export const providers = [
  GithubProvider({
    clientId: `${process.env.GITHUB_ID}`,
    clientSecret: `${process.env.GITHUB_SECRET}`
  })
]

export const pages = {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error',
  verifyRequest: '/auth/verify-request',
  newUser: '/auth/new-user'
}

export const authOptions: NextAuthOptions = {
  adapter,
  providers,
  pages
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    ...authOptions,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) return true
        else return false
      },
      async redirect({ url, baseUrl }) {
        //* Allows relative callback URLs
        if (url.startsWith('/')) return `${baseUrl}${url}`
        //* Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      },
      async jwt({ token, account, profile, user }) {
        if (account) {
          token.id = user.id
          token.accessToken = account.access_token
          token.email = profile?.email
        }
        return token
      },
      async session({ session, token, user }) {
        //* Send properties to the client, like an access_token and user id from a provider.
        return session
      }
    }
  })
}
