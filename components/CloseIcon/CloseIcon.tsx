import { useNavigationMobileContext } from '../../contexts'
import styles from './CloseIcon.module.scss'

export function CloseIcon() {
  const { closeNavigationMobile } = useNavigationMobileContext()

  return (
    <div className={styles.container} onClick={closeNavigationMobile}>
      <span></span>
      <span></span>
    </div>
  )
}
