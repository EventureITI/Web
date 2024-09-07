import React, { useEffect, useState } from "react";
import EventBookButton from "../Components/EventBookButton";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import BackTop from "../Components/BackTop";

export default function EventDetails() {
  const [event, setEvent] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    const getEventById = async () => {
      const docRef = doc(db, "events", id);

      const selectedEvent = await getDoc(docRef);
      console.log(selectedEvent.data());
      setEvent(selectedEvent.data());
    };
    getEventById();
  }, []);
  return (
    <>
      <div className="w-full bg-bg-main">
        <div className="hidden md:block">
          <div className="px-8 w-3/12 h-2/6 bg-[#292929] fixed z-10 right-10 top-40 rounded-lg shadow-lg flex flex-col justify-evenly min-w-72">
            <p className="text-white text-xl font-bold">Book a Ticket</p>
            <div>
              <p className="capitalize text-[#909090]">{event.startDate}</p>
              <p className="text-[#909090] uppercase">{event.startTime}</p>
            </div>
            <EventBookButton id={id}></EventBookButton>
          </div>
        </div>

        <div>
          {/*hero*/}
          <div
            style={{ backgroundImage: `url(${event.imgUrl})` }}
            className="w-full h-[500px] z-1 bg-no-repeat bg-cover bg-top"
          >
            <div className="bg-custom-gradient absolute z-2 w-full h-[500px] flex justify-center items-center ">
              <div className="flex flex-col justify-around h-full w-[90%]">
                <button
                  onClick={() => navigate("/events-page/all")}
                  className="bg-main-color p-2 flex items-center justify-center hover:scale-105  w-24 rounded-lg cursor-pointer hover:bg-main-hover "
                >
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
                  {event.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-2 bg-bg-main flex flex-col justify-center items-center">
        {/*description*/}
        <div className="w-[90%]">
          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">Description</p>
            <p className="w-full md:w-[50%] text-[#909090]">
              {event.description}
            </p>
          </div>

          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">Hours</p>
            <p className="w-full md:w-[50%] text-[#909090] capitalize">
              {event.startDate} /{event.startTime} - {event.endTime}
            </p>
          </div>

          <div className="mb-5">
            <p className="text-white text-3xl mb-3 capitalize">location</p>
            <p className="w-full md:w-[50%] text-[#909090] capitalize">
              {event.location}
            </p>
          </div>

          <div className="mb-5 block md:hidden ">
            <p className="text-white text-3xl mb-3 capitalize">book now</p>
            <EventBookButton></EventBookButton>
          </div>
        </div>
        <BackTop />
      </div>
    </>
  );
}
