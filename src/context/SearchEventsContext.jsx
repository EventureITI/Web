// !TODO

import React, { createContext, useContext, useEffect, useState } from "react";
import { appContext } from "./AppContext";

export const searchEvents = createContext();
export default function SearchEventsContext({ children }) {
  // const { event } = useContext(appContext);


  const events = [
    //   {
    //     imgUrl: "/images/1.png",
    //     title: "Ismailia Art Festival 2024, ITI Ismailia",
    //     name: "Ali Qandil",
    //     date: "Sep 14",
    //     time: "10 : 00 PM",
    //     city: "Ismailia, EG",
    //     money: 600,
    //   },
    //   {
    //     imgUrl: "/images/2.png",
    //     title: "Al-Qalaa International Music and Singing Festival",
    //     name: "Sherine Abdelwahab",
    //     date: "Sep 30",
    //     time: "9 : 00 PM",
    //     city: "Cairo, EG",
    //     money: 250,
    //   },
    //   {
    //     imgUrl: "/images/3.png",
    //     title: "Tamer Ashour Concert",
    //     name: "Tamer Ashour",
    //     date: "Oct 15",
    //     time: "8 : 00 PM",
    //     city: "Cairo, EG",
    //     money: 650,
    //   },
    //   {
    //     imgUrl: "/images/4.png",
    //     title: "King Lear",
    //     name: "Yehia El-Fkhrany",
    //     date: "Nov 10",
    //     time: "8 : 30 PM",
    //     city: "Cairo, EG",
    //     money: 500,
    //   },
    //   {
    //     imgUrl: "/images/5.png",
    //     title: "Egyptian Luxor Marathon",
    //     name: "Citizens",
    //     date: "Sep 25",
    //     time: "3 : 00 PM",
    //     city: "Alexandria, EG",
    //     money: 100,
    //   },
    //   {
    //     imgUrl: "/images/6.png",
    //     title: "AUC Tahrir Concert",
    //     name: "Masar Egbari",
    //     date: "Dec 12",
    //     time: "8 : 00 PM",
    //     city: "Cairo, EG",
    //     money: 450,
    //   },
  ];

  const [searched, setSearched] = useState(events);
  const [searchWord, SetSearchWord] = useState("");


  function searchEvent(e) {
    SetSearchWord(e.target.value);
  }

  useEffect(() => {
    const data = events.filter((e) =>
      e.title?.toLowerCase().includes(searchWord?.toLowerCase())
    );
    setSearched(data);

  }, [searchWord]);

  return (
    <searchEvents.Provider value={{ searched, searchEvent }}>
      {children}
    </searchEvents.Provider>
  );
}