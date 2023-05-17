import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'
import Navbar from '@/components/layout/navbar/navbar'
import CustomCursor from '@/components/common/customCursor'
import Footer from '@/components/layout/footer/footer'

const archia = localFont({
    src: [
        {
            path: '../public/fonts/archia-semibold.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-archia',
})

const tthoves = localFont({
    src: [
        {
            path: '../public/fonts/tthoves-regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-tthoves',
})

export const metadata = {
  title: 'Crafted Digital Agency',
  description: 'Crafted is a leading digital agency dedicated to delivering iconic brands and digital experiences. Unlock the power of innovation as we craft tomorrow\'s digital products today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${archia.variable} ${tthoves.variable}`}>
      <body><CustomCursor />
      <Navbar />
      {children}
      <Analytics />
      <Footer /></body>
    </html>
  )
}
