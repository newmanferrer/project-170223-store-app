import Link from 'next/link'
import { useNavigationMobileContext } from '../../contexts'
import { CartButton, Languages, LightDarkButton } from '..'
import { links } from './links'
import styles from './NavigationMobile.module.scss'

export function NavigationMobile() {
  const { navigationMobileIsOpen, closeNavigationMobile } = useNavigationMobileContext()

  return (
    <nav className={`${styles.container} ${navigationMobileIsOpen ? styles.isOpen : ''}`}>
      <ul className={styles.ul}>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route} onClick={closeNavigationMobile}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <CartButton />
      <LightDarkButton id='NavigationMobile' />
      <Languages />
    </nav>
  )
}
