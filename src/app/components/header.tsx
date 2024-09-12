import React from 'react'
import Image from 'next/image'

// import SearchLogo from '@/public/search.svg'
const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-4 py-0 sm:px-6">
      <nav className="flex items-center justify-between ">
        <div className="flex h-14 items-center text-3xl font-bold text-gray-900">
          <a href="/" className="flex items-center">
            <Image
              src="/search-logo.svg"
              alt="Search"
              width={194}
              height={24}
              className="inline-block"
            />
          </a>
          <div className="flex hidden items-center md:block">
            <span className="mx-6 h-4 border-l border-gray-300"></span>
            <a
              href="https://heurist.ai/portal"
              target="_blank"
              className="flex items-center text-base font-normal"
            >
              Heurist Portal
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 4L11.95 4.049L12 11"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden items-center text-sm md:flex">
          <span>If you need a low-cost and performant LLM API!</span>
          <a
            href="https://dev-api-form.heurist.ai/"
            target="_blank"
            className="ml-2 flex flex-nowrap items-center rounded-full bg-black px-4 py-1 pr-1 text-white"
          >
            Get an API Key
            <span className="ml-2 rounded-full bg-white p-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 4L11.95 4.049L12 11"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>

          <span className="mx-6 h-4 border-l border-gray-300"></span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/heurist-network/gpt-search-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.4 5.9C4 7.4 3 9.5 3 12.2C3 14.2 3.7 16.1 4.8 17.6C6.1 19.3 8 20.3 9 20.7V20C9 20 9 18.4 9.9 17C7.9 16.9 6.3 15 6.3 12.8C6.3 12 6.6 11.3 7.1 10.7L7.2 8.8C7.2 8.3 7.7 8 8.2 8.1L10.3 8.9C10.9 8.8 11.5 8.7 12.2 8.7C12.9 8.7 13.5 8.8 14.1 8.9L15.9 8C16.4 7.8 16.9 8.2 16.9 8.7L17 10.6C17.5 11.2 17.8 12 17.8 12.7C17.8 14.9 16.2 16.7 14.2 16.9C15.1 18.3 15.1 19.9 15.1 19.9V20.6C16.1 20.2 18 19.2 19.3 17.5C20.4 16.1 21.1 14.1 21.1 12.1C21.1 9.4 20.1 7.3 18.7 5.8C16.8 3.9 14.2 3 12 3C9.8 3 7.2 3.9 5.4 5.9Z"
                  fill="#1D1D1B"
                />
              </svg>
            </a>
            <a
              href="https://x.com/heurist_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.0439 4L9.99421 12.8261L3 20H4.575L10.6966 13.7173L15.6439 20H21L13.6601 10.6788L20.1686 4H18.5963L12.9576 9.78502L8.40274 4H3.0439ZM5.35976 5.09967H7.82104L18.6869 18.8977H16.2256L5.35976 5.09967Z"
                  fill="#1D1D1B"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
