import React from "react";
import EventBookButton from "../Components/EventBookButton";
import { useNavigate } from "react-router-dom";
import BackTop from "../Components/BackTop";

export default function EventDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-bg-main">
        <div className="hidden md:block">
          <div className="px-8 w-3/12 h-2/6 bg-[#292929] fixed z-10 right-10 top-40 rounded-lg shadow-lg flex flex-col justify-evenly min-w-72">
            <p className="text-white text-xl font-bold">Book a Ticket</p>
            <div>
              <p className="capitalize text-[#909090]">
                saturday, september 14, 2024
              </p>
              <p className="text-[#909090] uppercase">7:00 pm</p>
            </div>
            <EventBookButton></EventBookButton>
          </div>
        </div>

        <div>
          {" "}
          {/*hero*/}
          <div className=" w-full h-[500px] z-1 bg-[url('/images/cover.jfif')] bg-no-repeat bg-cover bg-top">
            <div className="bg-custom-gradient absolute z-2 w-full h-[500px] flex justify-center items-center ">
              <div className="flex flex-col justify-around h-full w-[90%]">
                <button onClick={()=>navigate("/events-page/all")} className="bg-main-color p-2 flex items-center justify-center hover:scale-105  w-24 rounded-lg cursor-pointer hover:bg-main-hover ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                    <p className="mx-2 text-white">Back</p>
                </button>

                <div className="text-white text-5xl font-semibold">
                  King Lear
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-2 bg-bg-main flex flex-col justify-center items-center">
        {" "}
        {/*description*/}
        <div className="w-[90%]">
          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">Description</p>
            <p className="w-full md:w-[50%] text-[#909090]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              voluptate blanditiis quos soluta, doloribus accusamus a deleniti
              unde nemo neque vero dolores cupiditate sapiente. Facilis aut
              accusantium odit modi et!
            </p>
          </div>

          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">Hours</p>
            <p className="w-full md:w-[50%] text-[#909090] capitalize">
              september 14, 2024 / 7PM - 10PM
            </p>
          </div>

          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">location</p>
            <p className="w-full md:w-[50%] text-[#909090] capitalize">
              cairo show, the marquee theater,new cairo 1, cairo governate
            </p>
          </div>

          <div className="mb-5 block md:hidden ">
            <p className="text-white text-3xl mb-3 capitalize">book now</p>
            <EventBookButton></EventBookButton>
          </div>
        </div>
        <BackTop/>
      </div>
    </>
  );
}
