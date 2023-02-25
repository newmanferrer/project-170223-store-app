'use client'

import styles from './CloseIcon.module.scss'

interface IProps {
  mobileNavIsOpen: boolean
  setMobileNavIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CloseIcon({ mobileNavIsOpen, setMobileNavIsOpen }: IProps) {
  return (
    <div className={styles.container} onClick={() => setMobileNavIsOpen(false)}>
      <span></span>
      <span></span>
    </div>
  )
}
