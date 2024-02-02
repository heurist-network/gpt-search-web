import React, { FC } from "react";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <div className="h-10 w-10">
        <Image src="/logo.svg" width="35" height="40" alt="Logo" />
      </div>
      <div className="text-center font-medium text-2xl md:text-3xl text-zinc-950 relative text-nowrap">
        Heurist Search
      </div>
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
