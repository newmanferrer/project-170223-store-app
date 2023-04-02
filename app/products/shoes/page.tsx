import { services } from '@/services'
import { Header, SectionProducts } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Shoes Page',
  description: 'Shoes Page'
}

export default async function ShoesPage() {
  const products = await services.getShoesProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Shoes Products'
        subtitle='These are all our shoes for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
        backgroundDark
      />
    </div>
  )
}
