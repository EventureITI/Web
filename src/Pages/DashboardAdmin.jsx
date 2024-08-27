import React from "react";
import {
  AddOutline,
  ArrowBackOutline,
  ArrowForwardOutline,
  SearchOutline,
} from "react-ionicons";
import EditIcon from "../Components/Icons/EditIcon";
import DeleteIcon from "../Components/Icons/DeleteIcon";
import { useNavigate } from "react-router-dom";

export default function DashboardAdmin() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1A1A1A] px-6 pt-16 pb-4">
      <div className="self-stretch justify-between items-center gap-4 flex p-10 overflow-x-auto whitespace-nowrap">
        <div className="grow shrink basis-0 text-white text-[32px] font-semibold ">
          Event List
        </div>
        <div className="relative w-[346px]">
          <input
            type="search"
            className="w-full h-[43px] px-6 py-3 text-white bg-[#c9c9c9]/20 rounded-lg focus:ring-main-color focus:border-main-color"
            placeholder="Search"
          />
          <button className="absolute inset-y-0 right-3 flex items-center pr-3">
            <SearchOutline color={"#ffffff"} height="24px" width="24px" />
          </button>
        </div>
        <button
          className="h-10 px-8 py-2 bg-[#4fdfd1] rounded-lg justify-center items-center gap-2 inline-flex"
          onClick={() => navigate("/admin/add-event")}
        >
          <AddOutline color={"#ffffff"} height="24px" width="24px" />
          <div className="text-center text-white text-base font-normal">
            Add Event
          </div>
        </button>
      </div>
      <div className="overflow-x-auto  px-10">
        <table className="w-full text-base font-body text-left rtl:text-right text-gray-500 mb-10 overflow-x-auto whitespace-nowrap">
          <thead className=" text-white">
            <tr>
              <th scope="col" className="px-6">
                #
              </th>
              <th scope="col" className="px-6">
                Event Title
              </th>
              <th scope="col" className="px-6">
                Host
              </th>
              <th scope="col" className="px-6">
                Time
              </th>
              <th scope="col" className="px-6">
                Date
              </th>
              <th scope="col" className="px-6">
                Price
              </th>
              <th scope="col" className="px-6">
                Tickets
              </th>
              <th scope="col" className="px-6"></th>
            </tr>
          </thead>
          <tbody className=" text-white">
            <tr className="bg-customGray">
              <td className="px-6 py-2">1</td>
              <td className="px-6 py-2">Ali Qandil Standup Comedy</td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">2</td>
              <td className="px-6 py-2">Ali Qandil Standup Comedy</td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-customGray">
              <td className="px-6 py-2">3</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className=" justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">4</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-customGray">
              <td className="px-6 py-2">5</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">6</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-customGray">
              <td className="px-6 py-2">7</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">8</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-customGray">
              <td className="px-6 py-2">9</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">10</td>
              <td scope="row" className="px-6 py-2">
                Ali Qandil Standup Comedy
              </td>
              <td className="px-6 py-2">Ali Qandil</td>
              <td className="px-6 py-2">07:00 PM - 10:00 PM</td>
              <td className="px-6 py-2">14-09-2024</td>
              <td className="px-6 py-2">700 EGP</td>
              <td className="px-6 py-2">500</td>
              <td className="px-6 py-2">
                <div className="justify-start items-center gap-2 inline-flex">
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-white justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-10 h-10 px-2.5 bg-[#1a1a1a] rounded-lg border border-[#dd4848] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="justify-center items-end gap-8 flex mb-10">
          <div className="px-3 py-2 opacity-50 rounded-lg justify-center items-center gap-2 flex cursor-pointer">
            <ArrowBackOutline color={"#ffffff"} height="16px" width="16px" />
            <div className="text-white text-base font-normal font-body">
              Previous
            </div>
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="px-3.5 py-2 bg-[#4fdfd1] rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-white text-base font-normal font-body cursor-pointer">
                1
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
              <div className="text-white text-base font-normal font-body">
                2
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
              <div className="text-white text-base font-normal font-body">
                3
              </div>
            </div>
            <div className="px-4 py-2 rounded-lg flex-col justify-center items-center inline-flex cursor-pointer">
              <div className="text-white text-base font-bold font-body leading-snug">
                ...
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg flex-col justify-center items-center inline-flex">
              <div>
                <div className="text-white text-base font-normal font-body cursor-pointer">
                  10
                </div>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-white text-base font-normal font-body cursor-pointer">
                11
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-lg flex-col justify-center items-center inline-flex">
              <div className="text-white text-base font-normal font-body cursor-pointer">
                12
              </div>
            </div>
          </div>
          <div className="px-3 py-2 rounded-lg justify-center items-center gap-2 flex cursor-pointer">
            <div className="text-white text-base font-normal font-body leading-none">
              Next
            </div>
            <ArrowForwardOutline color={"#ffffff"} height="16px" width="16px" />
          </div>
        </div>
      </div>
    </div>
  );
}
