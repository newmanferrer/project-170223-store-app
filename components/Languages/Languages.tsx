import Link from 'next/link'
import styles from './Languages.module.scss'

export function Languages() {
  return (
    <div className={styles.container}>
      <div className={styles.container__selected}></div>
      <ul className={styles.container__ul}>
        <li className={styles.container__li}>
          <Link className={`${styles.container__link} ${styles.container__link_english}`} href='#'>
            en
          </Link>
        </li>
        <li className={styles.container__li}>
          <Link className={`${styles.container__link} ${styles.container__link_spanish}`} href='#'>
            es
          </Link>
        </li>
      </ul>
    </div>
  )
}
