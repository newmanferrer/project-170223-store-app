import Image from 'next/image'
import sun from '../../../public/images/light.dark.button/sun.svg'
import moon from '../../../public/images/light.dark.button/moon.svg'
import styles from './LightDarkButton.module.scss'

interface IProps {
  id: string
}

export function LightDarkButton({ id }: IProps) {
  return (
    <>
      <input type='checkbox' id={id} className={styles.input} />
      <label className={styles.label} htmlFor={id}>
        <Image className={styles.sun} src={sun} width={20} height={20} alt='sun image' />
        <Image className={styles.moon} src={moon} width={25} height={25} alt='moon image' />
      </label>
    </>
  )
}
