import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@prisma/client'
import cartIcon from '@/public/images/shopping.cart.icons/cart.solid.svg'
import detailsIcon from '@/public/images/shopping.cart.icons/details.info.solid.svg'
import { blurDataURL } from '@/public/images/products/base64/blurDataURL'
import styles from './ProductCard.module.scss'

interface IPros {
  product: Product
}

export default function ProductCard({ product }: IPros) {
  return (
    <article className={styles.container}>
      <div className={styles.brand_and_image_and_name_wrapper}>
        <div className={styles.brand_wrapper}>
          <Image
            src={product.brand_logo}
            alt='brand logo'
            width={22}
            height={22}
            className={styles.brand_wrapper__brand_logo}
          />
          <h3 className={styles.brand_wrapper__brand_name}>{product.brand_name}</h3>
        </div>

        <div className={styles.image_wrapper}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            priority
            blurDataURL={blurDataURL}
            placeholder='blur'
            className={styles.image_wrapper__image}
          />
        </div>

        <div className={styles.name_wrapper}>
          <h2 className={styles.name_wrapper__name}>{product.name}</h2>
        </div>
      </div>

      <div className={styles.buttons_wrapper}>
        <button className={styles.buttons_wrapper__button_add_to_cart} title='add to cart'>
          <Image
            src={cartIcon}
            alt='cart icon'
            width={20}
            height={20}
            className={styles.cartImage}
          />
        </button>

        <Link
          href={`store/${product.id}`}
          className={styles.buttons_wrapper__button_details}
          title='details'
        >
          <Image
            src={detailsIcon}
            alt='cart icon'
            width={20}
            height={20}
            className={styles.detailImage}
          />
        </Link>
      </div>

      <div className={styles.stock_and_price_wrapper}>
        <h3 className={styles.stock_and_price_wrapper__stock}>Stock: {product.stock}</h3>
        <h3 className={styles.stock_and_price_wrapper__price}>${product.price}</h3>
      </div>
    </article>
  )
}
