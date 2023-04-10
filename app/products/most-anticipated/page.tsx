import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Most Anticipated Page',
  description: 'Most Anticipated Page'
}

export default async function MostAnticipatedPage() {
  const products = await services.getMostAnticipatedProducts()

  return (
    <div className={styles.container}>
      <Header />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Most Anticipated Products'
        subtitle='These are all our most anticipated products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
        backgroundDark
      />
    </div>
  )
}
