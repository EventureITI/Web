import React, { useState } from "react";
import { SearchSharp } from "react-ionicons";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [profile, setProfile] = useState(false);
  const [items, setItems] = useState(false);
  const navigate = useNavigate();

  function allItems() {
    setItems(!items);
    setProfile(false);
  }

  function profileBtn() {
    setProfile(!profile);
    setItems(false);
  }

  return (
    <nav
      className=" border-gray-200 fixed w-full z-30 dark:bg-gray-900 "
      style={{
        background:
          "linear-gradient(180deg, rgba(26, 26, 26, 0.60) 50%, rgba(26, 26, 26, 0.00) 80%, rgba(26, 26, 26, 0.00) 10%)",
      }}
    >
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        <button onClick={allItems} className=" md:hidden pb-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="stroke-current hover:text-teal-500 text-white"
          >
            <path
              d="M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <a
          onClick={() => navigate("/")}
          className="flex justify-center cursor-pointer items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-teal-500 mb-2">
            Eventure
          </span>
        </a>

        <div
          className={`${
            items ? "block" : "hidden"
          } absolute w-48 top-14 left-4 md:static md:items-center md:justify-between md:flex md:w-auto md:order-1 md:pl-5 " id="navbar-user`}
        >
          <ul className="flex flex-col p-2 md:p-0 mt-4 bg-[#292929] md:bg-transparent shadow-md md:shadow-none rounded-lg md:max-lg:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:space-x-6   dark:border-gray-700">
            <li onClick={() => navigate("/")}>
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white hover:text-teal-500 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li onClick={() => navigate("/contact")}>
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white rounded hover:text-teal-500 hover:opacity-100 "
              >
                Hosting an Event?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white rounded hover:text-teal-500 hover:opacity-100 "
              >
                About
              </a>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div>
            {/* SearchBar */}
            <div className="hidden form-control md:flex md:mr-20 lg:mr-28 xl:mr-44 relative lg:w-72 ">
              <input
                type="text"
                placeholder="Search"
                className="input text-white text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
              />
              <button className="absolute right-3 top-1.5">
                <SearchSharp color={"#FFFFFF"} height="20px" width="20px" />
              </button>
            </div>
          </div>
          <div>
            {/* <!-- Dropdown menu --> */}
            <div className="dropdown dropdown-end">
              <div
                onClick={profileBtn}
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              {profile && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-white bg-[#292929] rounded-lg z-[1] mt-3 w-44 p-2 shadow"
                >
                  <li onClick={() => navigate("/editProfile")}>
                    <a>Edit Profile</a>
                  </li>
                  <li>
                    <a>Your Bookings</a>
                  </li>
                  <li onClick={() => navigate("/login")}>
                    <a>Login</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
