import React, { FC } from 'react'
import Image from 'next/image'

export const Logo: FC = () => {
  return (
    <div className="relative flex cursor-default select-none items-center justify-center gap-4">
      {/* <div className="h-10 w-10">
        <Image src="/logo.svg" width="35" height="40" alt="Logo" />
      </div> */}
      <div className="relative text-center text-[32px]/[40px] font-bold text-zinc-950 md:text-nowrap">
        What can I do for you today?
      </div>
      {/* <div className="origin-left scale-75 transform items-center rounded-lg border bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div> */}
    </div>
  )
}
