import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '@/models'
import styles from './ProductDetailsCard.module.scss'

interface IProps {
  product: IProduct
}

export function ProductDetailsCard({ product }: IProps) {
  return (
    <article className={styles.container}>
      <section className={styles.container__image_and_name_wrapper}>
        <Image
          className={styles.container__image_and_name_wrapper__image}
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />
        <h1 className={styles.container__image_and_name_wrapper__name}>{product.name}</h1>
      </section>

      <section className={styles.container__info_wrapper}>
        <h2 className={styles.container__info_wrapper__title}>Product Details</h2>

        <h3 className={styles.container__info_wrapper__name}>
          <span className={styles.container__info_wrapper__name__span}>Name</span>: {product.name}
        </h3>

        <div className={styles.container__info_wrapper__brand_name_and_logo_wrapper}>
          <h4 className={styles.container__info_wrapper__brand_name_and_logo_wrapper__name}>
            <span
              className={styles.container__info_wrapper__brand_name_and_logo_wrapper__name__span}
            >
              Brand
            </span>
            : {product.brand_name}
          </h4>
          <Image
            className={styles.container__info_wrapper__brand_name_and_logo_wrapper__logo}
            src={product.brand_logo}
            alt='brand logo'
            width={25}
            height={20}
          />
        </div>

        <h4 className={styles.container__info_wrapper__price}>
          <span className={styles.container__info_wrapper__price__span}>Price</span>: $
          {product.price}
        </h4>

        <h4 className={styles.container__info_wrapper__stock}>
          <span className={styles.container__info_wrapper__stock__span}>Stock</span>:{' '}
          {product.stock} units
        </h4>

        {product.categories &&
          product.categories.length > 0 &&
          product.categories.map(({ id, name }) => (
            <h4 className={styles.container__info_wrapper__category} key={id}>
              <span className={styles.container__info_wrapper__category__span}>Category</span>:{' '}
              {name}
            </h4>
          ))}

        <h4 className={styles.container__info_wrapper__id}>
          <span className={styles.container__info_wrapper__id__span}>ID</span>:{' '}
          {product.id.slice(-12)}
        </h4>

        <p className={styles.container__info_wrapper__description}>
          <span className={styles.container__info_wrapper__description__span}>Description</span>:
          {product.long_description}
        </p>
      </section>

      <section className={styles.container__tags_wrapper}>
        {product.tags &&
          product.tags.length > 0 &&
          product.tags.map(({ id, name }) => (
            <li className={styles.container__tags_wrapper__li} key={id}>
              <Link className={styles.container__tags_wrapper__li__link} href='/store'>
                {name}
              </Link>
            </li>
          ))}
      </section>
    </article>
  )
}
