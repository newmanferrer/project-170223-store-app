import { services } from '@/services'
import { Header, ProductDetailsCard } from '@/components'
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
  const product = await services.getProductStatic(productId)

  return (
    <div className={styles.container}>
      <Header bgTransparent />

      <ProductDetailsCard key={productId} product={product} />
    </div>
  )
}
