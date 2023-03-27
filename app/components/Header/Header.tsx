'use client'

import { useNavigationMobileContext } from '@/contexts'
import { useScrollYGreaterThan } from '@/hooks'
import { Logo, Navigation, NavigationMobile, HamburgerIcon, CloseIcon } from '@/app/components'
import { font_dancing_script } from '@/fonts'
import styles from './Header.module.scss'

interface IProps {
  bgTransparent?: boolean
}

export function Header({ bgTransparent = false }: IProps) {
  const { navigationMobileIsOpen, closeNavigationMobile } = useNavigationMobileContext()
  const { isGreater } = useScrollYGreaterThan(112)

  return (
    <header
      className={`${styles.container} ${bgTransparent ? styles.bgTransparent : ''}  ${
        isGreater ? styles.bgPrimaryColor : ''
      } ${font_dancing_script.variable}`}
    >
      <Logo href='/' label='BestStore' />

      <Navigation />
      <NavigationMobile />

      {navigationMobileIsOpen ? (
        <CloseIcon mediaQueries onClickFunction={closeNavigationMobile} />
      ) : (
        <HamburgerIcon />
      )}
    </header>
  )
}
