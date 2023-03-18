import { ProductCard } from '@/components'
import styles from './SectionProducts.module.scss'
import { IProduct } from '@/models'

interface IProps {
  title: string
  subtitle: string
  productQuantity: number
  serviceFunction: (quantity?: number) => Promise<IProduct[]>
  backgroundDark?: boolean
  paddingTop?: boolean
}

export async function SectionProducts({
  title,
  subtitle,
  productQuantity,
  serviceFunction,
  backgroundDark,
  paddingTop
}: IProps) {
  const latestProducts = await serviceFunction(productQuantity)

  return (
    <section
      className={`${styles.container} ${styles.backgroundLight} ${
        backgroundDark ? styles.backgroundDark : ''
      } ${paddingTop ? styles.paddingTop : ''}`}
    >
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
