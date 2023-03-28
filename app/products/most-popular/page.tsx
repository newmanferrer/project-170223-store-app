import { services } from '@/services'
import { Header, SectionProducts } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Most Popular Page',
  description: 'Most Popular Page'
}

export default async function MostPopularPage() {
  const products = await services.getMostPopularProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Most Popular Products'
        subtitle='These are all our most popular products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
