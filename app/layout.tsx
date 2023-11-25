import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

import Footer from '@/app/components/footer/footer'
import Navbar from '@/app/components/navbar/navbar'
import ModalProvider from '@/providers/modal-provider'

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
