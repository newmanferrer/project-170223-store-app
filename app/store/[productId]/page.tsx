import { services } from '@/services'
import { Header, ProductCard } from '@/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Product Page',
  description: 'Product Page'
}

interface IProps {
  params: {
    productId: string
  }
}

export default async function ProductDetailsPage({ params }: IProps) {
  const productId = params.productId
  const product = await services.getProductStatic(productId)

  return (
    <div className={styles.container}>
      <Header />

      <h1>PRODUCT DETAILS PAGE</h1>
      <div>Product ID: {productId}</div>
      <ProductCard key={productId} product={product} />
    </div>
  )
}