import Link from 'next/link'
import { links } from './links'
import { CartButton, Languages, LightDarkButton } from '@/app/components'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.container__ul}>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>

      <section className={styles.container__section}>
        <CartButton />
        <Languages />
        <LightDarkButton id='header' />
      </section>
    </nav>
  )
}
