import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import NavBtns from "./NavBtns";
import { AuthDetails } from "../context/Authentication/AuthDetailsContext";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase-config";

export default function NavBar() {
  const [searchNavbarKey, setSearchNavbarKey] = useState("");
  const { auther } = useContext(AuthDetails);
  const [userImg, setUserImg] = useState();
  const [role, setRole] = useState();
  const [name, setName] = useState();
  const { events } = useContext(appContext);
  const [profile, setProfile] = useState(false);
  const [items, setItems] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const menuRef = useRef();
  const pathRef = useRef();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      const data = await getDocs(collection(db, "user"));
      setLoading(false)
      const userData = data.docs.map((doc) => ({ ...doc.data() }));
      const userInfo = userData.filter(
        (e) => e.email == auth.currentUser?.email
      );
      if(userInfo[0]?.imgURL == ""){
        setUserImg("/images/carbon_user-avatar-filled.svg")
      }else{
        setUserImg(userInfo[0]?.imgURL);
      }
      setRole(userInfo[0]?.role);
      setName(userInfo[0]?.firstName + " " + userInfo[0]?.lastName);
    };
    setData();
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/");

      toast.success("Logged out Successfully", {
        icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
        progressStyle: { background: "white" },
        style: { backgroundColor: "#00796B", color: "white" },
      });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong, try again later", {
        icon: <img src="/images/carbon_user-avatar-filled.svg"></img>,
        progressStyle: { background: "white" },
        style: {
          backgroundColor: "#891a1a",
          color: "white",
          fontSize: "14px",
        },
      });
    }
  }

  window.addEventListener("click", (e) => {
    if (e.target == menuRef.current || e.target == pathRef.current) {
      setItems(true);
    } else {
      setItems(false);
    }
  });

  function allItems() {
    setItems(!items);
    setProfile(false);
  }

  function profileBtn() {
    setProfile(!profile);
    setItems(false);
  }

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const q = query(
          collection(db, "events"),
          where("isDeleted", "==", false),
          where("title", ">=", searchTerm.toLowerCase()),
          where("title", "<=", searchTerm.toLowerCase() + "\uf8ff") // Range query for matching search terms
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSearchResults((prev) => data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  if(loading){
    return (<div></div>)
  }

  return (
    <>
      {role == "admin" ? (
        <nav
          className=" border-gray-200 fixed w-full z-30 dark:bg-gray-900 "
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 26, 26, 0.60) 50%, rgba(26, 26, 26, 0.00) 80%, rgba(26, 26, 26, 0.00) 10%)",
          }}
        >
          <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
            <a
              onClick={() => navigate("/admin")}
              className="flex justify-center cursor-pointer items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-main-color hover:text-main-hover mb-2 ">
                Eventure
              </span>
            </a>

            <div className="flex ">
              <div className="hidden sm:flex items-center mr-10 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <p className="text-white font-Inter font-400"> {name}</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-white flex justify-center items-center bg-sec-color bg-opacity-50 border-[1px] border-main-color hover:bg-main-color hover:bg-opacity-80 transition-all duration-300 ease-in-out font-medium rounded-lg text-sm px-3 py-2 text-center "
                >
                  <img
                    className="w-5 mr-3"
                    src="/images/carbon_user-avatar-filled.svg"
                    alt="loginIcon"
                  />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
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
                ref={menuRef}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-current hover:text-teal-500 text-white"
              >
                <path
                  ref={pathRef}
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
                <NavBtns path={"/"} text={"Home"} />
                <NavBtns path={"/contact"} text={"Hosting an Event?"} />
                <NavBtns path={"/events-page"} text={"About"} />
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
                              <div
                                key={index}
                                className="py-2 px-2 cursor-pointer"
                                onClick={() =>
                                  navigate(`/event-details/${event.id}`)
                                }
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    className="w-10"
                                    src={event.imgUrl}
                                    alt=""
                                  />
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
                {!auther ? (
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-white flex justify-center items-center bg-sec-color bg-opacity-50 border-[1px] border-main-color hover:bg-main-color hover:bg-opacity-80 transition-all duration-300 ease-in-out font-medium rounded-lg text-sm px-3 py-2 text-center "
                  >
                    <img
                      className="w-5 mr-3"
                      src="/images/carbon_user-avatar-filled.svg"
                      alt="loginIcon"
                    />
                    Login
                  </button>
                ) : null}
                {/* <!-- Dropdown menu --> */}
                {auther ? (
                  <div className="dropdown dropdown-end">
                    <div
                      onClick={profileBtn}
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img alt="profile img" src={loading? "/images/carbon_user-avatar-filled.svg":userImg} />
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
                        <li
                          onClick={() => navigate("/profile")}
                          className="hover:bg-[#0d9988] rounded-lg"
                        >
                          <p>Your Bookings</p>
                        </li>
                        <li
                          onClick={handleLogout}
                          className="hover:bg-[#0d9988] rounded-lg"
                        >
                          <a>Logout</a>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
