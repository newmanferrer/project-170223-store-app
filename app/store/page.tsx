import { Header } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Store Page',
  description: 'Store Page'
}

export default function StorePage() {
  return (
    <main className={styles.container}>
      <Header />
      <h1>Store Page</h1>
    </main>
  )
}
