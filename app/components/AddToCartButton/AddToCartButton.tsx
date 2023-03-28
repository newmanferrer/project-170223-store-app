import { Product } from '@prisma/client'
import { useShoppingCartContext } from '@/contexts'
import styles from './AddToCartButton.module.scss'

interface IAddToCartButtonProps {
  product: Product
}

export const AddToCartButton = ({ product }: IAddToCartButtonProps) => {
  const { addProductToCart, openCart } = useShoppingCartContext()

  const handleClick = () => {
    addProductToCart(product)
    openCart()
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Add to Cart
    </button>
  )
}
