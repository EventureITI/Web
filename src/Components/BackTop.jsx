import React, { useEffect, useState } from 'react'

export default function BackTop() {
  const [state,setState] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 150){
        setState(true)
      }else{
        setState(false)
      }
    }

    window.addEventListener("scroll",handleScroll) //on scroll make this function

    return()=>{
      window.removeEventListener("scroll",handleScroll) //remove this event on unmount
    }
  },[])
  return (
    state && <button onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} className='w-8 h-8 rounded-full border-2 flex justify-center overflow-hidden items-center border-white bg-transparent fixed bottom-2 right-2 z-30'>
        <img className='topBtn w-full h-full z-40' src="/images/chevron.png" alt="arrow" />
    </button>
  )
}