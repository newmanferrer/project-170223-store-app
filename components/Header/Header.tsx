import { Logo, Navigation, HamburgerIcon, CloseIcon, CartButton } from '../'
import { font_dancing_script } from '../../fonts'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={`${styles.container} ${font_dancing_script.variable}`}>
      <Logo href='/' label='BestStore' />
      <Navigation />
      {/* <CartButton /> */}
      <HamburgerIcon />
      {/* <CloseIcon /> */}
    </header>
  )
}
