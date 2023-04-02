import Image from 'next/image'
import Link from 'next/link'
import { Product, ProductCategory, ProductTag } from '@prisma/client'
import styles from './ProductDetailsCard.module.scss'

interface IPros {
  product: Product & {
    categories: ProductCategory[]
    tags: ProductTag[]
  }
}

export function ProductDetailsCard({ product }: IPros) {
  return (
    <article className={styles.article}>
      <section className={styles.article__image_and_name_wrapper}>
        <Image
          className={styles.article__image}
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />
        <h1 className={`${styles.article__title} ${styles.article__title_h1}`}>{product.name}</h1>
      </section>

      <section className={styles.article__info_wrapper}>
        <h2 className={`${styles.article__title} ${styles.article__title_h2}`}>Product Details</h2>

        <h4 className={`${styles.article__title} ${styles.article__title_h4}`}>
          <span className={styles.article__span}>Name</span>: {product.name}
        </h4>

        <div className={styles.article__brand_name_and_logo_wrapper}>
          <h4 className={`${styles.article__title} ${styles.article__title_h4}`}>
            <span className={styles.article__span}>Brand</span>: {product.brand_name}
          </h4>
          <Image
            className={styles.article__logo}
            src={product.brand_logo}
            alt='brand logo'
            width={25}
            height={20}
          />
        </div>

        <h4 className={`${styles.article__title}${styles.article__title_h4}`}>
          <span className={styles.article__span}>Price</span>: ${product.price}
        </h4>

        <h4 className={`${styles.article__title} ${styles.article__title_h4}`}>
          <span className={styles.article__span}>Stock</span>: {product.stock} units
        </h4>

        {product.categories &&
          product.categories.length > 0 &&
          product.categories.map(({ id, name }) => (
            <h4 className={`${styles.article__title} ${styles.article__title_h4}`} key={id}>
              <span className={styles.article__span}>Category</span>: {name}
            </h4>
          ))}

        <h4 className={`${styles.article__title} ${styles.article__title_h4}`}>
          <span className={styles.article__span}>ID</span>: {product?.id?.slice(-12)}
        </h4>

        <p className={styles.article__paragraph}>
          <span className={styles.article__span}>Description</span>: {product.long_description}
        </p>
      </section>

      <section className={styles.article__tags_wrapper}>
        {product.tags &&
          product.tags.length > 0 &&
          product.tags.map(({ id, name }) => (
            <li className={styles.article__li} key={id}>
              <Link className={styles.article__link} href={`/products/${name.replace(/\s/g, '-')}`}>
                {name}
              </Link>
            </li>
          ))}
      </section>
    </article>
  )
}
