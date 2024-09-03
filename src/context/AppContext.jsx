import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
export const appContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const eventsCollectionRef = collection(db, "events");
  const categoriesCollectionRef = collection(db, "categories");

  // search for events by title
  const [searchKey, setSearchKey] = useState("");

  const handleSearchKeyChanges = (key) => {
    setSearchKey(key);
  };

  // return events that match the serach key
  const filteredSearchEvents = !searchKey
    ? events
    : events.filter((event) =>
        event.title.toLowerCase().includes(searchKey.toLowerCase())
      );

  // update ui after add a new event
  const handleAddEventsUI = (newEvent) => {
    console.log(newEvent);
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  };

  // update ui after edit an event
  const handleEditEventUI = (event) => {
    console.log(event);
    const newEvents = [...events];
    let index = newEvents.findIndex((e) => e.id === event.id);
    newEvents[index] = event;
    setEvents(newEvents);
  };

  //update ui after delete an event
  const handleDeleteEventUI = (id) => {
    let newEvents = [...events];
    newEvents = newEvents.filter((e) => e.id !== id);
    setEvents(newEvents);
  };

  // resotre events after fauilure of delete
  const restoreEvents = (events) => {
    setEvents(events);
  };

  // get All Events
  useEffect(() => {
    const getAllEvents = async () => {
      // try {
      //   const data = await getDocs(eventsCollectionRef);
      //   const filteredData = data.docs.map((doc) => ({
      //     ...doc.data(),
      //     id: doc.id,
      //   }));
      //   console.log(filteredData);
      //   setEvents(filteredData);
      // } catch (err) {
      //   console.log(err);
      // }
      setLoading(true);
      try {
        const q = query(
          collection(db, "events"),
          where("isDeleted", "==", false)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let eventsArr = [];
          QuerySnapshot.forEach((doc) => {
            eventsArr.push({ ...doc.data(), id: doc.id });
          });
          console.log(eventsArr);
          setEvents(eventsArr);
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    const getAllCategories = async () => {
      try {
        const data = await getDocs(categoriesCollectionRef);
        const categoriesData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    };
    const updateExpiredEvents = async () => {
      const currentDate = new Date();

      // get events where endDate has passed and isDeleted is false
      const q = query(
        collection(db, "events"),
        where("endDate", "<", currentDate),
        where("isDeleted", "==", false)
      );
      try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (docSnapshot) => {
          const eventRef = doc(db, "events", docSnapshot.id);
          await updateDoc(eventRef, {
            isDeleted: true,
          });

          console.log(`Event ${docSnapshot.id} marked as deleted`);
        });
      } catch (error) {
        console.error("Error updating documents: ", error);
      }
    };
    updateExpiredEvents();
    getAllEvents();
    getAllCategories();
  }, []);

  return (
    <appContext.Provider
      value={{
        events,
        handleAddEventsUI,
        restoreEvents,
        searchKey,
        handleSearchKeyChanges,
        filteredSearchEvents,
        handleDeleteEventUI,
        loading,
        handleEditEventUI,
        categories,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
