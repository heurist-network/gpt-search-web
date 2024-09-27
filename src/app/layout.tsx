import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

import { ReactNode } from 'react'
import Script from 'next/script'

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
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
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
