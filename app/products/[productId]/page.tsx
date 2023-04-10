import { notFound } from 'next/navigation'
import { services } from '@/services'
import { Header, ProductDetailsCard } from '@/components'
import styles from './page.module.scss'

interface IProps {
  params: {
    productId: string
  }
}

//* ISR: Incremental Static Regeneration
export const revalidate = 60

export async function generateMetadata({ params }: IProps) {
  const productId = params.productId
  const product = await services.getProductById(productId)

  if (!product) notFound()

  return {
    title: product.name,
    description: 'Product Details Page'
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
