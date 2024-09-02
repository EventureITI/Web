import React, { useEffect, useState } from 'react'
import Main from '../Components/Home/Main'
import Events from '../Components/Home/Events'
import CardsSkeleton from '../Components/Skeleton/CardsSkeleton'
import NavBarSkeleton from '../Components/Skeleton/NavBarSkeleton'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SeeMoreSkeleton from '../Components/Skeleton/SeeMoreSkeleton'
import FooterSkeleton from '../Components/Skeleton/FooterSkeleton'
import MainSkeleton from '../Components/Skeleton/MainSkeleton'

export default function Home() {
  const [skeleton,setSkeleton] = useState(false)
  const [home,setHome] = useState(false)

  useEffect(()=>{
    setSkeleton(true);
    setTimeout(()=>{
      setSkeleton(false)
      setHome(true)
    },1000)
  },[])
  return (
    <div>
      {skeleton && <div>
      <NavBarSkeleton/>
      <div className='w-full h-full bg-bg-main'>
        {/* <MainSkeleton/> */}
        <div className='container mx-auto px-4 pt-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <CardsSkeleton/>
            <CardsSkeleton/>
            <CardsSkeleton/>
            <CardsSkeleton/>
            <CardsSkeleton/>
            <CardsSkeleton/>
          </div>
            <SeeMoreSkeleton/>
            <FooterSkeleton/>
          </div>
        </div>
      </div>}
      {home && <div>
        <NavBar/>
        <Main/>
        <Events/>
        <Footer/>
      </div>}
    </div>
  )
}
