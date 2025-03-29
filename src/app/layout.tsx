import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import type { Metadata } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

const inter = Inter({ subsets: ['latin'] })

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // 원하는 굵기 추가
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `leeseongjun's blog`,
  description: 'BLOG',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistMono.variable} antialiased`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
