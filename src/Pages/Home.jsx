import React, { useContext, useEffect, useState } from "react";
import Main from "../Components/Home/Main";
import Events from "../Components/Home/Events";
import CardsSkeleton from "../Components/Skeleton/CardsSkeleton";
import NavBarSkeleton from "../Components/Skeleton/NavBarSkeleton";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import SeeMoreSkeleton from "../Components/Skeleton/SeeMoreSkeleton";
import FooterSkeleton from "../Components/Skeleton/FooterSkeleton";
import { appContext } from "../context/AppContext";

export default function Home() {
  const [skeleton, setSkeleton] = useState(false);
  const [home, setHome] = useState(false);
  const { events } = useContext(appContext);
  console.log(events);

  useEffect(() => {
    setSkeleton(true);
    setTimeout(() => {
      setSkeleton(false);
      setHome(true);
    }, 1000);


  }, []);

  const sortedEvents = events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
console.log(sortedEvents);

  return (
    <div>
      {skeleton && (
        <div>
          <NavBarSkeleton />
          <div className="w-full h-full bg-bg-main">
            <div className="container mx-auto px-4 pt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
              </div>
              <SeeMoreSkeleton />
              <FooterSkeleton />
            </div>
          </div>
        </div>
      )}
      {home && (
        <div>
          <NavBar />
          <Main />
          <Events events={sortedEvents}/>
          <Footer />
        </div>
      )}
    </div>
  );
}
