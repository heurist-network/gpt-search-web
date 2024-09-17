import { BookText } from 'lucide-react'
import { FC } from 'react'

import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Source } from '@/app/interfaces/source'

const SourceItem: FC<{ source: Source; index: number }> = ({
  source,
  index,
}) => {
  const { id, name, url } = source
  const domain = new URL(url).hostname
  return (
    <div
      className="relative flex flex-col gap-2 rounded-lg pr-6 text-xs transition duration-300 ease-in-out hover:bg-white"
      key={id}
    >
      <a href={url} target="_blank" className="px-3 py-3">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap break-words text-[14px]/[22px] font-medium text-zinc-950">
          {index + 1}. {name}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-none items-center">
            <img
              className="h-4 w-4"
              alt={domain}
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=${16}`}
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap break-all text-[14px]/[18px] text-zinc-400">
              {domain}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-2 top-0 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5L4 12"
              stroke="#A7A6A1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 4L11.95 4.049L12 11"
              stroke="#A7A6A1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  )
}

export const Sources: FC<{ sources: Source[] }> = ({ sources }) => {
  return (
    <Wrapper
      title={<>Sources · {sources.length}</>}
      content={
        <div className="grid grid-cols-2 gap-2 ">
          {sources.length > 0 ? (
            sources.map((item, index) => (
              <SourceItem
                key={item.id}
                index={index}
                source={item}
              ></SourceItem>
            ))
          ) : (
            <>
              <Skeleton className="h-16 max-w-sm bg-zinc-200/80"></Skeleton>
              <Skeleton className="h-16 max-w-sm bg-zinc-200/80"></Skeleton>
              <Skeleton className="h-16 max-w-sm bg-zinc-200/80"></Skeleton>
              <Skeleton className="h-16 max-w-sm bg-zinc-200/80"></Skeleton>
            </>
          )}
        </div>
      }
    ></Wrapper>
  )
}
