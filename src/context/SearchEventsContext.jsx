// !TODO

import React, { createContext, useContext, useEffect, useState } from "react";
import { appContext } from "./AppContext";

export const searchEvents = createContext();
export default function SearchEventsContext({ children }) {


  const events = [
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