import React from 'react'
import CategoryBtn from '../CategoryBtn'
import BookButton from './BookButton'

export default function Main() {
  return (
    <div className='relative flex justify-center w-full overflow-hidden' style={{maxHeight:"650px",minHeight:"350px"}} >
      <div className='w-full h-full overflow-hidden ' >
        <img className='w-full object-cover' style={{minHeight:"350px"}} src="/images/a85ed3aca34aadef77d9fa540d0a4d5e.jpeg" alt="eventImg" />
      </div>
      <div className='absolute bottom-0 w-full h-80 ' style={{background: "linear-gradient(360deg, rgba(26, 26, 26, 0.99) 30%, rgba(26, 26, 26, 0.90) 50%, rgba(26, 26, 26, 0.00) 100%)"}}></div>
      <div className='absolute bottom-0 w-full px-6  sm:container sm:mx-auto sm:px-4'>
        <div className='mb-4 md:mb-6 w-12'>
        <CategoryBtn
              category={"Comedy"}
              path={"/events-page/comedy"}
              classes={"text-xs sm:text-sm"}
            />       
        </div>
        <div className='flex justify-between md:flex-col'>
          <div>

        <p className='text-2xl sm:text-3xl text-white mb-1 md:mb-3 font-bold'>Ain Gamal</p>
        <div className='flex flex-col relative mb-4 md:mb-6 sm:flex-row'>
            <p className='text-sm text-gray-400 sm:after:content-["_"] sm:after:w-1 sm:after:h-1 sm:after:bottom-2 sm:after:bg-gray-300 sm:after:absolute sm:after:ml-2 sm:after:rounded-lg mr-5'>Omar El Gamal</p>

            <p className='text-sm text-gray-400'>Ahmed Amin</p>
        </div>
          </div>
        <div className='mb-5 md:mb-16'>
            <BookButton/>
        </div>
        </div>
      </div>
    </div>
  )
}
