import { services } from '@/services'
import { Header, SectionProducts } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Men Page',
  description: 'Men Page'
}

export default async function MenPage() {
  const products = await services.getMenProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Men Products'
        subtitle='These are all our products for men'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
        backgroundDark
      />
    </div>
  )
}
