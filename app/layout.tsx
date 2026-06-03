import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Metajive Front-End Challenge',
  description: 'Show us what you can do.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={sourceSans.variable}>
    <body>{children}</body>
  </html>
)

export default RootLayout
