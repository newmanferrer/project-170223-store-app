import Image from 'next/image'
import sun from '@/public/images/light.dark.button/sun.svg'
import moon from '@/public/images/light.dark.button/moon.svg'
import styles from './LightDarkButton.module.scss'

interface IProps {
  id: string
}

export function LightDarkButton({ id }: IProps) {
  return (
    <>
      <input className={styles.input} type='checkbox' id={id} />
      <label className={styles.label} htmlFor={id}>
        <Image
          className={`${styles.image} ${styles.image_sun}`}
          src={sun}
          width={20}
          height={20}
          alt='sun image'
        />
        <Image
          className={`${styles.image} ${styles.image_moon}`}
          src={moon}
          width={25}
          height={25}
          alt='moon image'
        />
      </label>
    </>
  )
}
