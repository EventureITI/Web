import React, { useEffect, useState } from 'react'

export default function BackTop() {

  return (
    <button onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} className='w-8 h-8 rounded-full border-2 flex justify-center overflow-hidden items-center border-white bg-transparent fixed bottom-2 right-2 z-30'>
        <img className='topBtn w-full h-full z-40' src="/images/chevron.png" alt="arrow" />
    </button>
  )
}