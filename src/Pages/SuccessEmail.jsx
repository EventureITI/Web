import React from 'react'

export default function SuccessEmail() {
  return (
    <div className="px-20 pb-16 pt-[114px] flex-col justify-center items-center gap-8 flex">
    <div className="w-[200px] h-auto ">
       <img src="/images/positive-vote.png" alt="" srcset="" /> 
    </div>
    <div className="w-[356px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-2xl font-bold font-['Inter']">Message Successful</div>
        <div className="self-stretch text-center text-main-color text-base font-normal font-['Inter']">Thank you for completing your message</div>
    </div>
</div>

  )
}
