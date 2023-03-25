import type { Metadata } from 'next'
import { NavigationMobileProvider, ShoppingCartProvider } from '../contexts'
import { ShoppingCart } from '@/components'
import { font_montserrat, font_dancing_script, font_jetBrainsMono } from '../fonts'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'Store App | Home Page',
    template: 'Store App | %s'
  },
  description: 'Home Page',
  category: 'web development | online store',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Prisma'],
  creator: 'Newman Ferrer',
  authors: [{ name: 'Newman Ferrer', url: 'https://github.com/newmanferrer' }]
}

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <ShoppingCartProvider>
      <NavigationMobileProvider>
        <html
          lang='en'
          className={`${font_montserrat.variable} ${font_dancing_script.variable} ${font_jetBrainsMono.variable}`}
        >
          <head />
          <body>
            <main>{children}</main>
            <ShoppingCart />
          </body>
        </html>
      </NavigationMobileProvider>
    </ShoppingCartProvider>
  )
}
