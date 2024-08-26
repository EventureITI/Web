import React from 'react'
import { TicketSharp } from 'react-ionicons'

export default function EventPrice({price}) {
  return (
    <button className=" flex justify-center gap-2 mb-2 items-center h-10 rounded-lg text-base w-32 font-semibold border-none text-white bg-zinc-600 hover:bg-zinc-700">
            <TicketSharp color={'#ffffff'} height="20px" width="20px"/>
            {price} EGP
    </button>
  )
}
