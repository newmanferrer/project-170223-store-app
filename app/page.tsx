import { Header, SectionBanner, SectionLatestProducts } from '../components'
import styles from './page.module.scss'

export default async function HomePage() {
  return (
    <main className={styles.container}>
      <Header bgTransparent />
      <SectionBanner />
      <SectionLatestProducts />
    </main>
  )
}
