import React, { useContext, useEffect, useState } from "react";
import CategoryBtn from "../Components/CategoryBtn";
import EventCard from "../Components/Home/EventCard";
import Pagination from "../Components/Pagination";
import BackTop from "../Components/BackTop";
import { appContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import generateArrayFromNumber from "../utils/generateArrayFromNumber";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export default function EventsPage() {
  // const [currentPage, setCurrentPage] = useState(1);
  const { categories } = useContext(appContext);
  // const { events, categories } = useContext(appContext);
  const { category } = useParams();
  console.log(category);

  // const [filteredSearch, setFilteredSearch] = useState(events);
  // const [searchWord, SetSearchWord] = useState("");
  // const [categorizedEvents, setCategorizedEvents] = useState([]);
  // const categorizedEvents =
  //   category === "all"
  //     ? filteredSearch.sort(
  //         (a, b) => new Date(a.startDate) - new Date(b.startDate)
  //       )
  //     : filteredSearch.filter(
  //         (e) =>
  //           e.categoryId === categories.find((cat) => cat.name === category).id
  //       );

  // const filteredSearchEvents = !searchWord
  //   ? categorizedEvents
  //   : categorizedEvents.filter((event) =>
  //       event.title.toLowerCase().includes(searchWord.toLowerCase())
  //     );

  // const pageSize = 6;
  // const pages = generateArrayFromNumber(
  //   Math.ceil(filteredSearchEvents.length / pageSize)
  // );
  // console.log(pages);

  // const pageToStart = (currentPage - 1) * pageSize;
  // console.log(pageToStart);

  // const paginatedEvents = filteredSearchEvents.slice(
  //   pageToStart,
  //   pageToStart + pageSize
  // );

  // In-page Search
  // function searchEvents(e) {
  //   SetSearchWord(e.target.value);
  // }

  // useEffect(() => {
  //   const data = events.filter((e) =>
  //     e.title?.toLowerCase().includes(searchWord?.toLowerCase())
  //   );
  //   setFilteredSearch(data);
  //   console.log(filteredSearch);
  // }, [searchWord, events]);

  // useEffect(() => {
  //   const getEventsByCategory = async () => {
  //     try {
  //       const categoryId = categories.find((cat) => cat.name === category).id;
  //       const q = query(
  //         collection(db, "events"),
  //         where("categoryId", "==", categoryId),
  //         where("isDeleted", "==", false)
  //       );
  //       const data = onSnapshot(q, (QuerySnapshot) => {
  //         let eventsArr = [];
  //         QuerySnapshot.forEach((doc) => {
  //           eventsArr.push({ ...doc.data(), id: doc.id });
  //         });
  //         console.log(eventsArr);
  //         setCategorizedEvents(eventsArr);
  //       });
  //       return () => data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const getAllEvents = async () => {
  //     try {
  //       const q = query(
  //         collection(db, "events"),
  //         where("isDeleted", "==", false)
  //       );
  //       const data = onSnapshot(q, (QuerySnapshot) => {
  //         let eventsArr = [];
  //         QuerySnapshot.forEach((doc) => {
  //           eventsArr.push({ ...doc.data(), id: doc.id });
  //         });
  //         console.log(eventsArr);
  //         setCategorizedEvents(eventsArr);
  //       });
  //       return () => data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (category === "all") {
  //     getAllEvents();
  //   } else {
  //     getEventsByCategory();
  //   }
  // }, [category]);

  // const handleChangePage = (page) => {
  //   setCurrentPage(page);
  // };
  // const handelPaginationNextBtn = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  // const handelPaginationPrevBtn = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  // console.log(filteredSearch);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleCategoryAndSearch = async () => {
    try {
      let searchQuery = collection(db, "events");

      // Add filters to the query
      if (searchTerm) {
        searchQuery = query(
          searchQuery,
          // where("isDeleted", "==", false),
          where("title", ">=", searchTerm),
          where("title", "<=", searchTerm + "\uf8ff")
        );
      }
      if (category == "all") {
        searchQuery = query(searchQuery, where("isDeleted", "==", false));
      } else {
        console.log(categories);
        console.log(category);
        const categoryId = categories.find((cat) => cat.name === category).id;
        searchQuery = query(
          searchQuery,
          where("categoryId", "==", categoryId),
          where("isDeleted", "==", false)
        );
      }
      const querySnapshot = await getDocs(searchQuery);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };
  useEffect(() => {
    handleCategoryAndSearch();
  }, [searchTerm, category]);
  console.log(searchResults);
  // console.log(categorizedEvents);

  return (
    <div className="w-full bg-bg-main min-h-screen relative">
      <div className="md:container md:mx-auto mx-8 md:px-4 pt-28">
        <div className="flex flex-col items-center">
          {/* In-page Search */}
          <div className="flex w-full form-control md:hidden relative mb-4 ">
            <input
              // onChange={(e) => handleSearchEventsKeyChanges(e.target.value)}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              // onChange={searchEvents}
              type="text"
              placeholder="Search"
              className="input text-white focus:outline-main-color focus:outline-offset-0 text-sm pb-1 input-bordered h-8 rounded-lg  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
            />
            <button className="absolute right-4 bottom-2 ">
              <img src="/images/Search.svg" alt="searchIcon" />
            </button>
          </div>
          <div className="w-full flex gap-5 items-center mb-7 overflow-x-auto">
            <div>
              <CategoryBtn category={"All"} path={"/events-page/all"} />
            </div>
            {categories.map((cat) => (
              <div
                key={cat.id}
                // onClick={() => {
                //   setCurrentPage(1);
                // }}
              >
                <CategoryBtn
                  category={cat.name}
                  path={`/events-page/${cat.name}`}
                />
              </div>
            ))}
          </div>
          {/* Searched Events */}
          <div
            className={`grid grid-cols-1 gap-5 mb-5 2xl:grid-cols-4
                ${
                  searchResults.length > 0
                    ? "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                    : "sm:w-full"
                } `}
          >
            {searchResults.length > 0 ? (
              <>
                {searchResults.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </>
            ) : (
              <h2 className="text-white font-Inter font-400 text-center flex justify-center my-20 ">
                No Events
              </h2>
            )}
          </div>
        </div>
        {/* Search */}
      </div>
      <div className="py-10 flex justify-center">
        {/* <Pagination
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          pages={pages}
          handelPaginationNextBtn={handelPaginationNextBtn}
          handelPaginationPrevBtn={handelPaginationPrevBtn}
        /> */}
      </div>
      <BackTop />
    </div>
  );
}
