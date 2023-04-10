import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Women Page',
  description: 'Women Page'
}

export default async function WomenPage() {
  const products = await services.getWomenProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Women Products'
        subtitle='These are all our products for women'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
