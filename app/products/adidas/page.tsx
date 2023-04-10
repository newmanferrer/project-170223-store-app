import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Adidas Page',
  description: 'Adidas Page'
}

export default async function AdidasPage() {
  const products = await services.getAdidasProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Adidas Products'
        subtitle='These are all our adidas products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
        backgroundDark
      />
    </div>
  )
}
