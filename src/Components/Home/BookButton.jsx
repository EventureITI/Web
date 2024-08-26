import React from 'react'
import { TicketSharp } from 'react-ionicons'

export default function BookButton() {
  return (
        <button className="flex items-center btn text-xs sm:text-sm md:text-base px-2 w-full sm:w-40 font-medium md:w-40 md:h-6 md:font-semibold border-none text-white bg-teal-400 hover:bg-teal-600">
            Book A Ticket
            <div>
              <TicketSharp color={'#ffffff'} height="20px" width="20px"/>
            </div>
        </button>
  )
}
