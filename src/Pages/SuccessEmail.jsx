import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessEmail() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-main min-h-screen flex flex-col justify-center">
      <div className="px-20 pb-16 pt-[114px] flex-col justify-center items-center gap-8 flex">
        <div className="w-[200px] h-auto ">
          <img src="/images/positive-vote.png" alt="" />
        </div>
        <div className="w-[356px] flex-col justify-start items-center gap-4 flex">
          <div className="text-center text-white text-2xl font-bold font-['Inter']">
            Message Successful
          </div>
          <div className="self-stretch text-center text-main-color text-base font-normal font-['Inter']">
            Thank you for completing your message
          </div>
          <button
            onClick={() => navigate("/")}
            className="p-2 w-36 rounded-lg text-white font-600 relative border border-main-color hover:bg-main-hover"
          >
            <div className="bg-sec-color hover:opacity-100 transition duration-300 ease-in-out opacity-50 rounded-lg"></div>
            <span className="relative z-10">Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
