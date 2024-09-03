import React from "react";

export default function NavBarSkeleton() {
  return (
    <nav
      className=" border-gray-200 fixed w-full z-30 dark:bg-gray-900 "
      style={{
        background:
          "linear-gradient(180deg, rgba(26, 26, 26, 0.60) 50%, rgba(26, 26, 26, 0.00) 80%, rgba(26, 26, 26, 0.00) 10%)",
      }}
    >
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        
        <a className="flex justify-center cursor-pointer items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#0d9988] mb-2 ">
            Eventure
          </span>
        </a>

        <div
          className={`absolute w-48 top-14 left-4 md:static md:items-center md:justify-between md:flex md:w-auto md:order-1 md:pl-5 " id="navbar-user`}
        ></div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div>
            {/* SearchBar */}
            <div className="hidden form-control md:flex md:mr-20 lg:mr-28 xl:mr-44 relative lg:w-72 ">
              <div
                className="input text-white text-sm pb-1 animate-pulse h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)]"
              />

            </div>
          </div>
          <div>
            <div>
              <div className="btn btn-ghost cursor-default btn-circle avatar">
                <div className="w-10 rounded-full bg-[#d2d5db] opacity-40 animate-pulse">
              </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
