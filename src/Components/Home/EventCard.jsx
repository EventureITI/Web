import React, { useState } from "react";
import EventPrice from "./EventPrice";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  function hovering() {
    setHovered(true);
  }

  function noHover() {
    setHovered(false);
  }

  return (
    <div
      className="rounded-md overflow-hidden transition duration-300 ease-in-out hover:scale-105 "
      role="button"
      onClick={() => navigate(`/event-details/${event.id}`)}
      style={{
        maxWidth: "650px",
        backgroundColor: "#292929",
      }}
    >
      <div
        onMouseEnter={hovering}
        onMouseLeave={noHover}
        className="w-full h-44 overflow-hidden relative "
      >
        <img
          className="w-full min-h-[200px]"
          src={event.imgUrl}
          alt="eventImg"
        />
        {hovered ? (
          <div className="cursor-pointer absolute top-0 w-full h-full opacity-70 bg-black flex justify-center items-center">
            <button className="flex items-center text-white">
              <p className=" mr-1 font-semibold text-xl">More Details</p>
            </button>
          </div>
        ) : null}
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center py-2 text-white">
        <p
          className="text-base font-semibold mb-2 px-3 text-ellipsis overflow-hidden capitalize"
          style={{ maxWidth: "250px", whiteSpace: "nowrap" }}
        >
          {event.title}
        </p>
        <p className="text-sm opacity-50 mb-1 font-Inter font-300 ">
          {event.host}
        </p>
        <div className="text-sm mb-3 relative flex justify-center items-center opacity-70 font-Inter font-400">
          <p className='mr-5 after:top-1 after:content-["_"] after:w-0.5 after:h-4 after:bottom-2 after:bg-gray-600 after:absolute after:ml-2'>
            {event.eventDate}
          </p>
          <p className='mr-5 after:top-1 after:content-["_"] after:w-0.5 after:h-4 after:bottom-2 after:bg-gray-600 after:absolute after:ml-2'>
            {event.startTime}
          </p>
          <p>{event.location}</p>
        </div>
        <EventPrice price={event.price} />
      </div>
    </div>
  );
}
