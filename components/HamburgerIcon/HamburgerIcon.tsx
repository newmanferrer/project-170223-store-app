import { useNavigationMobileContext } from '../../contexts'
import styles from './HamburgerIcon.module.scss'

export function HamburgerIcon() {
  const { openNavigationMobile } = useNavigationMobileContext()

  return (
    <div className={styles.container} onClick={openNavigationMobile}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
