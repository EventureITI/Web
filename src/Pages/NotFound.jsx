import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col' style={{backgroundImage:"url('/images/Notfound5.jpg')",backgroundPosition:"center",backgroundSize:"cover"}}>
      <p className='font-Inter font-600 text-4xl tracking-[0.1em] sm:tracking-[0.15em] md:text-6xl lg:text-7xl opacity-60 md:tracking-[0.2em] lg:tracking-[0.35em] text-white mb-5'>PAGE NOT FOUND</p>
      <p className='font-Inter font-600 text-1xl mb-2 text-white opacity-80'>Are you lost?</p>
      <button onClick={()=>navigate("/")} className='w-36 h-10 bg-main-color rounded-lg hover:bg-main-hover text-white font-Inter font-400'>Back to Home</button>
    </div>
  )
}
