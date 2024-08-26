import React from 'react'
import {useNavigate} from "react-router-dom"

export default function SeeMoreBtn() {
  const navigate = useNavigate();

  return (
    <button onClick={()=>navigate("/eventsPage")} type="button" className="w-full h-10 flex justify-center items-center text-white bg-zinc-800 hover:bg-zinc-700 focus:outline-none font-medium rounded-md text-base px-5 py-2.5 text-center ">See More</button>
  )
}
