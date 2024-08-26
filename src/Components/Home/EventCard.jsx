import React, { useState } from 'react'
import EventPrice from './EventPrice'
import { useNavigate } from 'react-router-dom'

export default function EventCard({img,title,name,date,time,city,money}) {
    const [hovered,setHovered] = useState(false)
    const navigate = useNavigate()

    function hovering (){
        setHovered(true)
    }

    function noHover (){
        setHovered(false)
    }

  return (
    <div className='rounded-md overflow-hidden hover:scale-105' style={{maxWidth:"650px", backgroundColor:"#292929",transition:"0.5s all ease-in-out"}}>
      <div onMouseEnter={hovering} onMouseLeave={noHover} className='w-full h-44 overflow-hidden relative'>
        <img className='w-full' src= {img} alt="eventImg" />
        {hovered ? <div onClick={()=>navigate("/eventDetails")} className='cursor-pointer absolute top-0 w-full h-full opacity-70 bg-black flex justify-center items-center'>
            <button className='flex items-center text-white'>
                <p className=' mr-1 font-semibold text-xl'>More Details</p>
            </button>
        </div> : null}
      </div>
      <div className='w-full h-fit flex flex-col justify-center items-center py-2 text-white'>
        <p className='text-base font-semibold mb-2 px-3 text-nowrap text-ellipsis overflow-hidden' style={{maxWidth:"250px"}}>{title}</p>
        <p className='text-sm font-thin opacity-50 mb-1' style={{fontFamily:"Inter",fontWeight:300}}>{name}</p>
        <div className='text-sm mb-3 font-thin relative flex justify-center items-center opacity-70' style={{fontFamily:"Inter",fontWeight:400}}>
        <p className='mr-5 after:top-1 after:content-["_"] after:w-0.5 after:h-4 after:bottom-2 after:bg-gray-600 after:absolute after:ml-2'>{date}</p>
        <p className='mr-5 after:top-1 after:content-["_"] after:w-0.5 after:h-4 after:bottom-2 after:bg-gray-600 after:absolute after:ml-2'>{time}</p>
        <p>{city}</p>
        </div>
        <EventPrice price={money}/>
      </div>
    </div>
  )
}
