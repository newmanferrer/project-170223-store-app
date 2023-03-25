'use client'

import { useShoppingCartContext } from '@/contexts'
import { CloseIcon, CartProductCard } from '@/components'
import styles from './ShoppingCart.module.scss'

export const ShoppingCart = () => {
  const { cart, isOpen, closeCart } = useShoppingCartContext()

  function getTotal() {
    const total = cart.reduce((acc, product) => acc + product.price * product.stock, 0).toFixed(2)
    return total
  }

  return (
    <div className={`${styles.container} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.container__title_and_button_wrapper}>
        <h2 className={styles.container__title_and_button_wrapper__title}>Shopping Cart</h2>
        <CloseIcon dark onClickFunction={closeCart} />
      </div>

      {cart.length === 0 ? (
        <div className={styles.container__empty_wrapper}>
          <h3 className={styles.container__empty_wrapper__title}>Cart is empty!</h3>
          <h4 className={styles.container__empty_wrapper__subtitle}>Add one product...</h4>
        </div>
      ) : (
        <>
          <div className={styles.container__products_wrapper}>
            <h3 className={styles.container__products_wrapper__title}>Your Products</h3>
            <>
              {cart.map(product => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </>
          </div>

          <div className={styles.container__total_wrapper}>
            <h3 className={styles.container__total_wrapper__total}>Total: ${getTotal()}</h3>
          </div>
        </>
      )}
    </div>
  )
}
