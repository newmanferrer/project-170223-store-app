import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Github Page',
  description: 'Github Page'
}

export default async function GithubPage() {
  const products = await services.getGithubProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Github Products'
        subtitle='These are all our github products for you'
        products={products}
        skeletonQuantity={9}
        minHeight100vh
        paddingTop
      />
    </div>
  )
}
