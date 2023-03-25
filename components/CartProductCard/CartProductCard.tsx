import Image from 'next/image'
import { useShoppingCartContext } from '@/contexts'
import { Product } from '@prisma/client'
import styles from './CartProductCard.module.css'

interface ICartProductCardProps {
  product: Product
}

export const CartProductCard = ({ product }: ICartProductCardProps) => {
  const { quantityRemoveOne, removeProductToCart, quantityAddOne } = useShoppingCartContext()

  return (
    <article className={styles.article} key={product.id}>
      <div className={styles.articleImage}>
        <Image src={product.image} alt={product.name} width={70} height={70} />
      </div>

      <div className={styles.articleInfo}>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p>{product.stock} units</p>
        <p>SubTotal: ${(product.price * product.stock).toFixed(2)}</p>
      </div>

      <div className={styles.articleButtons}>
        <button onClick={() => quantityRemoveOne(product.id)}>-1</button>
        <button onClick={() => removeProductToCart(product.id)}>Delete</button>
        <button onClick={() => quantityAddOne(product.id)}>+1</button>
      </div>
    </article>
  )
}
