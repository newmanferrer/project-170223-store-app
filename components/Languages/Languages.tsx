import Link from 'next/link'
import styles from './Languages.module.scss'

export const Languages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selected}></div>
      <ul className={styles.ul}>
        <li>
          <Link href='#' className={styles.english}>
            En
          </Link>
        </li>
        <li>
          <Link href='#' className={styles.spanish}>
            Sp
          </Link>
        </li>
      </ul>
    </div>
  )
}
