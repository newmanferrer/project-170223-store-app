import Link from 'next/link'
import { links } from './links'
import { CartButton, Languages, LightDarkButton } from '@/components'
import styles from './Navigation.module.scss'

export function Navigation() {
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
        <CartButton />
        <Languages />
        <LightDarkButton id='header' />
      </section>
    </nav>
  )
}
