import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Nike Page',
  description: 'Nike Page'
}

export default async function NikePage() {
  const products = await services.getNikeProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Nike Products'
        subtitle='These are all our nike products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
        backgroundDark
      />
    </div>
  )
}
