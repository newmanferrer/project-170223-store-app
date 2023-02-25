'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './NavBarTest.module.scss'

interface IIconProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

interface IMobileNavBarProps {
  isOpen: boolean
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpen: (value: boolean) => void
}

function Icon({ isOpen, setIsOpen }: IIconProps) {
  return (
    <div
      className={`${styles.iconcontainer} ${isOpen ? styles.iconIsOpen : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function MobileNavBar({ isOpen, setIsOpen }: IMobileNavBarProps) {
  return (
    <div className={`${styles.mobilenavbar} ${isOpen ? styles.mobilenavbaropen : ''}`}>
      <div className={styles.mobilenavbar__linksContainer}>
        <Link href='/' onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href='/store' onClick={() => setIsOpen(false)}>
          Store
        </Link>
        <Link href='/faq' onClick={() => setIsOpen(false)}>
          FAQ
        </Link>
        <Link href='/signin' onClick={() => setIsOpen(false)}>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export function NavBarTest() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav>
      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={styles.fullnavbar}>
        <div className={styles.fullnavbar__linksContainer}>
          <Link href='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href='/store' onClick={() => setIsOpen(false)}>
            Store
          </Link>
          <Link href='/faq' onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link href='/signin' onClick={() => setIsOpen(false)}>
            Sign in
          </Link>
        </div>
      </div>
      <Icon isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
