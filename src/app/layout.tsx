import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

import { ReactNode } from 'react'
import Image from 'next/image'

// 删除这行
// import Bg from './bg.jpg'

import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heurist Search',

  description:
    'AI-based search engine powered by Heurist LLM API\n Deployed on Lepton',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {!!(process.env.UMAMI_URL && process.env.UMAMI_WEBSITE_ID) && (
        <script
          async
          src={process.env.UMAMI_URL}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      )}
      <body className={inter.className}>
        <Header />
        <div className="fixed inset-0 z-[-1]">
          {/* 背景图片 */}
          <div className="flex h-screen items-center justify-center">
            <img
              src="/bg.jpg"
              alt="Background"
              className=" inset-0 bottom-0 bottom-0 left-0 right-0 top-0 z-[-1] h-full w-full object-cover object-center blur-md"
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
