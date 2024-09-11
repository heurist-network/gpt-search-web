import { MessageSquareQuote } from 'lucide-react'
import React, { FC } from 'react'

import { PresetQuery } from '@/app/components/preset-query'
import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Relate } from '@/app/interfaces/relate'

export const Relates: FC<{ relates: Relate[] | null }> = ({ relates }) => {
  return (
    <Wrapper
      title={<>Related · {relates && relates.length}</>}
      content={
        <div className="flex flex-col gap-2">
          {relates !== null ? (
            relates.length > 0 ? (
              relates.map(({ question }) => (
                <PresetQuery key={question} query={question}></PresetQuery>
              ))
            ) : (
              <div className="text-sm">No related questions.</div>
            )
          ) : (
            <>
              <Skeleton className="h-5 w-full bg-zinc-200/80"></Skeleton>
              <Skeleton className="h-5 w-full bg-zinc-200/80"></Skeleton>
              <Skeleton className="h-5 w-full bg-zinc-200/80"></Skeleton>
            </>
          )}
        </div>
      }
    ></Wrapper>
  )
}
