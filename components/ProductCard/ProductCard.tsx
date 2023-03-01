import styles from './ProductCard.module.scss'

export function ProductCard() {
  return (
    <article className={styles.container}>
      <div className={styles.container__image_container}></div>
      <div className={styles.container__info_container}></div>
      <div className={styles.container__buttons_container}></div>
    </article>
  )
}
