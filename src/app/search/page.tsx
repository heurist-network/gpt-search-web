'use client'

import { useSearchParams } from 'next/navigation'

import { Result } from '@/app/components/result'
import { SearchForm } from '@/app/components/search-form'
import { Title } from '@/app/components/title'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = decodeURIComponent(searchParams.get('q') || '')
  const rid = decodeURIComponent(searchParams.get('rid') || '')
  console.log('query--', query)
  return (
    <div className="inset-4 mx-auto flex h-min max-w-3xl flex-col justify-center space-y-4 px-4  md:inset-8">
      <div className="m-auto flex w-full items-center justify-center md:w-[640px] ">
        <div className="w-full">
          <SearchForm hideBorder query={query}></SearchForm>
        </div>
      </div>
      <div className="overflow-auto rounded-2xl border border-zinc-200 bg-white bg-opacity-80 px-4 py-6 md:px-8">
        <Title query={query}></Title>
        <Result key={rid} query={query} rid={rid}></Result>
      </div>
    </div>
  )
}
