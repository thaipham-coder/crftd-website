import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'
import CustomCursor from '@/components/common/customCursor'
import SmoothScroller from '@/components/common/smoothScroller'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

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
      path: '../public/fonts/tthoves-bold.woff2',
      weight: '700',
      style: 'normal',
    },
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
  description:
    "Crafted is a leading digital agency dedicated to delivering iconic brands and digital experiences. Unlock the power of innovation as we craft tomorrow's digital products today.",
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archia.variable} ${tthoves.variable}`}>
      <body className="bg-black">
        <CustomCursor />
        <Navbar />
        <SmoothScroller>
          {children}
          <Footer />
        </SmoothScroller>
      </body>
      <Analytics />
    </html>
  )
}
