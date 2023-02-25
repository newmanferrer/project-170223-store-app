import Link from 'next/link'
import { links } from './links'
import { CartButton, Languages, LightDarkButton } from '../'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>

      <CartButton />
      <Languages />
      <LightDarkButton id='header' />
    </nav>
  )
}
