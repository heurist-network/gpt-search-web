import { Mails } from "lucide-react";
import { FC } from "react";
import Link from "next/link";
export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">Heurist🤝Lepton</div>
      <div className="flex gap-2 justify-center">
        <div>
          <Link
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="mailto:info@lepton.ai"
          >
            <Mails size={8} />
            Talk to us
          </Link>
        </div>
        <div>if you need a performant and scalable AI cloud!</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <Link
          className="flex gap-2 items-center hover:text-zinc-950"
          href="https://www.lepton.ai/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-external-link "
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" x2="21" y1="14" y2="3"></line>
          </svg>
          Lepton AI
        </Link>
        {/* <a
          className="hover:text-zinc-950"
          href="https://dashboard.lepton.ai/playground"
        >
          API Playground
        </a>
        <a
          className="hover:text-zinc-950"
          href="https://github.com/leptonai/leptonai"
        >
          Python Library
        </a> */}
        <Link
          className="flex gap-2 items-center hover:text-zinc-950"
          href="https://twitter.com/heurist_ai"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
          Twitter
        </Link>
        {/* <a className="hover:text-zinc-950" href="https://leptonai.medium.com/">
          Blog
        </a> */}
      </div>
    </div>
  );
};
