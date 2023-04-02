import { useNavigationMobileContext } from '@/contexts'
import styles from './HamburgerIcon.module.scss'

export function HamburgerIcon() {
  const { openNavigationMobile } = useNavigationMobileContext()

  return (
    <div className={styles.container} onClick={openNavigationMobile}>
      <span className={styles.container__span}></span>
      <span className={styles.container__span}></span>
      <span className={styles.container__span}></span>
    </div>
  )
}
