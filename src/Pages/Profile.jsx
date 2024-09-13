import React, { useEffect, useState } from "react";
import TicketItem from "../Components/TicketItem";
import { useContext } from "react";
import { appContext } from "../context/AppContext";

export default function Profile() {
  const { events, userEvents } = useContext(appContext);
  return (
    <div className="bg-bg-main min-h-screen pt-28 overflow-x-hidden">
      <div className=" ps-20  py-10 border-t  border-white/10 flex-col justify-start items-start gap-10 flex">
        <div className="self-stretch text-white text-[32px] font-semibold font-['Inter']">
          Your Tickets
        </div>
        <div
          className=" justify-stretch static overflow-x-scroll items-stretch gap-8 w-full"
          style={{ display: "-webkit-box" }}
        >
          {userEvents.map((eve, index) => {
            if (eve && events[index] && eve.id === events[index].id)
              return (
                <TicketItem
                  key={eve.id}
                  numberOfTickets={eve.numberOfTickets}
                  title={events[index].title}
                  imgUrl={events[index].imgUrl}
                  myDate={events[index].startDate}
                  startTime={events[index].startTime}
                  endTime={events[index].endTime}
                  price={eve.totalPrice}
                />
              );
          })}
        </div>
      </div>

      <div className="h-[0px] border border-main-color w-full"></div>

      <div className="px-20  py-10 border-t border-white/10 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-white text-[32px] font-semibold font-['Inter']">
          Your History
        </div>
        {userEvents.map((eve, index) => {
          if (
            eve &&
            events[index] &&
            eve.id === events[index].id &&
            events[index].isDeleted == "true"
          )
            return (
              <TicketItem
                key={eve.id}
                numberOfTickets={eve.numberOfTickets}
                title={events[index].title}
                imgUrl={events[index].imgUrl}
                myDate={events[index].startDate}
                startTime={events[index].startTime}
                endTime={events[index].endTime}
                price={eve.totalPrice}
              />
            );
        })}
      </div>
    </div>
  );
}
