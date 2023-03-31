import Link from 'next/link'
import Image from 'next/image'
import styles from './SectionBrands.module.scss'
import adidasImage from '@/public/images/products/adidas/adidas-section-brand.webp'
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
        <h2 className={styles.container__title}>{title}</h2>
        <h3 className={styles.container__subtitle}>{subtitle}</h3>
      </div>

      <div className={styles.container__brands_wrapper}>
        <div className={styles.container__adidas_wrapper}>
          <Link className={styles.container__link} href='/products/adidas' title='go to adidas'>
            <Image
              className={`${styles.container__image} ${styles.container__image_blur}`}
              src={adidasImage}
              alt='adidas image'
              width={400}
              height={400}
            />
          </Link>
        </div>

        <div className={styles.container__github_wrapper}>
          <Link className={styles.container__link} href='/products/github' title='go to github'>
            <Image
              className={`${styles.container__image} ${styles.github_wrapper__image}`}
              src={githubImage}
              alt='github image'
              width={400}
              height={400}
              placeholder='blur'
            />
          </Link>
        </div>

        <div className={styles.container__nike_wrapper}>
          <Link className={styles.container__link} href='/products/nike' title='go to nike'>
            <Image
              className={`${styles.container__image} ${styles.nike_wrapper__image}`}
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
