import { services } from '@/services'
import { Header, SectionProducts } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Store Page',
  description: 'Store Page'
}

export default function StorePage() {
  return (
    <div className={styles.container}>
      <Header />

      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <SectionProducts
        title='Store'
        subtitle='These are all our products for you'
        serviceFunction={services.getAllProductsStatic}
      />
    </div>
  )
}
