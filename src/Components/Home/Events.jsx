import React, { useContext } from "react";
import EventCard from "./EventCard";
import SeeMoreBtn from "./SeeMoreBtn";
import { searchEvents } from "../../context/SearchEventsContext";

export default function Events() {
  const {searched , searchEvent} = useContext(searchEvents)

  return (
    <div
      className="w-full pb-8 flex justify-center bg-bg-main"
    >
      <div className="w-full sm:container sm:mx-auto px-8 md:px-4 pt-10 ">
        <div className="flex form-control md:hidden relative mb-4 ">
          <input
            type="text"
            placeholder="Search"
            onChange={searchEvent}
            className="input text-white focus:outline-main-color focus:outline-offset-0 text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
          />
          <button className="absolute right-4 bottom-2 ">
            <img src="/images/Search.svg" alt="searchIcon" />
          </button>
        </div>
        <div className={`grid grid-cols-1 ${searched.length == 0 ? "sm:w-full" :"sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"} gap-5 mb-5 2xl:grid-cols-4`}>
        {searched.length > 0 ?searched.map((e)=><EventCard key={e.title} img={e.img} title={e.title} name={e.name} date={e.date} time={e.time} city={e.city} money={e.money}/>):<h2 className="text-white font-Inter font-400 text-center flex justify-center my-20 ">No Events Found</h2>}
        </div>
        <SeeMoreBtn />
      </div>
    </div>
  );
}
