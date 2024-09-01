import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { cn } from './utils/cn'

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
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
