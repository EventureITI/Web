import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function NavBar() {
  const [searchNavbarKey, setSearchNavbarKey] = useState("");

  const handleSearchNavbarKeyChanges = (key) => {
    setSearchNavbarKey(key);
  };
  const {events}=useContext(appContext)
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
  const filteredSearchNavbarEvents = !searchNavbarKey
  ? events
  : events.filter((event) =>
      event.title.toLowerCase().includes(searchNavbarKey.toLowerCase())
    );
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async () => {
      console.log(searchTerm);
      
      if (searchTerm) {
        try {
          const q = query(
            collection(db, 'events'),
            where('isDeleted', '==', false),
            where('title', '>=', searchTerm.toLowerCase()),
            where('title', '<=', searchTerm.toLowerCase() + '\uf8ff') // Range query for matching search terms
          );
          const querySnapshot = await getDocs(q);
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setSearchResults(prev=>data);
        } catch (error) {
          console.error("Error fetching documents: ", error);
        }
      }
    };
    useEffect(() => {
      handleSearch();
    }, [searchTerm]);
    console.log("results",searchResults);
  return (
    <nav
      className=" border-gray-200 fixed w-full z-30 dark:bg-gray-900 "
      style={{
        background:
          "linear-gradient(180deg, rgba(26, 26, 26, 0.60) 50%, rgba(26, 26, 26, 0.00) 80%, rgba(26, 26, 26, 0.00) 10%)",
      }}
    >
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
        <button onClick={allItems} className=" md:hidden pb-2 mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="stroke-current hover:text-teal-500 text-white"
          >
            <path
              d="M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <a
          onClick={() => navigate("/")}
          className="flex justify-center cursor-pointer items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-main-color hover:text-main-hover mb-2 ">
            Eventure
          </span>
        </a>

        <div
          className={`${
            items ? "block" : "hidden"
          }  absolute w-48 top-14 left-4 md:static md:items-center md:justify-between md:flex md:w-auto md:order-1 md:pl-5 " id="navbar-user`}
        >
          <ul className=" flex flex-col p-2 md:p-0 mt-4 bg-[#292929] md:bg-transparent shadow-md md:shadow-none rounded-lg md:max-lg:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:space-x-6   dark:border-gray-700">
            <li
              onClick={() => navigate("/")}
              className="hover:bg-[#0d9988] rounded-lg md:hover:bg-transparent md:hover:rounded-none"
            >
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white md:hover:text-main-hover "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li
              onClick={() => navigate("/contact")}
              className="hover:bg-[#0d9988] rounded-lg md:hover:bg-transparent md:hover:rounded-none"
            >
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white rounded md:hover:text-main-hover hover:opacity-100 "
              >
                Hosting an Event?
              </a>
            </li>
            <li className="hover:bg-[#0d9988] rounded-lg md:hover:bg-transparent md:hover:rounded-none">
              <a
                href="#"
                className="block text-sm py-1 px-3 text-white rounded md:hover:text-main-hover hover:opacity-100 "
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
                // onChange={(e) => handleSearchNavbarKeyChanges(e.target.value)}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input focus:outline-main-color focus:outline-offset-0 text-white text-sm pb-1 h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)]"
              />
              <button className="absolute right-3 bottom-2 hover:scale-110">
                <img src="/images/Search.svg" alt="searchIcon" />
              </button>
            </div>
            {/* search dropdown */}
            <div className="flex justify-center">
              {searchTerm && (
                <div className="block absolute text-white font-Inter bg-input md:w-96 z-50 my-1 rounded-lg px-2 py-2">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((event, index) => {
                        return (
                          <div key={index} className="py-2 px-2 cursor-pointer" onClick={()=>navigate(`/event-details/${event.id}`)}>
                            <div className="flex items-center gap-2 capitalize">
                              <img className="w-10" src={event.imgUrl} alt="" />
                              {event.title}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center">
                        There is no events with this title
                      </div>
                    </>
                  )}
                </div>
              )}
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
                    alt="profile img"
                    src="/images/carbon_user-avatar-filled.svg"
                  />
                </div>
              </div>
              {profile && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-white bg-input rounded-lg z-[1] mt-3 w-44 p-2 shadow"
                >
                  <li
                    onClick={() => navigate("/edit-profile")}
                    className="hover:bg-[#0d9988] rounded-md"
                  >
                    <a>Edit Profile</a>
                  </li>
                  <li className="hover:bg-[#0d9988] rounded-lg">
                    <a>Your Bookings</a>
                  </li>
                  <li
                    onClick={() => navigate("/login")}
                    className="hover:bg-[#0d9988] rounded-lg"
                  >
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
