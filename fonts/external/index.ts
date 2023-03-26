import { Montserrat, Dancing_Script } from 'next/font/google'

//* =======================================================
//* 1.- Montserrat Font (Sans Serif)
//* =======================================================
export const font_montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
})
//* =======================================================

//* =======================================================
//* 2.- Dancing Script Font (Handwriting)
//* =======================================================
export const font_dancing_script = Dancing_Script({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
})
//* =======================================================
