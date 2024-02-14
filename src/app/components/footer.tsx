import { Mails } from "lucide-react";
import { FC } from "react";
import Link from "next/link";
export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">Heurist 🤝 Lepton</div>
      <div className="flex gap-2 justify-center">
        <div>
          <Link
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="mailto:team@heurist.xyz"
          >
            <Mails size={8} />
            Talk to us
          </Link>
        </div>
        <div>If you need a low-cost and performant LLM API!</div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <Link
          className="flex gap-2 items-center hover:text-zinc-950"
          href="https://heurist.xyz"
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
          Heurist Protocol
        </Link>
        {/* <a
          className="hover:text-zinc-950"
          href="https://dashboard.lepton.ai/playground"
        >
          API Playground
        </a> */}

        <Link
          className="flex gap-2 items-center hover:text-zinc-950"
          href="https://twitter.com/heurist-network/gpt-search-web"
          target="_blank"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          Github
        </Link>
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
