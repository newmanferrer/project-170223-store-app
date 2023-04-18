import { signOut } from 'next-auth/react'
import styles from './SignOutButton.module.scss'

export function SignOutButton() {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      Sign out
    </button>
  )
}
