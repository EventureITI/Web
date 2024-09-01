import React, { useContext, useState } from "react";
import { AddOutline, SearchOutline } from "react-ionicons";
import EditIcon from "../Components/Icons/EditIcon";
import DeleteIcon from "../Components/Icons/DeleteIcon";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../context/AppContext";
import Pagination from "../Components/Pagination";
import DeleteConfirmationModal from "../Components/DeleteConfirmationModal";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import TableSkeleton from "../Components/TableSkeleton";

export default function DashboardAdmin() {
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
  const {
    events,
    searchKey,
    handleSearchKeyChanges,
    filteredSearchEvents,
    handleDeleteEventUI,
    restoreEvents,
    loading,
  } = useContext(appContext);
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
  console.log(filteredSearchEvents);
  // if (loading) return <TableSkeleton />;
  return (
    <div className="bg-[#1A1A1A] px-6 pt-16 pb-4">
      <div className="self-stretch justify-between items-center gap-4 flex p-10 overflow-x-auto whitespace-nowrap">
        <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
          Event List
        </div>
        <div className="relative w-[346px]">
          <input
            value={searchKey}
            onChange={(e) => {
              handleSearchKeyChanges(e.target.value);
            }}
            type="search"
            style={{ caretColor: "#4FE0D2" }}
            className="w-full h-[43px] px-6 py-3 text-white bg-[#c9c9c9]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
            placeholder="Search"
          />
          <button className="absolute inset-y-0 right-3 flex items-center pr-3">
            <SearchOutline color={"#ffffff"} height="24px" width="24px" />
          </button>
        </div>
        <button
          className="h-10 px-8 py-2 bg-[#4fdfd1] rounded-lg justify-center items-center gap-2 inline-flex"
          onClick={() => navigate("/admin/event/new")}
        >
          <AddOutline color={"#ffffff"} height="24px" width="24px" />
          <div className="text-center text-white text-base font-normal">
            Add Event
          </div>
        </button>
      </div>

      <div className="overflow-x-auto  px-10">
        {filteredSearchEvents.length > 0 ? (
          <>
            <table className="w-full text-base font-body text-left rtl:text-right text-gray-500 mb-10 overflow-x-auto whitespace-nowrap">
              <thead className=" text-white">
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th key={index} scope="col" className="px-6">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" text-white">
                {filteredSearchEvents.map((event, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-customGray" : " "}`}
                  >
                    <td className="px-6 py-2">{index + 1}</td>
                    <td className="px-6 py-2">{event.title}</td>
                    <td className="px-6 py-2">{event.host}</td>
                    <td className="px-6 py-2">
                      {event.startTime} - {event.endTime}
                    </td>
                    <td className="px-6 py-2">{event.startDate}</td>
                    <td className="px-6 py-2">{event.price} EGP</td>
                    <td className="px-6 py-2">500</td>
                    <td className="px-6 py-2">
                      <div className="justify-start items-center gap-2 inline-flex">
                        <Link to={`/admin/event/${event.id}`}>
                          <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                            <EditIcon />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleOpenModal(event)}
                          className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex"
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
          <Pagination />
        </div>
      </div>
    </div>
  );
}
