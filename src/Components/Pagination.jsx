import React from "react";

export default function Pagination() {
  return (
    <div>
      <nav className="flex items-center gap-x-1 " aria-label="Pagination">
        <button
          type="button"
          className="mr-5 transition duration-300 ease-in-out min-h-[38px] min-w-[38px] py-2 px-1 sm:px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Previous"
        >
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="min-h-[38px] transition duration-300 ease-in-out min-w-[38px] flex justify-center items-center bg-teal-500 text-white py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="min-h-[38px] transition duration-300 ease-in-out min-w-[38px] flex justify-center items-center text-white hover:bg-teal-500 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            2
          </button>
          <button
            type="button"
            className="min-h-[38px] transition duration-300 ease-in-out min-w-[38px] flex justify-center items-center text-white hover:bg-teal-500 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            3
          </button>
          {/* <div className="hs-tooltip inline-block">
            <button
              type="button"
              className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-teal-400 p-2 text-sm rounded-lg focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="group-hover:hidden text-xs">•••</span>
              <svg
                className="group-hover:block hidden shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path>
              </svg>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                role="tooltip"
              >
                Next 4 pages
              </span>
            </button>
          </div> */}
          <button
            type="button"
            className="min-h-[38px] transition duration-300 ease-in-out min-w-[38px] flex justify-center items-center text-white hover:bg-teal-500 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            4
          </button>
        </div>
        <button
          type="button"
          className="ml-5 min-h-[38px] transition duration-300 ease-in-out min-w-[38px] py-2 px-1 sm:px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Next"
        >
          Next
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}
