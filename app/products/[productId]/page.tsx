import { services } from '@/services'
import { Header, ProductDetailsCard } from '@/app/components'
import styles from './page.module.scss'

export const metadata = {
  title: 'Product Details Page',
  description: 'Product Details Page'
}

interface IProps {
  params: {
    productId: string
  }
}

export default async function ProductDetailsPage({ params }: IProps) {
  const productId = params.productId
  const product = await services.getProductById(productId)

  return (
    <div className={styles.container}>
      <Header />

      <ProductDetailsCard key={productId} product={product} />
    </div>
  )
}
