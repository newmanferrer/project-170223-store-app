import { lazy, Suspense } from 'react'
import { Product } from '@prisma/client'
import { ProductCardSkeleton } from '@/app/components'
import styles from './SectionProducts.module.scss'

const ProductCard = lazy(() => import('../ProductCard/ProductCard'))

interface IProps {
  title: string
  subtitle: string
  products: Product[]
  minHeight100vh?: boolean
  paddingTop?: boolean
  backgroundDark?: boolean
  skeletonQuantity: number
}

export async function SectionProducts({
  title,
  subtitle,
  products,
  backgroundDark,
  minHeight100vh,
  paddingTop,
  skeletonQuantity
}: IProps) {
  return (
    <section
      className={`${styles.container} ${styles.backgroundLight} ${
        backgroundDark ? styles.backgroundDark : ''
      } ${paddingTop ? styles.paddingTop : ''} ${minHeight100vh ? styles.minHeight100vh : ''}`}
    >
      <div className={styles.container__title_and_subtitle_wrapper}>
        <h2 className={styles.container__title_and_subtitle_wrapper__title}>{title}</h2>
        <h3 className={styles.container__title_and_subtitle_wrapper__subtitle}>{subtitle}</h3>
      </div>

      <div className={styles.container__products_wrapper}>
        <Suspense fallback={<ProductCardSkeleton quantity={skeletonQuantity} />}>
          {products && products.map(product => <ProductCard key={product.id} product={product} />)}
        </Suspense>
      </div>
    </section>
  )
}
