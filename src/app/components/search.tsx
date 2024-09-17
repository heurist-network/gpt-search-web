'use client'

import React, { FC, useState } from 'react'

import { PresetQuery } from '@/app/components/new-preset-query'
import { SearchForm } from '@/app/components/search-form'

export const Search: FC = () => {
  return (
    <div className=" rounded-2xl  bg-gray-100 md:w-[640px]">
      {' '}
      <div className="flex h-[88px] items-center rounded-2xl bg-white">
        <SearchForm />
      </div>
      <div className="flex flex-col space-x-0 space-y-2 px-6 py-3 text-[12px]/[18px] md:flex-row md:space-x-2 md:space-y-0">
        {' '}
        <PresetQuery query="What is stablecoin?" />
        <PresetQuery query="How to farm crypto airdrops?" />
      </div>
    </div>
  )
}
