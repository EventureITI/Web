import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { formatDate } from "../utils/formatDateInYMD";
export const appContext = createContext();
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const eventsCollectionRef = collection(db, "events");
  const categoriesCollectionRef = collection(db, "categories");
  const usersCollectionRef = collection(db, "users");
  const [user, setUser] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [eventBanner, setEventBanner] = useState(null);

  // update ui after add a new event
  const handleAddEventsUI = (newEvent) => {
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  };

  // update ui after edit an event
  const handleEditEventUI = (event) => {
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

  //update ui after delete a user
  const handleDeleteUserUI = (id) => {
    let newUsers = [...users];
    newUsers = newUsers.filter((u) => u.id !== id);

    setUsers(newUsers);
  };

  // resotre events after fauilure of delete
  const restoreEvents = (events) => {
    setEvents(events);
  };

  // resotre users after fauilure of delete
  const restoreUsers = (users) => {
    setUsers(users);
  };

  // get All Events
  useEffect(() => {
    const getAllEvents = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "events"),
          where("isDeleted", "==", false),
          orderBy("eventDate", "asc")
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let eventsArr = [];
          QuerySnapshot.forEach((doc) => {
            eventsArr.push({ ...doc.data(), id: doc.id });
          });
          setEvents(eventsArr);
          setEventBanner(eventsArr[0]);
          setLoading(false);
        });
        return () => data;
      } catch (error) {
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
      } catch (error) {}
    };
    const updateExpiredEvents = async () => {
      // const currentDate = new Date().toISOString().split("T")[0];
      const currentDate = formatDate(new Date());
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
        });
      } catch (error) {
        console.error("Error updating documents: ", error);
      }
    };

    // the add all user
    const getDataOfUser = async () => {
      const data = await getDocs(collection(db, "users"));
      const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const userInfo = userData.filter(
        (e) => e.email == auth.currentUser?.email
      );
      setUser(userInfo);
    };

    // the det all events of user
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
    updateExpiredEvents();
    getAllEvents();
    getAllCategories();
    getDataOfUser();

    const getAllUsers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const usersData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsers(usersData);
      } catch (error) {}
    };
    updateExpiredEvents();
    getAllEvents();
    getAllCategories();
    getAllUsers();
    getEventsOfUser();
  }, []);

  return (
    <appContext.Provider
      value={{
        events,
        handleAddEventsUI,
        restoreEvents,
        handleDeleteEventUI,
        loading,
        handleEditEventUI,
        categories,
        user,
        users,
        restoreUsers,
        handleDeleteUserUI,
        userEvents,
        eventBanner,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
