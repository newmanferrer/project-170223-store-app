'use client'

import { useState } from 'react'
import { Logo, Navigation, NavigationMobile, HamburgerIcon, CloseIcon } from '../'
import { font_dancing_script } from '../../fonts'
import styles from './Header.module.scss'

export function Header() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

  console.log(mobileNavIsOpen)

  return (
    <header className={`${styles.container} ${font_dancing_script.variable}`}>
      <Logo href='/' label='BestStore' />

      <Navigation />
      <NavigationMobile mobileNavIsOpen={mobileNavIsOpen} setMobileNavIsOpen={setMobileNavIsOpen} />

      {mobileNavIsOpen ? (
        <CloseIcon mobileNavIsOpen={mobileNavIsOpen} setMobileNavIsOpen={setMobileNavIsOpen} />
      ) : (
        <HamburgerIcon mobileNavIsOpen={mobileNavIsOpen} setMobileNavIsOpen={setMobileNavIsOpen} />
      )}
    </header>
  )
}
