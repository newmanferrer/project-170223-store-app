import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import colors from '@/colors/colors.module.scss'
import styles from './ProductCardSkeleton.module.scss'

interface IPros {
  quantity?: number
}

export function ProductCardSkeleton({ quantity = 1 }: IPros) {
  return (
    <SkeletonTheme
      width={240}
      height={400}
      borderRadius={5}
      baseColor={colors.skeletonBaseColor}
      highlightColor={colors.skeletonHighlightColor}
      enableAnimation={true}
      duration={2}
    >
      {[...Array(quantity)].map(index => (
        <div className={styles.container} key={index}>
          <div className={styles.brand_and_image_and_name_wrapper}>
            <div className={styles.brand_wrapper}>
              <Skeleton
                className={styles.brand_wrapper__brand_logo}
                circle
                width={25}
                height={25}
              />
              <h3>
                <Skeleton
                  className={styles.brand_wrapper__brand_name}
                  count={1}
                  width={40}
                  height={17}
                />
              </h3>
            </div>

            <div className={styles.image_wrapper}>
              <Skeleton className={styles.image_wrapper__image} width={200} height={200} />
            </div>

            <div className={styles.name_wrapper}>
              <h2>
                <Skeleton className={styles.name_wrapper__name} count={1} width={150} height={25} />
              </h2>
            </div>
          </div>

          <div className={styles.buttons_wrapper}>
            <button className={styles.buttons_wrapper__button_add_to_cart}>
              <Skeleton className={styles.cartImage} circle width={36} height={36} />
            </button>

            <button className={styles.buttons_wrapper__button_details} title='details'>
              <Skeleton className={styles.detailImage} circle width={36} height={36} />
            </button>
          </div>

          <div className={styles.stock_and_price_wrapper}>
            <h3>
              <Skeleton
                className={styles.stock_and_price_wrapper__stock}
                count={1}
                width={80}
                height={20}
              />
            </h3>

            <h3>
              <Skeleton className={styles.stock_and_price_wrapper__price} width={60} height={20} />
            </h3>
          </div>
        </div>
      ))}
    </SkeletonTheme>
  )
}
