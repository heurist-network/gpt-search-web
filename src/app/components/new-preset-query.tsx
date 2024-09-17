import React, { FC, useMemo } from 'react'
import { nanoid } from 'nanoid'
import Link from 'next/link'

import { getSearchUrl } from '@/app/utils/get-search-url'

export const PresetQuery: FC<{ query: string }> = ({ query }) => {
  const rid = useMemo(() => nanoid(), [query])

  return (
    <Link
      prefetch={false}
      title={query}
      href={getSearchUrl(query, rid)}
      className="flex h-[26px] items-center space-x-1 rounded-full border border-[#c9c9c6] bg-white px-4 py-2"
    >
      {query}
    </Link>
  )
}
