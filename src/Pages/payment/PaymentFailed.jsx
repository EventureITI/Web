import React from 'react'

export default function PaymentFailed() {
  return (
    <div className="px-20 pb-16 pt-[114px] flex-col justify-center items-center gap-8 flex">
    <div className="w-[307px] h-[180px] ">
       <img src="/images/failed.svg" alt="" srcset="" /> 
    </div>
    <div className="w-[356px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-2xl font-bold font-['Inter']">Something Went Wrong</div>
        <div className="self-stretch text-center text-main-color text-base font-normal font-['Inter']">We couldn't process your payment. Please try again or contact support for assistance</div>
    </div>
    <div className="flex-col justify-center items-center gap-4 flex">
            <button className="w-[348px] h-[51px] flex justify-center items-center bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-4 px-6 rounded-2xl">Back To Event</button>
    </div>
    </div>
    )
}
