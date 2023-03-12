import { Header } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Sign in Page',
  description: 'Sign in Page'
}

export default function SignInPage() {
  return (
    <main className={styles.container}>
      <Header />
      <h1>Sign in Page</h1>
    </main>
  )
}
