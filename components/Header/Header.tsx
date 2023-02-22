import { Logo, Navigation, HamburgerIcon, CartButton, Languages, LightDarkButton } from '../'
import { font_dancing_script } from '../../fonts'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={`${styles.container} ${font_dancing_script.variable}`}>
      <Logo href='/' label='BestStore' />
      <Navigation />
      <CartButton />
      <Languages />
      <LightDarkButton id='dark-mode' />
      <HamburgerIcon />
    </header>
  )
}
