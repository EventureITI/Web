import React, { useEffect, useState } from 'react'
import EditIcon from './Icons/EditIcon'
import DeleteIcon from './Icons/DeleteIcon'

export default function DashboardEvent({id,title,host,time,date,price,tickets}) {
  const [even, setEven] = useState(false);

  useEffect(()=>{
    if(id % 2 === 0){
      setEven(true)
    }
  },[])


  return (
    <tr className={even ? `bg-transparent` :`bg-input`}>
              <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input">{id}</td>
              <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input"><p className='truncate w-20 custom-sm:w-40 sm:w-full '>{title}</p></td>
              <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden lg:table-cell">{host}</td>
              <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden xl:table-cell">{time}</td>
              <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden lg:table-cell">{date}</td>
              <td className="px-4 sm:px-6 py-2 border-r-2 border-opacity-60 border-input hidden sm:table-cell">{price}</td>
              <td className="px-6 py-2 border-r-2 border-opacity-60 border-input hidden md:table-cell">{tickets}</td>
              <td className="px-4 sm:px-6 py-2">
                <div className="justify-center w-full items-center gap-2 inline-flex">
                  <button className="w-8 h-8 px-2 sm:w-10 sm:h-10 sm:px-2.5 transition duration-300 ease-in-out bg-[#1a1a1a] hover:bg-green-700 rounded-lg border border-green-700 justify-center items-center gap-2 flex">
                    <EditIcon />
                  </button>
                  <button className="w-8 h-8 px-2 sm:w-10 sm:h-10 sm:px-2.5 transition duration-300 ease-in-out bg-[#1a1a1a] hover:bg-[#831717] rounded-lg border border-[#831717] justify-center items-center gap-2 flex">
                    <DeleteIcon />
                  </button>
                </div>
              </td>
            </tr>
  )
}
