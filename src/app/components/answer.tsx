import { BookOpenText } from 'lucide-react'
import { FC } from 'react'
import Markdown from 'react-markdown'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/popover'
import { Skeleton } from '@/app/components/skeleton'
import { Wrapper } from '@/app/components/wrapper'
import { Source } from '@/app/interfaces/source'

export const Answer: FC<{ markdown: string; sources: Source[] }> = ({
  markdown,
  sources,
}) => {
  return (
    <Wrapper
      title={<>Answer</>}
      content={
        markdown ? (
          <div className="prose prose-sm max-w-full text-base">
            <Markdown
              components={{
                a: ({ node: _, ...props }) => {
                  if (!props.href) return <></>
                  const source = sources[+props.href - 1]
                  if (!source) return <></>
                  return (
                    <span className="inline-block w-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <span
                            title={source.name}
                            className="inline-block h-6 w-6 origin-top-left scale-[60%] transform cursor-pointer rounded-full bg-zinc-300 text-center font-medium no-underline hover:bg-zinc-400"
                          >
                            {props.href}
                          </span>
                        </PopoverTrigger>
                        <PopoverContent
                          align={'start'}
                          className="flex max-w-screen-md flex-col border bg-white text-xs shadow-transparent"
                        >
                          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[14px]/[22px] font-medium">
                            {source.name}
                          </div>
                          <div className="flex gap-4">
                            {source.primaryImageOfPage?.thumbnailUrl && (
                              <div className="flex-none">
                                <img
                                  className="h-16 w-16 rounded"
                                  width={source.primaryImageOfPage?.width}
                                  height={source.primaryImageOfPage?.height}
                                  src={source.primaryImageOfPage?.thumbnailUrl}
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <div className="line-clamp-4 break-words text-[14px]/[18px] text-zinc-500">
                                {source.snippet}
                              </div>
                            </div>
                          </div>

                          <hr className="my-3 w-full border-t border-gray-200" />
                          <div className="flex items-center text-[14px]/[18px]">
                            <div className="flex-1 overflow-hidden">
                              <div className=" text-blue-500">
                                <a
                                  title={source.name}
                                  href={source.url}
                                  target="_blank"
                                  className="flex items-center"
                                >
                                  <img
                                    className="mr-1 h-3 w-3"
                                    alt={source.url}
                                    src={`https://www.google.com/s2/favicons?domain=${source.url}&sz=${16}`}
                                  />
                                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[14px]/[24px]">
                                    {source.url}
                                  </span>
                                  <div className="flex items-center justify-center">
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
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </span>
                  )
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 max-w-sm bg-zinc-200"></Skeleton>
            <Skeleton className="h-4 max-w-lg bg-zinc-200"></Skeleton>
            <Skeleton className="h-4 max-w-2xl bg-zinc-200"></Skeleton>
            <Skeleton className="h-4 max-w-lg bg-zinc-200"></Skeleton>
            <Skeleton className="h-4 max-w-xl bg-zinc-200"></Skeleton>
          </div>
        )
      }
    ></Wrapper>
  )
}
