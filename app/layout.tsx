import type { Metadata } from 'next'
import { GlobalContextsProviders } from '@/contexts'
import { ShoppingCart, ScrollToTopButton, Footer } from '@/components'
import { font_montserrat, font_dancing_script, font_jetBrainsMono, font_acme } from '../fonts'
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
    <html
      lang='en'
      className={`${font_montserrat.variable} ${font_dancing_script.variable} ${font_jetBrainsMono.variable} ${font_acme.variable}`}
    >
      <head />
      <body>
        <GlobalContextsProviders>
          {children}
          <ShoppingCart />
          <ScrollToTopButton />
          <Footer />
        </GlobalContextsProviders>
      </body>
    </html>
  )
}
