import React, { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className=" flex mt-4 relative w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center">
          Portfolio
        </div>

        <div className="flex items-center gap-1 md:order-4">
          {/* <a className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
            Book a call
          </a> */}

          <div className="md:hidden">
            {/* Toggle Button */}
            <button
              type="button"
              className="flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-expanded={!isCollapsed}
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation"
              onClick={toggleCollapse}
            >
              {isCollapsed ? (
                <svg
                  className="shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          id="navbar-collapse"
          className={`${isCollapsed ? 'hidden' : ''} md:flex overflow-hidden transition-all duration-300 basis-full grow`}
          aria-labelledby="navbar-collapse"
        >
          {/* ------------- FLEX WRAPPER ------------- */}
          <div className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 py-2 md:py-0 w-full">

            {/* --------- LINKS (center on md+) --------- */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 md:mx-auto">
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 hover:text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
                href="index.html"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400"
                href="work.html"
              >
                Work
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400"
                href="reviews.html"
              >
                Reviews
              </a>
            </div>

            {/* --------- RESUME BUTTON (right) --------- */}
          </div>
            <button
              type="button"
              className="flex items-center justify-center rounded bg-neutral-100 w-full md:w-auto my-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-black/30 dark:hover:bg-neutral-700 md:ml-auto"
            >
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Resume
            </button>
        </div>
      </nav>
    </header>
  );
}
