import React, { useContext, useEffect, useState } from "react";
import CategoryBtn from "../Components/CategoryBtn";
import EventCard from "../Components/Home/EventCard";
import Pagination from "../Components/Pagination";
import BackTop from "../Components/BackTop";
import { searchEvents } from "../context/SearchEventsContext";

export default function EventsPage() {
  const {searched , searchEvent} = useContext(searchEvents)

  return (
    <div className="w-full bg-bg-main min-h-screen relative">
      <div className="md:container md:mx-auto mx-8 md:px-4 pt-28">
        <div className="flex flex-col items-center">
          <div className="w-full flex form-control md:hidden relative mb-4">
            <input
              type="text"
              placeholder="Search"
              onChange={searchEvent}
              className="input focus:outline-main-color focus:outline-offset-0 text-white text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
            />
            <button className="absolute right-4 bottom-2">
            <img src="/images/Search.svg" alt="searchIcon" />
            </button>
          </div>
          <div className="w-full flex gap-5 items-center mb-7 overflow-x-auto">
          <div>
          <CategoryBtn category={"All"} path={"/events-page/all"} classes={""}   />
            </div>
            <div>
            <CategoryBtn
              category={"Comedy"}
              path={"/events-page/comedy"}
            />
            </div>
            <CategoryBtn
              category={"Music"}
              path={"/events-page/music"}
            />
            <CategoryBtn
              category={"Sports"}
              path={"/events-page/sports"}
            />
            <CategoryBtn
              category={"Theater"}
              path={"/events-page/theater"}
            />
            <CategoryBtn
              category={"Charity"}
              path={"/events-page/charity"}
            />
            <CategoryBtn
              category={"Virtual"}
              path={"/events-page/virtual"}
            />
            <CategoryBtn
              category={"Family"}
              path={"/events-page/family"}
            />
            <CategoryBtn
              category={"Workshops"}
              path={"/events-page/workshops"}
            />
          </div>
          <div className={`w-full grid grid-cols-1 ${searched.length == 0 ? "sm:w-full" :"sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"}   gap-5 mb-5 2xl:grid-cols-4 justify-center items-center`}>
              {searched.length > 0 ?searched.map((e)=><EventCard key={e.title} img={e.img} title={e.title} name={e.name} date={e.date} time={e.time} city={e.city} money={e.money}/>):<h2 className="text-white font-Inter font-400 text-center flex justify-center my-20 ">No Events Found</h2>}
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <Pagination />
        </div>
      </div>
      <BackTop/>
    </div>
  );
}
