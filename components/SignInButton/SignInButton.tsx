import { signIn } from 'next-auth/react'
import styles from './SignInButton.module.scss'

export function SignInButton() {
  return (
    <button className={styles.button} onClick={() => signIn()}>
      Sign in
    </button>
  )
}
