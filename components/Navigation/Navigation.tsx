import Link from 'next/link'
import { links } from './links'
import { useSession } from 'next-auth/react'
import { SignInOutButton, CartButton, Languages, LightDarkButton } from '@/components'
import styles from './Navigation.module.scss'

export function Navigation() {
  const { data: session } = useSession()

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {links.map(({ id, label, route }) => (
          <li className={styles.nav__li} key={id}>
            <Link className={styles.nav__link} href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <section className={styles.nav__section_wrapper}>
        {session && session.user && <span>{session.user.name}</span>}
        <SignInOutButton />
        <CartButton />
        <Languages />
        <LightDarkButton id='header' />
      </section>
    </nav>
  )
}
