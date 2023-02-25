import Link from 'next/link'
import { CartButton, Languages, LightDarkButton } from '..'
import { links } from './links'
import styles from './NavigationMobile.module.scss'

interface IProps {
  mobileNavIsOpen: boolean
  setMobileNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavigationMobile({ mobileNavIsOpen, setMobileNavIsOpen }: IProps) {
  return (
    <nav className={`${styles.container} ${mobileNavIsOpen ? styles.isOpen : ''}`}>
      <ul className={styles.ul}>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route} onClick={() => setMobileNavIsOpen(false)}>
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
