import { services } from '@/services'
import { ProductCard } from '@/components'
import styles from './SectionLatestProducts.module.scss'

interface IProps {
  title: string
  subtitle: string
}

export async function SectionLatestProducts({ title, subtitle }: IProps) {
  const latestProducts = await services.getAllLatestProductsStatic()

  return (
    <section className={styles.container}>
      <div className={styles.container__title_and_subtitle_wrapper}>
        <h2 className={styles.container__title_and_subtitle_wrapper__title}>{title}</h2>
        <h3 className={styles.container__title_and_subtitle_wrapper__subtitle}>{subtitle}</h3>
      </div>

      <div className={styles.container__products_wrapper}>
        {latestProducts &&
          latestProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}
