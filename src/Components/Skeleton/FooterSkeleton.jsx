import React from 'react'

export default function FooterSkeleton() {
  return (
    <div
      className="w-full py-6"
      style={{
        backgroundColor: "#1A1A1A",
        borderTop: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="sm:container sm:mx-auto px-4 flex justify-center md:justify-between">
        <div className="hidden md:flex md:flex-col md:justify-between">
          <div>
            <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-80 mb-4"></div>
            <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-72 mb-4"></div>
          </div>
          <div
            className="flex justify-between w-56 text-xs text-zinc-500 mt-16"
          >
            <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-32 mb-4 mr-10"></div>
            <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-32 mb-4"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-36 md:h-auto md:items-end text-gray-300 pl-7 ">
          <div className="flex text-sm pt-1 lg:text-base">
          <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-20 mb-4 mr-5"></div>
          <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-20 mb-4 mr-5"></div>
          <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-20 mb-4"></div>
        </div>
          <div className="flex justify-between w-40 lg:w-40 py-5 transition duration-300 ease-in-out">
          <div className="h-10 bg-gray-700 rounded-lg animate-pulse w-10"></div>
          <div className="h-10 bg-gray-700 rounded-lg animate-pulse w-10"></div>
          <div className="h-10 bg-gray-700 rounded-lg animate-pulse w-10"></div>
          </div>
          <div className="h-2.5 bg-gray-700 rounded-full animate-pulse w-20 mb-4"></div>
        </div>
      </div>
    </div>
  )
}
