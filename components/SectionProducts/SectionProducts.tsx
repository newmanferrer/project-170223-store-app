import { Product } from '@prisma/client'
import { ProductCard } from '@/components'
import styles from './SectionProducts.module.scss'

interface IProps {
  title: string
  subtitle: string
  products: Product[]
  paddingTop?: boolean
  backgroundDark?: boolean
}

export async function SectionProducts({
  title,
  subtitle,
  products,
  backgroundDark,
  paddingTop
}: IProps) {
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
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}
