'use client'

import { Search as SearchIcon } from 'lucide-react'
import React, { FC, useState } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

import { getSearchUrl } from '@/app/utils/get-search-url'

interface SearchFormProps {
  hideBorder?: boolean
  query?: string
}
export const SearchForm: FC<SearchFormProps> = ({
  hideBorder = false,
  query,
}) => {
  const router = useRouter()
  const [value, setValue] = useState(query || '')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (value) {
          setValue('')
          router.push(getSearchUrl(encodeURIComponent(value), nanoid()))
        }
      }}
      className="relative flex w-full items-center rounded-2xl bg-white"
    >
      <div className="relative w-full">
        <input
          id="search-bar"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus
          placeholder="How to..."
          maxLength={100}
          className={`mx-6 w-5/6 flex-1 ${hideBorder ? '' : 'border-b'} overflow-hidden text-ellipsis whitespace-nowrap bg-[transparent] py-4 pr-10 text-2xl outline-none focus:border-[#1d1d1b]`}
        />
        {value && (
          <button
            onClick={() => setValue('')}
            className="absolute bottom-0 right-14 top-0 m-4 m-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <button
        type="submit"
        className={`absolute bottom-0 right-3 top-0 m-auto flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors ${
          isFocused
            ? 'bg-black hover:bg-gray-800'
            : 'bg-[#c9c9c6] hover:bg-gray-500'
        }`}
      >
        <SearchIcon size={16} />
      </button>
    </form>
  )
}
