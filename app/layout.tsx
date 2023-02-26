import { NavigationMobileProvider } from '../contexts'
import { Header } from '../components'
import { font_montserrat, font_dancing_script, font_jetBrainsMono } from '../fonts'
import './globals.scss'

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
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </NavigationMobileProvider>
  )
}
