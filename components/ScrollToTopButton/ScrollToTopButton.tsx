'use client'

import { useScrollYGreaterThan, useIsScrolling } from '@/hooks'
import styles from './ScrollToTopButton.module.scss'

export function ScrollToTopButton() {
  const { isGreater } = useScrollYGreaterThan(640)
  const { isScrolling } = useIsScrolling(3)

  const handlerClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.button} ${isGreater && isScrolling ? styles.visibility : ''}`}
      onClick={handlerClick}
    >
      <div className={styles.spans_wrapper}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </div>
    </button>
  )
}
