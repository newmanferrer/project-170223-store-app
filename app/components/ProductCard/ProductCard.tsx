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
    <article className={styles.article}>
      <div className={styles.article__brand_and_image_and_name_wrapper}>
        <div className={styles.article__brand_wrapper}>
          <Image
            src={product.brand_logo}
            alt='brand logo'
            width={22}
            height={22}
            className={styles.article__logo_image}
          />
          <h3 className={styles.article__brand_name}>{product.brand_name}</h3>
        </div>

        <div className={styles.article__image_wrapper}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            priority
            blurDataURL={blurDataURL}
            placeholder='blur'
            className={styles.article__image}
          />
        </div>

        <div className={styles.article__name_wrapper}>
          <h2 className={styles.article__name}>{product.name}</h2>
        </div>
      </div>

      <div className={styles.article__buttons_wrapper}>
        <button className={styles.article__button_add_to_cart} title='add to cart'>
          <Image
            src={cartIcon}
            alt='cart icon'
            width={20}
            height={20}
            className={styles.article__cart_image}
          />
        </button>

        <Link
          href={`/products/${product.id}`}
          title='details'
          className={styles.article__button_details}
        >
          <Image
            src={detailsIcon}
            alt='cart icon'
            width={20}
            height={20}
            className={styles.article__detail_image}
          />
        </Link>
      </div>

      <div className={styles.article__stock_and_price_wrapper}>
        <h3 className={styles.article__stock}>Stock: {product.stock}</h3>
        <h3 className={styles.article__price}>${product.price}</h3>
      </div>
    </article>
  )
}
