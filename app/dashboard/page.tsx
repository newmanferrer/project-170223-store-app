'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Header, SignInButton, SignOutButton } from '@/components'
import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Dashboard Page',
  description: 'Dashboard Page'
}

export default function DashboardPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <main className={styles.container}>
        <Header />
        <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>
          Dashboard Page
        </h1>

        {session && (
          <div className={styles.container__user_wrapper}>
            {session.user?.image && (
              <Image src={session.user?.image} alt='user image' width={150} height={150} />
            )}

            <div className={styles.container__paragraph_wrapper}>
              <p className={styles.container__paragraph}>Welcome {session.user?.name}!</p>
              <p className={styles.container__paragraph}>You are allowed to view this page</p>
            </div>
          </div>
        )}
      </main>
    )
  }

  return (
    <main className={styles.container}>
      <Header />
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Dashboard Page</h1>

      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        This is a protected route
      </h2>

      <div className={styles.container__paragraph_wrapper}>
        <p className={styles.container__paragraph}>You need to be signed in to view this page</p>
      </div>

      <SignInButton />
    </main>
  )
}
