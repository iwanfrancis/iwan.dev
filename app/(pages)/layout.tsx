import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import BackgroundHoverEffect from '../components/Misc/BackgroundHoverEffect/BackgroundHoverEffect'

export const metadata: Metadata = {
  title: 'Iwan Francis | Web Developer',
  description: 'Personal site for Iwan Francis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <BackgroundHoverEffect />
        <div className="relative z-50">{children}</div>
      </body>
    </html>
  )
}
