import React, { useEffect, useState } from "react";
import TicketItem from "../Components/TicketItem";
import { useContext } from "react";
import { appContext } from "../context/AppContext";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Profile() {
  const { events, userEvents , setUserEvents} = useContext(appContext);

  useEffect(()=>{
    const getEventsOfUser = async () => {
      try {
        const data = await getDocs(collection(db, "users"));

        const userData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const userInfo = userData.filter(
          (user) => user.email === auth.currentUser?.email
        );

        if (userInfo.length > 0) {
          const user = userInfo[0];

          const events = user.events;
          setUserEvents(events);
        } else {
          // console.error("No user found with the current email.");
        }
      } catch (error) {
        // console.error("Error getting events of user:", error);
      }
    };
    getEventsOfUser()
    // console.log('getEventsOfUser', userEvents);
    
  },[])

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
          {events.map((eventItem, index) => {
            const matchingUserEvent = userEvents?.find((eve) => eve.id === eventItem.id);
            if (matchingUserEvent)
              return (
                <TicketItem
                  key={matchingUserEvent.id}
                  numberOfTickets={matchingUserEvent.numberOfTickets}
                  title={events[index].title}
                  imgUrl={events[index].imgUrl}
                  myDate={events[index].startDate}
                  startTime={events[index].startTime}
                  endTime={events[index].endTime}
                  price={matchingUserEvent.totalPrice}
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
        {userEvents?.map((eve, index) => {
  const event = events[index];
  if (eve && event?.id === eve.id && event?.isDeleted === "true") {
    return (
      <TicketItem
        key={eve.id}
        numberOfTickets={eve.numberOfTickets}
        title={event.title}
        imgUrl={event.imgUrl}
        myDate={event.startDate}
        startTime={event.startTime}
        endTime={event.endTime}
        price={eve.totalPrice}
      />
    );
  }
  return null;
})}

      </div>
    </div>
  );
}
