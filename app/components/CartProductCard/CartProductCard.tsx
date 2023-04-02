import Image from 'next/image'
import { useShoppingCartContext } from '@/contexts'
import { Product } from '@prisma/client'
import styles from './CartProductCard.module.scss'

interface ICartProductCardProps {
  product: Product
}

export const CartProductCard = ({ product }: ICartProductCardProps) => {
  const { quantityRemoveOne, removeProductToCart, quantityAddOne } = useShoppingCartContext()

  return (
    <article className={styles.container} key={product.id}>
      <div className={styles.container__image_wrapper}>
        <Image
          className={`${styles.image} ${styles.container__image} ${styles.image_wrapper__image}`}
          src={product.image}
          alt={product.name}
          width={70}
          height={70}
        />
      </div>

      <div className={styles.container__info_wrapper}>
        <h4 className={`${styles.h4} ${styles.container__h4} ${styles.info_wrapper__h4}`}>
          {product.name}
        </h4>
        <p
          className={`${styles.paragraph} ${styles.container__paragraph} ${styles.info_wrapper__paragraph}`}
        >
          ${product.price}
        </p>
        <p
          className={`${styles.paragraph} ${styles.container__paragraph} ${styles.info_wrapper__paragraph}`}
        >
          {product.stock} units
        </p>
        <p
          className={`${styles.paragraph} ${styles.container__paragraph} ${styles.info_wrapper__paragraph}`}
        >
          SubTotal: ${(product.price * product.stock).toFixed(2)}
        </p>
      </div>

      <div className={styles.container__buttons_wrapper}>
        <button
          className={`${styles.button} ${styles.container__button} ${styles.buttons_wrapper__button}`}
          onClick={() => quantityRemoveOne(product.id)}
        >
          -1
        </button>
        <button
          className={`${styles.button} ${styles.container__button} ${styles.buttons_wrapper__button}`}
          onClick={() => removeProductToCart(product.id)}
        >
          Delete
        </button>
        <button
          className={`${styles.button} ${styles.container__button} ${styles.buttons_wrapper__button}`}
          onClick={() => quantityAddOne(product.id)}
        >
          +1
        </button>
      </div>
    </article>
  )
}
