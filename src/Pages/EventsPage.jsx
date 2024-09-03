import React, { useState } from "react";
import CategoryBtn from "../Components/CategoryBtn";
import EventCard from "../Components/Home/EventCard";
import Pagination from "../Components/Pagination";

export default function EventsPage() {
  
  // const [colored,setColored] = useState(true)
  // const [coloredscd,setColoredScd] = useState(false)

  // function allBtn(){
  //   setColored(true)
  //   setColoredScd(false)
  // }

  // function comedyBtn(){
  //   setColored(false)
  //   setColoredScd(true)
  // }

  return (
    <div className="w-full bg-bg-main">
      <div className="md:container md:mx-auto mx-8 md:px-4 pt-28">
        <div className="flex flex-col items-center">
          <div className="w-full flex form-control md:hidden relative mb-4">
            <input
              type="text"
              placeholder="Search"
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 2xl:grid-cols-4">
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
        </div>
        <div className="py-10 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
