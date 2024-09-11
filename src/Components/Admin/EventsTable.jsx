import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { appContext } from "../../context/AppContext";
import { debounce } from "lodash";
import {
  updateDoc,
  doc,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  onSnapshot,
  endBefore,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { toast } from "react-toastify";
import generateArrayFromNumber from "../../utils/generateArrayFromNumber";
import Pagination from "../Pagination";
import TableSkeleton from "../Skeleton/TableSkeleton";
const ITEMS_PER_PAGE = 5;
export default function EventsTable() {
  const tableHeaders = [
    "#",
    "Event Title",
    "Host",
    "Time",
    "Date",
    "Price",
    "Tickets",
    "",
  ];
  const { events, handleDeleteEventUI, restoreEvents } = useContext(appContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };
  const handleDeleteEvent = async () => {
    const id = selectedEvent.id;
    console.log(id);
    const eventsBeforeDelete = events;
    try {
      handleDeleteEventUI(id);
      setIsModalOpen(false);
      const eventToBeDeletedDoc = doc(db, "events", id);
      await updateDoc(eventToBeDeletedDoc, { isDeleted: true });
      toast.success("Event deleted successfully");
    } catch (err) {
      restoreEvents(eventsBeforeDelete);
      toast.error("Failed to delete event");
    }
  };

  // const [searchResults, setSearchResults] = useState([]);
  // const handleSearch = async () => {
  //   console.log(searchTerm);

  //   if (searchTerm) {
  //     try {
  //       const q = query(
  //         collection(db, "events"),
  //         where("isDeleted", "==", false),
  //         where("title", ">=", searchTerm.toLowerCase()),
  //         where("title", "<=", searchTerm.toLowerCase() + "\uf8ff") // Range query for matching search terms
  //       );
  //       const querySnapshot = await getDocs(q);
  //       const data = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setSearchResults((prev) => data);
  //     } catch (error) {
  //       console.error("Error fetching documents: ", error);
  //     }
  //   } else {
  //     console.log("empty");
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
  //         setSearchResults((prev) => eventsArr);
  //       });
  //       return () => data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastVisible, setLastVisible] = useState(null); // Tracks the last document for pagination
  const [firstVisible, setFirstVisible] = useState(null); // Tracks the first document for previous pagination
  // const [isNextAvailable, setIsNextAvailable] = useState(false); // To check if the next page exists
  // const [isPrevAvailable, setIsPrevAvailable] = useState(false); // To check if the previous page exists
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  // Fetch total count of documents to calculate total pages
  const fetchTotalPages = async (q) => {
    setPage(1);
    const qq = q
      ? q
      : query(collection(db, "events"), where("isDeleted", "==", false)); // Fetch all docs
    const snapshot = await getDocs(qq);
    const totalDocs = snapshot.size;
    const pages = Math.ceil(totalDocs / ITEMS_PER_PAGE);
    console.log(pages);

    setTotalPages(pages); // Calculate total number of pages
  };

  // Fetch results depending on search input (empty or not)
  const fetchResults = async (direction) => {
    let q;

    // If search term is empty, fetch all documents
    if (!searchTerm.trim()) {
      setPage(1);
      q = query(
        collection(db, "events"),
        orderBy("title"),
        where("isDeleted", "==", false),
        limit(ITEMS_PER_PAGE)
      );
      fetchTotalPages();
    } else {
      setPage(1);
      // If search term is not empty, fetch filtered documents
      q = query(
        collection(db, "events"),
        where("isDeleted", "==", false),
        where("title", ">=", searchTerm.toLowerCase()),
        where("title", "<=", searchTerm.toLocaleLowerCase() + "\uf8ff"),
        limit(ITEMS_PER_PAGE)
      );
      fetchTotalPages(
        query(
          collection(db, "events"),
          where("isDeleted", "==", false),
          where("title", ">=", searchTerm.toLowerCase()),
          where("title", "<=", searchTerm.toLocaleLowerCase() + "\uf8ff")
        )
      );
    }
    if (direction === "next" && lastVisible) {
      q = query(q, startAfter(lastVisible));
    } else if (direction === "prev" && firstVisible) {
      q = query(q, endBefore(firstVisible));
    }
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(docs);

    setResults(docs);
    setSkeletonLoading(false);
    setFirstVisible(querySnapshot.docs[0]);
    console.log(docs[0]);

    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    console.log(docs[docs.length - 1]);

    // setIsNextAvailable(querySnapshot.docs.length === ITEMS_PER_PAGE);
    // setIsPrevAvailable(querySnapshot.docs.length > 0);
  };
  // Handle searching (initial fetch or search query)
  // const handleSearch = async () => {
  //   await fetchResults();
  // };
  // Handle searching (debounced)
  const handleSearch = debounce(async () => {
    await fetchResults();
  }, 500); // Adjust debounce delay (500ms here)

  // Handle pagination
  const handleNextPage = async () => {
    setSkeletonLoading(true);
    if (page < totalPages) {
      await fetchResults("next");
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
      await fetchResults("prev");
      setPage(1);
    }
  };
  // // Fetch the total number of pages when the component loads
  useEffect(() => {
    fetchTotalPages();
  }, []);
  // Fetch all items or search results on search term change
  // useEffect(() => {
  //   handleSearch();
  // }, [searchTerm]);
  // Debounce search term input
  useEffect(() => {
    handleSearch();
    return () => {
      handleSearch.cancel(); // Cleanup the debounce on unmount
    };
  }, [searchTerm]);
  // Generate an array of page numbers
  const pageNumbers = generateArrayFromNumber(totalPages);
  return (
    <>
      <div className="self-stretch md:justify-between md:items-center gap-4 flex flex-col md:flex-row p-10 overflow-x-auto whitespace-nowrap">
        <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
          Event List
        </div>
        <div className="flex gap-2 md:gap-4 w-full md:justify-end">
          <div className="relative w-[480px] md:w-[346px] flex items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="w-full h-[43px] px-4 py-2 text-white bg-[#c9c9c9]/20 rounded-lg outline-none focus:outline-offset-0 focus:outline-main-color "
              style={{ caretColor: "#4FE0D2" }}
              placeholder="Search"
            />
            <button className="absolute right-3 flex items-center mr-3 hover:scale-125">
              <img src="/images/Search.svg" alt="searchIcon" />
            </button>
          </div>
          <button
            className="h-10 min-w-10 sm:w-fit sm:px-5 py-0 sm:py-2 bg-main-color transition duration-300 ease-in-out hover:bg-main-hover rounded-full sm:rounded-lg justify-center items-center sm:gap-2 inline-flex"
            onClick={() => navigate("/admin/event/new")}
          >
            <img src="/images/addIcon.svg" alt="addIcon" />
            <div className="text-center text-white text-base font-normal hidden sm:block ">
              Add Event
            </div>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto  px-10">
        {skeletonLoading ? (
          <TableSkeleton />
        ) : (
          <>
            {results.length > 0 ? (
              <>
                <table className="w-full text-base font-body text-left rtl:text-right text-gray-500 mb-10 overflow-x-auto whitespace-nowrap">
                  <thead className=" text-white">
                    <tr>
                      {tableHeaders.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={`px-6 ${
                            header == "" ? "border-r-0 " : "border-r-2"
                          } border-opacity-60 border-input ${
                            header == "Host" || header == "Date"
                              ? "hidden lg:table-cell"
                              : ""
                          } ${header == "Time" && "hidden xl:table-cell"} ${
                            header == "Price" && "hidden sm:table-cell"
                          } ${header == "Tickets" && "hidden md:table-cell"}`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className=" text-white">
                    {results.map((event, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? "bg-input" : " "}`}
                      >
                        <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">
                          {index + 1}
                        </td>
                        <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">
                          <p className="truncate w-20 custom-sm:w-40 sm:w-full capitalize">
                            {event.title}
                          </p>
                        </td>
                        <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden lg:table-cell">
                          {event.host}
                        </td>
                        <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden xl:table-cell">
                          {event.startTime} - {event.endTime}
                        </td>
                        <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden lg:table-cell">
                          {event.startDate}
                        </td>
                        <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input hidden sm:table-cell">
                          {event.price} EGP
                        </td>
                        <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden md:table-cell">
                          {event.tickets}
                        </td>

                        <td className="px-3 py-2">
                          <div className="justify-center w-full items-center gap-2 inline-flex">
                            <Link to={`/admin/event/${event.id}`}>
                              <button className="w-8 h-8 px-2 sm:w-10 sm:h-10 sm:px-2.5 transition duration-300 ease-in-out bg-[#1a1a1a] hover:bg-green-700 rounded-lg border border-green-700 justify-center items-center gap-2 flex">
                                <EditIcon />
                              </button>
                            </Link>
                            <button
                              onClick={() => handleOpenModal(event)}
                              className="w-8 h-8 px-2 sm:w-10 sm:h-10 sm:px-2.5 transition duration-300 ease-in-out bg-[#1a1a1a] hover:bg-[#831717] rounded-lg border border-[#831717] justify-center items-center gap-2 flex"
                            >
                              <DeleteIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <DeleteConfirmationModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onDelete={handleDeleteEvent}
                />
              </>
            ) : (
              <div className="font-Inter font-600 flex justify-center mb-7 text-white">
                There is no Events
              </div>
            )}
          </>
        )}

        <div className="flex justify-center">
          <Pagination
            currentPage={page}
            handleChangePage={handleChangePage}
            pages={pageNumbers}
            handelPaginationNextBtn={handleNextPage}
            handelPaginationPrevBtn={handlePrevPage}
          />
        </div>
        {/* <BackTop /> */}
      </div>
    </>
  );
}
