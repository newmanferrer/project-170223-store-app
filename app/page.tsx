import { Header, SectionBanner, SectionProducts, Footer } from '../components'
import { services } from '@/services'
import styles from './page.module.scss'

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <Header bgTransparent />
      <SectionBanner />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Latest Products'
        subtitle='These are our latest products'
        productQuantity={3}
        serviceFunction={services.getAllLatestProductsStatic}
      />

      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='New Arrivals'
        subtitle='Look at our next products to arrive for you'
        productQuantity={3}
        serviceFunction={services.getAllNewArrivalsProductsStatic}
        backgroundDark
      />

      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Most Wanted'
        subtitle='These are the products most sought after by our customers'
        productQuantity={3}
        serviceFunction={services.getAllMostWantedProductsStatic}
      />

      <Footer />
    </div>
  )
}
