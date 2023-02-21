import { Header } from '../components'
import { font_montserrat, font_dancing_script, font_jetBrainsMono } from '../fonts'
import './globals.scss'

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html
      lang='en'
      className={`${font_montserrat.variable} ${font_dancing_script} ${font_jetBrainsMono}`}
    >
      <head />
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
