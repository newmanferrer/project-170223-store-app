import { useSession, signIn, signOut } from 'next-auth/react'
import styles from './SignInOutButton.module.scss'

export function SignInOutButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button className={styles.button} onClick={() => signOut()}>
        Sign out
      </button>
    )
  }

  return (
    <button className={styles.button} onClick={() => signIn()}>
      Sign in
    </button>
  )
}
