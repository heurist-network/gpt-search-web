'use client'

import { RefreshCcw } from 'lucide-react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

import { getSearchUrl } from '@/app/utils/get-search-url'

export const Title = ({ query }: { query: string }) => {
  const router = useRouter()
  return (
    <div className=" flex items-center gap-4 ">
      <div
        className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg text-black sm:text-xl"
        title={query}
      >
        {/* {query} */}
      </div>
      <div className="flex ">
        {/* <button
          onClick={() => {
            router.push(getSearchUrl(encodeURIComponent(query), nanoid()))
          }}
          type="button"
          className="flex items-center gap-2 rounded bg-transparent px-2 py-1 text-xs font-semibold text-[#696963] hover:bg-zinc-100"
        >
          <RefreshCcw size={12}></RefreshCcw>Share
        </button> */}
        <button
          onClick={() => {
            router.push(getSearchUrl(encodeURIComponent(query), nanoid()))
          }}
          type="button"
          className="flex items-center gap-2 rounded bg-transparent px-2 py-1 text-xs font-semibold text-[#696963] hover:bg-zinc-100"
        >
          <RefreshCcw size={12}></RefreshCcw>Regenerate
        </button>
      </div>
    </div>
  )
}
