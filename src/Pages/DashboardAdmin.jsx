import React, { useContext, useEffect, useState } from "react";
import EditIcon from "../Components/Icons/EditIcon";
import DeleteIcon from "../Components/Icons/DeleteIcon";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import Pagination from "../Components/Pagination";
import DeleteConfirmationModal from "../Components/DeleteConfirmationModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import generateArrayFromNumber from "../utils/generateArrayFromNumber";
import BackTop from "../Components/BackTop";
import DashboardSkeleton from "../Components/Skeleton/DashboardSkeleton";
import EventsTable from "../Components/Admin/EventsTable";
import UsersTable from "../Components/Admin/UsersTable";

export default function DashboardAdmin() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  // const [currentPage, setCurrentPage] = useState(1);

  // search for events by title
  // const [searchAdminKey, setSearchAdminKey] = useState("");

  // const handleSearchAdminKeyChanges = (key) => {
  //   setSearchAdminKey(key);
  //   setCurrentPage(1);
  // };

  // return events that match the search key
  // const filteredSearchAdminEvents = !searchAdminKey
  //   ? events
  //   : events.filter((event) =>
  //       event.title.toLowerCase().includes(searchAdminKey.toLowerCase())
  //     );

  //pagination logic
  // const pageSize = 5;
  // // const pages = generateArrayFromNumber(
  // //   Math.ceil(filteredSearchAdminEvents.length / pageSize)
  // // );
  // const pageToStart = (currentPage - 1) * pageSize;

  // const paginatedEvents = filteredSearchAdminEvents.slice(
  //   pageToStart,
  //   pageToStart + pageSize
  // );

  // const handleChangePage = (page) => {
  //   setCurrentPage(page);
  // };
  // const handelPaginationNextBtn = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  // const handelPaginationPrevBtn = () => {
  //   setCurrentPage(currentPage - 1);
  // };
  ///////////////////////////////////////////////////////////////////
  // const PAGE_SIZE = 3;
  // const [data, setData] = useState([]);

  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [documentSnapshots, setDocumentSnapshots] = useState([]);

  // const fetchTotalDocuments = async () => {
  //   let q = query(collection(db, "events"), where("isDeleted", "==", false));
  //   const snapshot = await getDocs(q);
  //   const totalDocs = snapshot.size;
  //   setTotalPages(Math.ceil(totalDocs / PAGE_SIZE));
  // };
  // // const fetchData = async (direction = "next") => {
  // //   let q;

  // //   if (direction === "next" && lastDoc) {
  // //     q = query(
  // //       collection(db, "events"),
  // //       where("isDeleted", "==", false),
  // //       orderBy("title"),
  // //       startAfter(lastDoc),
  // //       limit(PAGE_SIZE)
  // //     );
  // //   } else if (direction === "prev" && firstDoc) {
  // //     q = query(collection(db, "events") , where("isDeleted", "==", false), orderBy("title"), limit(PAGE_SIZE));
  // //   } else {
  // //     q = query(collection(db, "events"),  where("isDeleted", "==", false), orderBy("title"), limit(PAGE_SIZE));
  // //   }
  // //   const snapshot = await getDocs(q);
  // //   const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  // //   if (snapshot.docs.length > 0) {
  // //     setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
  // //     setFirstDoc(snapshot.docs[0]);
  // //   }

  // //   setData(docs);
  // // };
  // const fetchPage = async (targetPage) => {
  //   let q;

  //   if (targetPage === 1) {
  //     // Query for the first page
  //     q = query(
  //       collection(db, "events"),
  //       where("isDeleted", "==", false),
  //       orderBy("title"),
  //       limit(PAGE_SIZE)
  //     );
  //   } else if (documentSnapshots[targetPage - 2]) {
  //     // Use cached last document from the previous page
  //     q = query(
  //       collection(db, "events"),
  //       where("isDeleted", "==", false),
  //       orderBy("title"),
  //       startAfter(documentSnapshots[targetPage - 2]),
  //       limit(PAGE_SIZE)
  //     );
  //   } else {
  //     // If no cache, manually go through the previous pages to reach the target
  //     let lastVisible = null;
  //     for (let i = 1; i < targetPage; i++) {
  //       const tempQ = query(
  //         collection(db, "events"),
  //         where("isDeleted", "==", false),
  //         orderBy("title"),
  //         startAfter(lastVisible || undefined),
  //         limit(PAGE_SIZE)
  //       );
  //       const tempSnapshot = await getDocs(tempQ);
  //       lastVisible = tempSnapshot.docs[tempSnapshot.docs.length - 1];
  //       documentSnapshots[i - 1] = lastVisible;
  //     }
  //     q = query(
  //       collection(db, "events"),
  //       where("isDeleted", "==", false),
  //       orderBy("title"),
  //       startAfter(lastVisible),
  //       limit(PAGE_SIZE)
  //     );
  //   }

  //   const snapshot = await getDocs(q);
  //   const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  //   setData(docs);

  //   // Cache the last document of the current page
  //   if (snapshot.docs.length > 0) {
  //     documentSnapshots[targetPage - 1] =
  //       snapshot.docs[snapshot.docs.length - 1];
  //     setDocumentSnapshots([...documentSnapshots]);
  //   }
  // };

  // useEffect(() => {
  //   // fetchTotalDocuments();
  //   // fetchPage(1);
  // }, []);
  // const handlePageClick = (pageNum) => {
  //   setPage(pageNum);
  //   fetchPage(pageNum);
  // };
  // const handleNext = () => {
  //   if (page < totalPages) {
  //     fetchData("next");
  //     setPage(page + 1);
  //   }
  // };
  // const handlePrev = () => {
  //   if (page > 1) {
  //     fetchData("prev");
  //     setPage(page - 1);
  //   }
  // };

  // if (loading) return <TableSkeleton />;

  return (
    <div className="bg-bg-main px-4 pt-16 pb-4 min-h-screen">
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          {/* <div className="justify-center items-end gap-8 flex mb-10"> */}

          <EventsTable />
        </>
      )}
    </div>
  );
}
