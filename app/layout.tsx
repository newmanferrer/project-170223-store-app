import type { Metadata } from 'next'
import { NavigationMobileProvider } from '../contexts'
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
    <NavigationMobileProvider>
      <html
        lang='en'
        className={`${font_montserrat.variable} ${font_dancing_script.variable} ${font_jetBrainsMono.variable}`}
      >
        <head />
        <body>
          <main>{children}</main>
        </body>
      </html>
    </NavigationMobileProvider>
  )
}

/* export default function HomePageHead() {
  return (
    <>
      <title>Store App | Home Page</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Home Page' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
} */

/* export default function SignInPageHead() {
  return (
    <>
      <title>Store App | Sign in Page</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Sign In Page' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
} */

/* export default function StorePageHead() {
  return (
    <>
      <title>Store App | Store Page</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Store Page' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
} */

/* export default function FAQPageHead() {
  return (
    <>
      <title>Store App | FAQ Page</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='FAQ Page' />
      <link rel='icon' href='/favicon.ico' />
    </>
  )
} */
