import { PrismaClient } from '@prisma/client'
import { ProductCard } from '@/components'
import styles from './SectionLatestProducts.module.scss'

interface IProps {
  title: string
}

export async function SectionLatestProducts({ title }: IProps) {
  const prisma = new PrismaClient()

  const products = (
    await prisma.product.findMany({
      where: {
        tags: {
          some: {
            name: {
              contains: 'latest'
            }
          }
        }
      }
    })
  ).slice(0, 3)

  return (
    <section className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <div className={styles.container__products_container}>
        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  )
}
