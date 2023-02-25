'use client'

import styles from './HamburgerIcon.module.scss'

interface IProps {
  mobileNavIsOpen: boolean
  setMobileNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function HamburgerIcon({ mobileNavIsOpen, setMobileNavIsOpen }: IProps) {
  return (
    <div className={styles.container} onClick={() => setMobileNavIsOpen(true)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
