import Image from 'next/image'
import { useShoppingCartContext, useNavigationMobileContext } from '@/contexts'
import styles from './CartButton.module.scss'
import ShoppingCartIcon from '../../../public/images/shopping.cart.icons/cart.solid.svg'

export function CartButton() {
  const { toggleCart, getNumberOfProducts } = useShoppingCartContext()
  const { closeNavigationMobile } = useNavigationMobileContext()

  const handleClick = () => {
    toggleCart()
    closeNavigationMobile()
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <Image
        className={styles.container__image}
        src={ShoppingCartIcon}
        alt='shopping cart icon'
        width={25}
        height={25}
      />
      <span className={styles.container__span}>({`${getNumberOfProducts()}`})</span>
    </div>
  )
}
