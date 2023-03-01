import styles from './SectionLatestProducts.module.scss'

export function SectionLatestProducts() {
  return (
    <section className={styles.container}>
      <h2 className={styles.container__title}>Latest Products</h2>
      <div className={styles.container__products_container}>
        <h3>Product 1</h3>
        <h3>Product 2</h3>
        <h3>Product 3</h3>
      </div>
    </section>
  )
}
