import React, { useContext, useEffect, useState } from "react";
import AppContextProvider, { appContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import formatDate from "../utils/formatDayAndYear";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function GetTicket() {
  const [count, setCount] = useState(1);
  const { events, user, setUser } = useContext(appContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((event) => event.id === id) || {};

  const { price, endTime, startTime, title, startDate } = event;
  const day = formatDate(startDate)["day"];
  const year = formatDate(startDate)["year"];

  const handleClick = () => {
    const eventData = {
      id: id,
      title: title,
      totalPrice: count * price,
      numberOfTickets: count,
      availableTickets: event.tickets,
    };

    // if (count > event.tickets || count > 10) {
    // navigate(`/payment-failed`, { state: eventData.id });
    // } else {
    navigate(`/payment`, { state: eventData });
    // }
    // /* ------------------------------ TESTING-START ----------------------------- */
    // addEventsToFirestore(eventData);
    // navigate("/payment-success")
  };

  // const addEventsToFirestore = async (eventData) => {
  //   const id = user.id;
  //   const docRef = doc(db, `users/${id}`);
  //   try {
  //     await updateDoc(docRef, {
  //       events: arrayUnion(eventData),
  //     });
  //   } catch (error) {
  //     console.error("Error adding events: ", error);
  //   }
  // };
  /* ------------------------------- TESTING-END ------------------------------ */

  return (
    <div className="bg-bg-main flex justify-center pt-28 pb-10 px-20">
      <div className="w-[600px] h-[600px] px-8 py-6 bg-ticket rounded-2xl flex-col justify-center items-center gap-4 flex">
        <div className="self-stretch h-[175px] pb-4 border-b border-white/10 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-lg font-normal font-['Inter']">
            Select Ticket
          </div>
          <div className="self-stretch h-[77px] pb-3 flex-col justify-start items-start gap-2 flex capitalize">
            <div className="self-stretch text-white text-base font-normal font-['Inter']">
              {title}
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-main-color text-sm font-normal font-['Inter']">
                {startTime} - {endTime}
              </div>
              <div className="text-main-color text-sm font-normal font-['Inter']">
                {day}, {year}
              </div>
            </div>
          </div>
          <div className="self-stretch py-0.5 justify-between items-center inline-flex">
            <div className="text-white text-base font-normal font-['Inter']">
              {price} EGP
            </div>
            <div className="h-6 rounded justify-center items-center gap-3.5 flex">
              <button
                onClick={() => (count > 1 ? setCount(count - 1) : null)}
                className="w-6 h-6"
              >
                <img src="/minus.svg" alt="minus" />
              </button>
              <div className="text-center text-white text-base font-normal font-['Inter']">
                {count}
              </div>
              <button onClick={() => setCount(count + 1)} className="w-6 h-6">
                <img src="/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white text-lg font-normal font-['Inter']">
            Payment Method
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-white text-base font-normal font-['Inter']">
              Stripe
            </div>
            <button>
              <img src="/stripe-s.svg" alt="plus" />
            </button>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="w-[348px] h-[51px] flex justify-center items-center bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-4 px-6 rounded-2xl"
          disabled={count > event.tickets || count > 10}
        >
          Proceed to Pay {price * count} EGP
        </button>
      </div>
    </div>
  );
}
