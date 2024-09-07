import React from 'react'
import TicketItem from '../Components/TicketItem'
import { useContext } from 'react'
import { appContext } from '../context/AppContext';

export default function Profile() {
    const {categories , events }= useContext(appContext)
    console.log(categories);
    console.log(events);
    events.map((ev) =>{
        console.log(ev.host);
        
    })
    
  return (
    <div className=' pt-28 overflow-x-hidden'>
   <div className=" ps-20  py-10 border-t  border-white/10 flex-col justify-start items-start gap-10 flex">
    <div className="self-stretch text-white text-[32px] font-semibold font-['Inter']">Your Tickets</div>
    <div className=" justify-stretch static overflow-x-scroll items-stretch gap-8 w-full" style={{display:'-webkit-box'}}>
    
    {events.map((eve) => (
        <TicketItem key={eve.id} title={eve.title} imgUrl={eve.imgUrl} myDate={eve.startDate} startTime={eve.startTime} endTime={eve.endTime} price={eve.price}/>
    ))}
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
