import styles from './CloseIcon.module.scss'

interface IProps {
  dark?: boolean
  onClickFunction?: () => void
}

export function CloseIcon({ dark, onClickFunction }: IProps) {
  return (
    <div className={`${styles.container} ${dark ? styles.dark : ''}`} onClick={onClickFunction}>
      <span className={styles.container__span}></span>
      <span className={styles.container__span}></span>
    </div>
  )
}
