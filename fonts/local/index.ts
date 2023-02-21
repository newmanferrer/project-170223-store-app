import localFont from '@next/font/local'

//* -----------------------------------------------------------------
//* 1.- Fira Code
//* -----------------------------------------------------------------
export const font_jetBrainsMono = localFont({
  src: [
    {
      path: './JetBrainsMono/JetBrainsMono-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './JetBrainsMono/JetBrainsMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './JetBrainsMono/JetBrainsMono-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './JetBrainsMono/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-jetBrainsMono'
})
//* -----------------------------------------------------------------
