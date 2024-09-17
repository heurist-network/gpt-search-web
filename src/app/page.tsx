'use client'

import React from 'react'

import { Logo } from '@/app/components/logo'
import { Search } from '@/app/components/search'

export default function Home() {
  return (
    <div className=" inset-0 flex  min-h-screen items-center justify-center">
      <div className="relative -mt-24 flex flex-col gap-6 px-4">
        <Logo></Logo>
        <Search></Search>
      </div>
    </div>
  )
}
