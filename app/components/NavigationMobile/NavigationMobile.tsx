import Link from 'next/link'
import { useNavigationMobileContext } from '@/contexts'
import { CartButton, Languages, LightDarkButton } from '..'
import { links } from './links'
import styles from './NavigationMobile.module.scss'

export function NavigationMobile() {
  const { navigationMobileIsOpen, closeNavigationMobile } = useNavigationMobileContext()

  return (
    <nav className={`${styles.nav} ${navigationMobileIsOpen ? styles.isOpen : ''}`}>
      <ul className={styles.nav__ul}>
        {links.map(({ id, label, route }) => (
          <li className={styles.nav__li} key={id}>
            <Link className={styles.nav__link} href={route} onClick={closeNavigationMobile}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <section className={styles.nav__section_wrapper}>
        <CartButton />
        <LightDarkButton id='NavigationMobile' />
        <Languages />
      </section>
    </nav>
  )
}
