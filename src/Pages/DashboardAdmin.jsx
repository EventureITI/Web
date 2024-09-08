import React, { useContext, useEffect, useState } from "react";
import EditIcon from "../Components/Icons/EditIcon";
import DeleteIcon from "../Components/Icons/DeleteIcon";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import Pagination from "../Components/Pagination";
import DeleteConfirmationModal from "../Components/DeleteConfirmationModal";
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
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import generateArrayFromNumber from "../utils/generateArrayFromNumber";
import BackTop from "../Components/BackTop";
import DashboardSkeleton from "../Components/Skeleton/DashboardSkeleton";

export default function DashboardAdmin() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  const { events, handleDeleteEventUI, restoreEvents } = useContext(appContext);
  // search for events by title
  const [searchAdminKey, setSearchAdminKey] = useState("");

  const handleSearchAdminKeyChanges = (key) => {
    setSearchAdminKey(key);
    setCurrentPage(1);
  };

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
  // return events that match the search key
  const filteredSearchAdminEvents = !searchAdminKey
    ? events
    : events.filter((event) =>
        event.title.toLowerCase().includes(searchAdminKey.toLowerCase())
      );
  console.log(filteredSearchAdminEvents);
  //pagination logic
  const pageSize = 5;
  // const pages = generateArrayFromNumber(
  //   Math.ceil(filteredSearchAdminEvents.length / pageSize)
  // );
  const pageToStart = (currentPage - 1) * pageSize;
  console.log(pageToStart);

  const paginatedEvents = filteredSearchAdminEvents.slice(
    pageToStart,
    pageToStart + pageSize
  );

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  const handelPaginationNextBtn = () => {
    setCurrentPage(currentPage + 1);
  };
  const handelPaginationPrevBtn = () => {
    setCurrentPage(currentPage - 1);
  };
  ///////////////////////////////////////////////////////////////////
  const PAGE_SIZE = 3;
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [documentSnapshots, setDocumentSnapshots] = useState([]);

  const fetchTotalDocuments = async () => {
    let q = query(collection(db, "events"), where("isDeleted", "==", false));
    const snapshot = await getDocs(q);
    const totalDocs = snapshot.size;
    setTotalPages(Math.ceil(totalDocs / PAGE_SIZE));
  };
  // const fetchData = async (direction = "next") => {
  //   let q;

  //   if (direction === "next" && lastDoc) {
  //     q = query(
  //       collection(db, "events"),
  //       where("isDeleted", "==", false),
  //       orderBy("title"),
  //       startAfter(lastDoc),
  //       limit(PAGE_SIZE)
  //     );
  //   } else if (direction === "prev" && firstDoc) {
  //     q = query(collection(db, "events") , where("isDeleted", "==", false), orderBy("title"), limit(PAGE_SIZE));
  //   } else {
  //     q = query(collection(db, "events"),  where("isDeleted", "==", false), orderBy("title"), limit(PAGE_SIZE));
  //   }
  //   const snapshot = await getDocs(q);
  //   const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  //   if (snapshot.docs.length > 0) {
  //     setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
  //     setFirstDoc(snapshot.docs[0]);
  //   }

  //   setData(docs);
  // };
  const fetchPage = async (targetPage) => {
    let q;

    if (targetPage === 1) {
      // Query for the first page
      q = query(
        collection(db, "events"),
        where("isDeleted", "==", false),
        orderBy("title"),
        limit(PAGE_SIZE)
      );
    } else if (documentSnapshots[targetPage - 2]) {
      // Use cached last document from the previous page
      q = query(
        collection(db, "events"),
        where("isDeleted", "==", false),
        orderBy("title"),
        startAfter(documentSnapshots[targetPage - 2]),
        limit(PAGE_SIZE)
      );
    } else {
      // If no cache, manually go through the previous pages to reach the target
      let lastVisible = null;
      for (let i = 1; i < targetPage; i++) {
        const tempQ = query(
          collection(db, "events"),
          where("isDeleted", "==", false),
          orderBy("title"),
          startAfter(lastVisible || undefined),
          limit(PAGE_SIZE)
        );
        const tempSnapshot = await getDocs(tempQ);
        lastVisible = tempSnapshot.docs[tempSnapshot.docs.length - 1];
        documentSnapshots[i - 1] = lastVisible;
      }
      q = query(
        collection(db, "events"),
        where("isDeleted", "==", false),
        orderBy("title"),
        startAfter(lastVisible),
        limit(PAGE_SIZE)
      );
    }

    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    setData(docs);

    // Cache the last document of the current page
    if (snapshot.docs.length > 0) {
      documentSnapshots[targetPage - 1] =
        snapshot.docs[snapshot.docs.length - 1];
      setDocumentSnapshots([...documentSnapshots]);
    }
  };

  useEffect(() => {
    // fetchTotalDocuments();
    // fetchPage(1);
  }, []);
  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    fetchPage(pageNum);
  };
  const handleNext = () => {
    if (page < totalPages) {
      fetchData("next");
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      fetchData("prev");
      setPage(page - 1);
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    console.log(searchTerm);

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
    } else {
      console.log("empty");
      try {
        const q = query(
          collection(db, "events"),
          where("isDeleted", "==", false)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let eventsArr = [];
          QuerySnapshot.forEach((doc) => {
            eventsArr.push({ ...doc.data(), id: doc.id });
          });
          console.log(eventsArr);
          setSearchResults((prev) => eventsArr);
        });
        return () => data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);
  // if (loading) return <TableSkeleton />;
  console.log("results", searchResults);

  return (
    <div className="bg-bg-main px-4 pt-16 pb-4 min-h-screen">
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <div className="self-stretch md:justify-between md:items-center gap-4 flex flex-col md:flex-row p-10 overflow-x-auto whitespace-nowrap">
            <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
              Event List
            </div>
            <div className="flex gap-2 md:gap-4 w-full md:justify-end">
              <div className="relative w-[480px] md:w-[346px] flex items-center">
                <input
                  // value={searchAdminKey}
                  // onChange={(e) => {
                  //   handleSearchAdminKeyChanges(e.target.value);
                  // }}
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

          {/* <div className="justify-center items-end gap-8 flex mb-10"> */}
          <div className="overflow-x-auto  px-10">
            {searchResults.length > 0 ? (
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
                    {searchResults.map((event, index) => (
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

            <div className="flex justify-center">
              {/* <Pagination
            // currentPage={currentPage}
            currentPage={page}
            // handleChangePage={handleChangePage}
            handleChangePage={() => setPage(i + 1)}
            pages={pages}
            // pages={totalPages}
            // handelPaginationNextBtn={handelPaginationNextBtn}
            handelPaginationNextBtn={handleNext}
            // handelPaginationPrevBtn={handelPaginationPrevBtn}
            handelPaginationPrevBtn={handlePrev}
          /> */}
              {/* <div>
            <div>
              <button
                onClick={() => handlePageClick(page - 1)}
                disabled={page === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => handlePageClick(i + 1)}>
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageClick(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div> */}
            </div>
            <BackTop />
          </div>
        </>
      )}
    </div>
  );
}
