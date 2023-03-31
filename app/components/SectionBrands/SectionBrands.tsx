import Link from 'next/link'
import Image from 'next/image'
import styles from './SectionBrands.module.scss'
import adidasImage from '@/public/images/products/adidas/adidas-section-brand.jpg'
import githubImage from '@/public/images/products/github/github-section-brand.webp'
import nikeImage from '@/public/images/products/nike/nike-section-brand.webp'

interface IProps {
  title: string
  subtitle: string
  backgroundDark?: boolean
  skeletonQuantity?: number
}

export async function SectionBrands({ title, subtitle }: IProps) {
  return (
    <section className={styles.container}>
      <div className={styles.container__title_and_subtitle_wrapper}>
        <h2 className={styles.container__title_and_subtitle_wrapper__title}>{title}</h2>
        <h3 className={styles.container__title_and_subtitle_wrapper__subtitle}>{subtitle}</h3>
      </div>

      <div className={styles.container__brands_wrapper}>
        <div className={styles.container__brands_wrapper__adidas_wrapper}>
          <Link
            className={styles.container__brands_wrapper__adidas_wrapper__link}
            href='/products/adidas'
            title='go to adidas'
          >
            <Image
              className={styles.container__brands_wrapper__adidas_wrapper__link}
              src={adidasImage}
              alt='adidas image'
              width={400}
              height={400}
            />
          </Link>
        </div>

        <div className={styles.container__brands_wrapper__github_wrapper}>
          <Link
            className={styles.container__brands_wrapper__github_wrapper__link}
            href='/products/github'
            title='go to github'
          >
            <Image
              className={styles.container__brands_wrapper__github_wrapper__link__image}
              src={githubImage}
              alt='github image'
              width={400}
              height={400}
            />
          </Link>
        </div>

        <div className={styles.container__brands_wrapper__nike_wrapper}>
          <Link
            className={styles.container__brands_wrapper__nike_wrapper__link}
            href='/products/nike'
            title='go to nike'
          >
            <Image
              className={styles.container__brands_wrapper__nike_wrapper__link__image}
              src={nikeImage}
              alt='nike image'
              width={400}
              height={400}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
