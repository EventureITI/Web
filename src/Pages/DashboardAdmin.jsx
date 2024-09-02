import React from "react";
import EditIcon from "../Components/Icons/EditIcon";
import DeleteIcon from "../Components/Icons/DeleteIcon";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import DashboardEvent from "../Components/DashboardEvent";

export default function DashboardAdmin() {
  const navigate = useNavigate();
  return (
    <div className="bg-bg-main px-4 pt-16 pb-4">
      <div className="self-stretch md:justify-between md:items-center gap-4 flex flex-col md:flex-row p-10 overflow-x-auto whitespace-nowrap">
        <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
          Event List
        </div>
        <div className="flex gap-2 md:gap-4 w-full md:justify-end">
        <div className="relative w-[480px] md:w-[346px] flex items-center">
          <input
            type="search"
            className="w-full h-[43px] px-4 py-2 text-white bg-[#c9c9c9]/20 rounded-lg outline-none focus:outline-offset-0 focus:outline-main-color "
            placeholder="Search"
          />
          <button className="absolute right-3 flex items-center mr-3 hover:scale-125">
            <img src="/images/Search.svg" alt="searchIcon" />
          </button>
        </div>
        <button
          className="h-10 min-w-10 sm:w-fit sm:px-5 py-0 sm:py-2 bg-main-color transition duration-300 ease-in-out hover:bg-main-hover rounded-full sm:rounded-lg justify-center items-center sm:gap-2 inline-flex"
          onClick={() => navigate("/admin/add-event")}
          >
          <img src="/images/addIcon.svg" alt="addIcon" />
          <div className="text-center text-white text-base font-normal hidden sm:block ">
            Add Event
          </div>
        </button>
        </div>
      </div>
      <div className="overflow-x-auto px-10">
        <table className="w-full text-base font-body text-left rtl:text-right text-gray-500 mb-10 overflow-x-auto whitespace-nowrap">
          <thead className=" text-white">
            <tr>
              <th scope="col" className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">
                #
              </th>
              <th scope="col" className="px-4 sm:px-6 border-r-2 border-opacity-60 border-input">
                Event Title
              </th>
              <th scope="col" className="px-6 border-r-2 border-opacity-60 border-input hidden lg:table-cell">
                Host
              </th>
              <th scope="col" className="px-6 border-r-2 border-opacity-60 border-input hidden xl:table-cell">
                Time
              </th>
              <th scope="col" className="px-6 border-r-2 border-opacity-60 border-input hidden lg:table-cell ">
                Date
              </th>
              <th scope="col" className="px-4 sm:px-6 border-r-2 border-opacity-60 border-input hidden sm:table-cell">
                Price
              </th>
              <th scope="col" className="px-6 border-r-2 border-opacity-60 border-input hidden md:table-cell">
                Tickets
              </th>
              <th scope="col" className="px-4 sm:px-6 "></th>
            </tr>
          </thead>
          <tbody className=" text-white">
            <DashboardEvent id={1} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={2} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={3} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={4} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={5} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={6} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={7} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={8} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={9} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/>
            <DashboardEvent id={10} title={"Ali Qandil Standup Comedy"} host={"Ali Qandil"} time={"07:00 PM - 10:00 PM"} date={"14-09-2024"} price={"700 EGP"} tickets={250}/> 
          </tbody>
        </table>
        <div className="justify-center items-end gap-8 flex mb-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
