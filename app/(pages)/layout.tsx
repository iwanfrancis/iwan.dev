import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import '../globals.css'
import BackgroundHoverEffect from '../components/Misc/BackgroundHoverEffect/BackgroundHoverEffect'

export const metadata: Metadata = {
  title: 'Iwan Francis | Web Developer',
  description: 'Personal site for Iwan Francis',
}

const font = Josefin_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <BackgroundHoverEffect />
        <div className="relative z-50">{children}</div>
      </body>
    </html>
  )
}
