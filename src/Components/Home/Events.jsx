import React from "react";
import EventCard from "./EventCard";
import SeeMoreBtn from "./SeeMoreBtn";

export default function Events() {
  return (
    <div
      className="w-full pb-8 flex justify-center bg-bg-main"
    >
      <div className="w-full sm:container sm:mx-auto px-8 md:px-4 pt-10 ">
        <div className="flex form-control md:hidden relative mb-4 ">
          <input
            type="text"
            placeholder="Search"
            className="input text-white focus:outline-main-color focus:outline-offset-0 text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
          />
          <button className="absolute right-4 bottom-2 ">
            <img src="/images/Search.svg" alt="searchIcon" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 2xl:grid-cols-4">
          <EventCard
            img={"/images/1.png"}
            title={"Ismailia Art Festival 2024, ITI Ismailia"}
            name={"Ali Qandil"}
            date={"Sep 14"}
            time={"10 : 00 PM"}
            city={"Ismailia, EG"}
            money={600}
          />
          <EventCard
            img={"/images/2.png"}
            title={"Al-Qalaa International Music and Singing Festival"}
            name={"Sherine Abdelwahab"}
            date={"Sep 30"}
            time={"9 : 00 PM"}
            city={"Cairo, EG"}
            money={250}
          />
          <EventCard
            img={"/images/3.png"}
            title={"Tamer Ashour Concert"}
            name={"Tamer Ashour"}
            date={"Oct 15"}
            time={"8 : 00 PM"}
            city={"Cairo, EG"}
            money={650}
          />
          <EventCard
            img={"/images/4.png"}
            title={"King Lear"}
            name={"Yehia El-Fkhrany"}
            date={"Nov 10"}
            time={"8 : 30 PM"}
            city={"Cairo, EG"}
            money={500}
          />
          <EventCard
            img={"/images/5.png"}
            title={"Egyptian Luxor Marathon"}
            name={"Citizens"}
            date={"Sep 25"}
            time={"3 : 00 PM"}
            city={"Alexandria, EG"}
            money={100}
          />
          <EventCard
            img={"/images/6.png"}
            title={"AUC Tahrir Concert"}
            name={"Masar Egbari"}
            date={"Dec 12"}
            time={"8 : 00 PM"}
            city={"Cairo, EG"}
            money={450}
          />
        </div>
        <SeeMoreBtn />
      </div>
    </div>
  );
}
