import React from "react";

export default function DashboardSkeleton() {
  return (
    <>
      <div className="animate-pulse p-10">
        {/* <div className="flex flex-wrap -m-4 justify-center">
          <div  className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="px-4 py-8 bg-[#1D232A] rounded-lg"></div>
          </div>
          <div  className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="px-4 py-8 bg-[#1D232A] rounded-lg"></div>
          </div>
        </div> */}
        <div className="self-stretch md:justify-between md:items-center gap-4 flex flex-col md:flex-row p-10 overflow-x-auto whitespace-nowrap">
          <div className="h-10 bg-[#1D232A] rounded-lg w-32"></div>
          <div className="flex gap-2 md:gap-4 w-full md:justify-end">
            <div className="relative w-[480px] md:w-[346px] flex items-center">
              <div className="h-10 bg-[#1D232A] rounded-lg w-full"></div>
            </div>
            <div className="h-10 bg-[#1D232A] rounded-full sm:rounded-lg w-32"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-4 px-10">
            <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
            <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
            <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
            <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
            <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
            <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
            <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 md:w-2/12 hidden md:table-cell"></div>
            <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2  w-3/12 sm:w-2/12 xl:w-1/12"></div>
          </div>
          <div className="w-full">
            {/* row 1 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 md:w-2/12 hidden md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 2 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 3 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 4 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 5 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 6 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 7 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 8 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 9 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
            {/* row 10 */}
            <div className="flex space-x-4 px-10">
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-8/12 sm:w-7/12 md:w-6/12 lg:w-4/12 xl:w-3/12"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden lg:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 hidden xl:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden lg:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-2/12 xl:w-1/12 hidden sm:table-cell"></div>
              <div className="px-6 h-8 bg-[#1D232A] rounded mb-2 w-1/12 hidden md:w-2/12 md:table-cell"></div>
              <div className="px-4 sm:px-6 h-8 bg-[#1D232A] rounded mb-2 w-3/12 sm:w-2/12 xl:w-1/12 "></div>
              {/* <div className="px-3 h-8 mb-2 w-1/12">
                <div className="justify-center w-full items-center gap-2 flex">
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                  <div className="w-8 h-6 px-2 sm:w-10 sm:h-10 sm:px-2.5  bg-[#1D232A] rounded-lg"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
