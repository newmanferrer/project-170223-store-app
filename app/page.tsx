import { Header, SectionBanner, SectionLatestProducts, Footer } from '../components'
import styles from './page.module.scss'

export default async function HomePage() {
  return (
    <div className={styles.container}>
      <Header bgTransparent />
      <SectionBanner />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionLatestProducts title='Latest Products' subtitle='These are our latest products' />

      <Footer />
    </div>
  )
}
