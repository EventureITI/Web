import React from 'react'

export default function PaymentSuccess() {
  return (
    <div className="px-20 pb-16 pt-[114px] flex-col justify-center items-center gap-8 flex">
    <div className="w-[307px] h-[225px] ">
       <img src="/images/success.svg" alt="" srcset="" /> 
    </div>
    <div className="w-[356px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-2xl font-bold font-['Inter']">Payment Successful</div>
        <div className="self-stretch text-center text-main-color text-base font-normal font-['Inter']">Your event ticket has been booked and is available in your profile</div>
    </div>
    <div className="flex-col justify-center items-center gap-4 flex">
            <button className="w-[348px] h-[51px] flex justify-center items-center bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-4 px-6 rounded-2xl">View My Tickets</button>
            <button className=" w-[348px]   h-[51px]  flex justify-center items-center text-white font-bold py-4 px-6 transition duration-300 ease-in-out rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500">Back To Event</button>
    </div>
</div>
  )
}
