import React, { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard";
import SeeMoreBtn from "./SeeMoreBtn";
import { useNavigate } from "react-router-dom";
import { searchEvents } from "../../context/SearchEventsContext";

export default function Events({ events }) {
  // const { events } = useContext(appContext);
  const navigate = useNavigate();
  const [searchEventsKey, setSearchEventsKey] = useState("");

  const handleSearchEventsKeyChanges = (key) => {
    setSearchEventsKey(key);
  };
  const filteredSearchEvents = !searchEventsKey
    ? events
    : events.filter((event) =>
        event.title.toLowerCase().includes(searchEventsKey.toLowerCase())
      );

  return (
    <div className="w-full pb-8 flex justify-center bg-bg-main">
      <div className="w-full sm:container sm:mx-auto px-8 md:px-4 pt-10 ">
        <div className="form-control hidden relative mb-4 ">
          <input
            onChange={(e) => handleSearchEventsKeyChanges(e.target.value)}
            type="text"
            placeholder="Search"
            className="input text-white focus:outline-main-color focus:outline-offset-0 text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
          />
          <button className="absolute right-4 bottom-2 ">
            <img src="/images/Search.svg" alt="searchIcon" />
          </button>
        </div>
        {/* search dropdown */}
        <div className="flex justify-center">
          {searchEventsKey && (
            <div className="block absolute text-white font-Inter bg-input w-96 z-50 my-1 rounded-lg px-2 py-2">
              {filteredSearchEvents.length > 0 ? (
                <>
                  {filteredSearchEvents.map((event, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 px-2 cursor-pointer"
                        onClick={() => navigate(`/event-details/${event.id}`)}
                      >
                        <div className="flex items-center gap-2">
                          <img className="w-10" src={event.imgUrl} alt="" />
                          {event.title}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="flex justify-center">
                    There is no events with this title
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        {/* Filtered Events */}
        <div
          className={`grid grid-cols-1 ${
            events.length == 0
              ? "sm:w-full"
              : "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          } gap-5 mb-5 2xl:grid-cols-4`}
        >
          {events.length > 0 ? (
            events.slice(0, 6).map((e) => <EventCard key={e.id} event={e} />)
          ) : (
            <h2 className="text-white font-Inter font-400 text-center flex justify-center my-20 ">
              No Events Found
            </h2>
          )}
        </div>
        <SeeMoreBtn />
      </div>
    </div>
  );
}
