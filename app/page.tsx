import { Header, SectionBanner, SectionProducts, SectionBrands, Footer } from '@/app/components'
import { services } from '@/services'
import styles from './page.module.scss'

export default async function HomePage() {
  const latestProducts = await services.getLatestProducts()
  const newArrivalsProducts = await services.getNewArrivalsProducts()
  const mostWantedProducts = await services.getMostWantedProducts()

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      <SectionBanner />

      {/* @ts-expect-error Async Server Component */}
      <SectionBrands title='BRANDS' subtitle='These are our brands for you' />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Latest Products'
        subtitle='These are our latest products'
        products={latestProducts.slice(0, 3)}
        skeletonQuantity={3}
        goToPageLink='products/latest'
        goToPageLinkTitle='go to lates'
      />

      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='New Arrivals'
        subtitle='Look at our next products to arrive for you'
        products={newArrivalsProducts.slice(0, 3)}
        skeletonQuantity={3}
        goToPageLink='products/new-arrivals'
        goToPageLinkTitle='go to new arrivals'
        backgroundDark
      />

      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Most Wanted'
        subtitle='These are the products most sought after by our customers'
        products={mostWantedProducts.slice(0, 3)}
        skeletonQuantity={3}
        goToPageLink='products/most-wanted'
        goToPageLinkTitle='go to most wanted'
      />

      <Footer />
    </div>
  )
}
