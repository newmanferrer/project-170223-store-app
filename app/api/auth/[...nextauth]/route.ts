import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ]

  const isDefaultSigninPage = req.method === 'GET' && req.query.nextauth?.includes('signin')

  //* Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  if (isDefaultSigninPage) providers.pop()

  return await NextAuth(req, res, { providers })
}

/* export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
}

export default NextAuth(authOptions) */
