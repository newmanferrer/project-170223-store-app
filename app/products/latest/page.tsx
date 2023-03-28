import { services } from '@/services'
import { Header, SectionProducts } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Latest Page',
  description: 'Latest Page'
}

export default async function LatestPage() {
  const products = await services.getLatestProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Latest Products'
        subtitle='These are all our latest products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
