import type { Metadata } from 'next'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'Sign in Page',
  description: 'Sign in Page'
}

export default function SignInPage({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  //* If the user is already logged in, redirect.
  //* Note: Make sure not to redirect to the same page
  //* To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/', permanent: 'false' } }
  }

  const providers = await getProviders()

  return {
    props: { session, providers: providers ?? [] }
  }
}
