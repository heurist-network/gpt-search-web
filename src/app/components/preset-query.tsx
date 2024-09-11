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
      className="items-center overflow-hidden text-ellipsis text-nowrap rounded-lg  px-2 py-1 text-base font-normal text-zinc-600 hover:bg-white hover:text-zinc-950"
    >
      {query}
    </Link>
  )
}
