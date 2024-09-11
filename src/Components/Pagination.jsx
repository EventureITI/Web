import React, { useContext } from "react";
import { appContext } from "../context/AppContext";

export default function Pagination({
  currentPage,
  handleChangePage,
  pages,
  handelPaginationNextBtn,
  handelPaginationPrevBtn,
}) {
  console.log(currentPage);
  console.log(pages.length);

  if (pages.length <= 1) return null;
  return (
    <div>
      <nav className="flex items-center gap-x-1 " aria-label="Pagination">
        <button
          onClick={handelPaginationPrevBtn}
          type="button"
          disabled={currentPage === 1}
          className={
            " mr-5 transition duration-300 ease-in-out min-h-[38px] min-w-[38px] py-2 px-1 sm:px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          }
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
          {pages.map((page) => (
            <span
              key={page}
              type="button"
              disabled={true}
              // onClick={() => handleChangePage(page)}
              className={
                "min-h-[38px] transition duration-300 ease-in-out min-w-[38px] flex justify-center items-center text-white py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none " +
                (currentPage === page ? "bg-teal-500" : "")
              }
            >
              {page}
            </span>
          ))}
        </div>
        <button
          onClick={handelPaginationNextBtn}
          type="button"
          disabled={currentPage === pages.length}
          className={
            " ml-5 min-h-[38px] transition duration-300 ease-in-out min-w-[38px] py-2 px-1 sm:px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          }
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
