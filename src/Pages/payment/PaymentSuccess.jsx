import React, { useContext, useEffect, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { appContext } from "../../context/AppContext";
import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  const [eventData, setEventData] = useState(null);
  const { events, user, setUser } = useContext(appContext);

  useEffect(() => {
    const getDataOfUser = async () => {
      const data = await getDocs(collection(db, "users"));
      const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const userInfo = userData.filter(
        (e) => e.email == auth.currentUser?.email
      );
      setUser(userInfo[0]);
    };
    getDataOfUser();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const eventData = queryParams.get("eventData");
    if (eventData) {
      setEventData(JSON.parse(decodeURIComponent(eventData)));
    }
  }, [location]);

  /* ------------------------------ TESTING-START ----------------------------- */
  const addEventsToFirestore = async (eventData) => {
    const id = user.id;
    const docRef = doc(db, `users/${id}`);
    try {
      await updateDoc(docRef, {
        events: arrayUnion(eventData),
      });
    } catch (error) {
      console.error("Error adding events: ", error);
    }
  };

  if (eventData) {
    addEventsToFirestore(eventData);
  }
  /* ------------------------------- TESTING-END ------------------------------ */

  return (
    <div className="bg-bg-main min-h-screen px-20 pb-16 pt-[114px] flex-col justify-center items-center gap-8 flex">
      <div className="w-[307px] h-[225px] ">
        <img src="/images/success.svg" alt="" />
      </div>
      <div className="w-[356px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-2xl font-bold font-['Inter']">
          Payment Successful
        </div>
        <div className="self-stretch text-center text-main-color text-base font-normal font-['Inter']">
          Your event ticket has been booked and is available in your profile
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-4 flex">
        <Link
          to={"/profile"}
          className="w-[348px] h-[51px] flex justify-center items-center bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-4 px-6 rounded-2xl"
        >
          View My Tickets
        </Link>
        <Link
          to={`/event-details/${eventData.id}`}
          className=" w-[348px]   h-[51px]  flex justify-center items-center text-white font-bold py-4 px-6 transition duration-300 ease-in-out rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Back To Event
        </Link>
      </div>
    </div>
  );
}
