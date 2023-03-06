import styles from './SectionBanner.module.scss'

export function SectionBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.container__banner}>
        <div className={styles.banner__info}>
          <h1 className={styles.info__title}>Best Sellers 2023 Collections</h1>
          <p className={styles.info__paragraph}>Everything you could wish for, and more</p>
        </div>
      </div>
    </section>
  )
}
