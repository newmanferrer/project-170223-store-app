import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Store Page',
  description: 'Store Page'
}

export default async function StorePage() {
  const products = await services.getProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Store'
        subtitle='These are all our products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
