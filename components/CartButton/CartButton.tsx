import Image from 'next/image'
import styles from './CartButton.module.scss'
import ShoppingCartIcon from '../../public/images/shopping.cart.icons/cart.solid.svg'

interface IProps {
  quantity?: number
}

export const CartButton = ({ quantity = 23 }: IProps) => {
  return (
    <div className={styles.container}>
      <Image src={ShoppingCartIcon} alt='shopping cart icon' width={25} height={25} />
      <span>({quantity})</span>
    </div>
  )
}
