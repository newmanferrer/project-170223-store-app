import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib'
import type { NextApiRequest, NextApiResponse } from 'next'

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

export const authOptions = {
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
      }
    }
  })
}
