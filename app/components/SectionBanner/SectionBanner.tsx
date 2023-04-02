import styles from './SectionBanner.module.scss'

export function SectionBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.container__banner_wrapper}>
        <div className={styles.container__info_wrapper}>
          <h1 className={styles.container__title}>Best Sellers 2023 Collections</h1>
          <p className={styles.container__paragraph}>Everything you could wish for, and more</p>
        </div>
      </div>
    </section>
  )
}
