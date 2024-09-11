'use client'

import React, { FC, useState } from 'react'

import { PresetQuery } from '@/app/components/new-preset-query'
import { SearchForm } from '@/app/components/search-form'

export const Search: FC = () => {
  return (
    <div className="w-[640px] rounded-2xl bg-gray-100">
      {' '}
      {/* 外部灰色容器 */}
      <div className="flex h-[88px] items-center rounded-2xl bg-white">
        <SearchForm />
      </div>
      <div className="flex space-x-2 px-6 py-3 text-[12px]/[18px]">
        {' '}
        {/* 推荐搜索项容器 */}
        <PresetQuery query="How to invest in Bitcoin ETF?" />
        <PresetQuery query="Who is the CEO of Binance?" />
      </div>
    </div>
  )
}
