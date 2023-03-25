'use client'

import { useShoppingCartContext } from '../../contexts'
import { CartProductCard } from '@/components'
import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
  const { cart, isOpen, closeCart } = useShoppingCartContext()

  function getTotal() {
    const total = cart.reduce((acc, product) => acc + product.price * product.stock, 0).toFixed(2)
    return total
  }

  return (
    <div className={styles.container} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.title_button_container}>
        <h2>Shopping Cart</h2>
        <button onClick={closeCart}>❌</button>
      </div>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <h3>Cart is empty!</h3>
          <h4>Add one product...</h4>
        </div>
      ) : (
        <div className={styles.products}>
          <h3>Your Products</h3>
          <>
            {cart.map(product => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </>
          <div>
            <h3 className={styles.total}>Total: ${getTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  )
}
