'use client'

import { useNavigationMobileContext } from '../../contexts'
import { Logo, Navigation, NavigationMobile, HamburgerIcon, CloseIcon } from '../'
import { font_dancing_script } from '../../fonts'
import styles from './Header.module.scss'

interface IHeaderProps {
  bgTransparent?: boolean
}

export function Header({ bgTransparent = false }: IHeaderProps) {
  const { navigationMobileIsOpen } = useNavigationMobileContext()

  return (
    <header
      className={`${styles.container} ${font_dancing_script.variable} ${
        bgTransparent ? styles.bgTransparent : ''
      }`}
    >
      <Logo href='/' label='BestStore' />

      <Navigation />
      <NavigationMobile />

      {navigationMobileIsOpen ? <CloseIcon /> : <HamburgerIcon />}
    </header>
  )
}
