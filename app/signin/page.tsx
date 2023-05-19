import type { Metadata } from 'next'
import styles from './page.module.scss'
import { SignInForm } from '@/components'

export const metadata: Metadata = {
  title: 'Sign in Page',
  description: 'Sign in Page'
}

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Sign in Page</h1>

      <SignInForm />
    </div>
  )
}
