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
  endBefore,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import CardsSkeleton from "../Components/Skeleton/CardsSkeleton";
const ITEMS_PER_PAGE = 5;

export default function EventsPage() {
  const { categories } = useContext(appContext);
  const { category } = useParams();


  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const handleCategoryAndSearch = async () => {
  //   try {
  //     let searchQuery = collection(db, "events");
  //     // Add filters to the query
  //     if (searchTerm) {
  //       searchQuery = query(
  //         searchQuery,
  //         // where("isDeleted", "==", false),
  //         where("title", ">=", searchTerm.toLowerCase()),
  //         where("title", "<=", searchTerm.toLowerCase() + "\uf8ff")
  //       );
  //     }
  //     if (category == "all") {
  //       searchQuery = query(searchQuery, where("isDeleted", "==", false));
  //     } else {
  //       const categoryId = categories.find((cat) => cat.name === category).id;
  //       searchQuery = query(
  //         searchQuery,
  //         where("categoryId", "==", categoryId),
  //         where("isDeleted", "==", false)
  //       );
  //     }
  //     const querySnapshot = await getDocs(searchQuery);
  //     const data = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error("Error fetching documents: ", error);
  //   }
  // };
  // useEffect(() => {
  //   handleCategoryAndSearch();
  // }, [searchTerm, category]);

  //////////////////////////////////////////////last
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [lastVisible, setLastVisible] = useState(null); // Tracks the last document for pagination
  const [firstVisible, setFirstVisible] = useState(null); // Tracks the first document for previous pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  // Function to get the total number of pages
  const calculateTotalPages = async () => {
    let countQuery = collection(db, "events");
    // Add search term filter
    if (searchTerm) {
      countQuery = query(
        countQuery,
        where("title", ">=", searchTerm.toLowerCase()),
        where("title", "<=", searchTerm.toLowerCase() + "\uf8ff"),
        where("isDeleted", "==", false)
      );
    } // Add category filter
    if (category !== "all") {
      const categoryId = categories.find((cat) => cat.name === category).id;
      countQuery = query(
        countQuery,
        where("categoryId", "==", categoryId),
        where("isDeleted", "==", false)
      );
    } else {
      countQuery = query(countQuery, where("isDeleted", "==", false));
    }
    const totalSnapshot = await getDocs(countQuery);
    const totalDocuments = totalSnapshot.size;
    const totalPages = Math.ceil(totalDocuments / ITEMS_PER_PAGE); // Calculate total pages
    setTotalPages(totalPages);
  };
  const handleCategoryAndSearch = async (direction) => {
    setSkeletonLoading(true);
    try {
      let searchQuery = collection(db, "events");

      // Add search term filter
      if (searchTerm) {
        searchQuery = query(
          searchQuery,
          where("title", ">=", searchTerm.toLowerCase()),
          where("title", "<=", searchTerm.toLowerCase() + "\uf8ff")
        );
      } // Add category filter
      if (category !== "all") {
        const categoryId = categories.find((cat) => cat.name === category).id;
        searchQuery = query(
          searchQuery,
          where("categoryId", "==", categoryId),
          where("isDeleted", "==", false)
        );
      } else {
        searchQuery = query(searchQuery, where("isDeleted", "==", false));
      }
      // Pagination logic
      searchQuery = query(searchQuery, orderBy("title"), limit(ITEMS_PER_PAGE));

      if (direction === "next" && lastVisible) {
        searchQuery = query(searchQuery, startAfter(lastVisible));
      } else if (direction === "prev" && firstVisible) {
        searchQuery = query(searchQuery, endBefore(firstVisible));
      }

      const querySnapshot = await getDocs(searchQuery);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSearchResults(data);
      setSkeletonLoading(false);
      setFirstVisible(querySnapshot.docs[0]);

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);

    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };
  const handleNextPage = async () => {
    setSkeletonLoading(true);
    if (page < totalPages) {
      await handleCategoryAndSearch("next");
      setPage(page + 1);
    }
  };

  const handleChangePage = (page) => {
    setPage(page);
  };
  const handlePrevPage = async () => {
    setSkeletonLoading(true);
    // if (page > 1) {
    //   await fetchResults("prev");
    //   setPage(page - 1);
    // }
    if (page > 1) {
      await handleCategoryAndSearch("prev");
      setPage(1);
    }
  };
  useEffect(() => {
    setPage(1); // Reset to first page on search/category change
    calculateTotalPages(); // Calculate total pages on search or category change
    handleCategoryAndSearch();
  }, [searchTerm, category]);
  const pageNumbers = generateArrayFromNumber(totalPages);
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
          {skeletonLoading ? (
            <CardsSkeleton />
          ) : (
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
          )}
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <Pagination
          currentPage={page}
          handleChangePage={handleChangePage}
          pages={pageNumbers}
          handelPaginationNextBtn={handleNextPage}
          handelPaginationPrevBtn={handlePrevPage}
        />
      </div>
      <BackTop />
    </div>
  );
}
