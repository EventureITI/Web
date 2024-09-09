import React, { useEffect, useState } from 'react'
import TicketItem from '../Components/TicketItem'
import { useContext } from 'react'
import { appContext } from '../context/AppContext';

export default function Profile() {
    const {events  , user }= useContext(appContext)
    const [eventsOfProfile , setEventOfProfile] = useState([])

    console.log(user);
    
    useEffect(() => {
        const get = async () => {
          try {
            await setEventOfProfile(user[0]['events']);
        } catch (error) {
            console.error("Error setting event profile:", error);
        }
    };
    get();
}, []);
    console.log(eventsOfProfile);
    
 
  return (
    <div className=' pt-28 overflow-x-hidden'>
   <div className=" ps-20  py-10 border-t  border-white/10 flex-col justify-start items-start gap-10 flex">
    <div className="self-stretch text-white text-[32px] font-semibold font-['Inter']">Your Tickets</div>
    <div className=" justify-stretch static overflow-x-scroll items-stretch gap-8 w-full" style={{display:'-webkit-box'}}>
    
    {eventsOfProfile.map((eve , index) => {
        if(events[index].id === eve.id)
        return <TicketItem key={eve.id} 
        numberOfTickets={eve['numberOfTickets']} 
        title={events[index].title} imgUrl={events[index].imgUrl} myDate={events[index].startDate} 
        startTime={events[index].startTime} endTime={events[index].endTime} 
        price={eve['totalPrice']}
        />
})}
    </div>
</div>



<div className="h-[0px] border border-main-color w-full"></div>

    <div className="px-20  py-10 border-t border-white/10 flex-col justify-start items-start gap-6 flex">
    <div className="self-stretch text-white text-[32px] font-semibold font-['Inter']">Your History</div>
    {events.map((eve) => (
        <TicketItem key={eve.id} title={eve.title} imgUrl={eve.imgUrl} myDate={eve.startDate} startTime={eve.startTime} endTime={eve.endTime} price={eve.price}/>
    ))}
    
</div>
    </div>
  )
}
