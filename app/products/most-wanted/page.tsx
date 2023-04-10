import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Most Wanted Page',
  description: 'Most Wanted Page'
}

export default async function MostWantedPage() {
  const products = await services.getMostWantedProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Most Wanted Products'
        subtitle='These are all our most wanted products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
