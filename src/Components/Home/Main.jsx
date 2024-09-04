import React from "react";
import CategoryBtn from "../CategoryBtn";
import BookButton from "./BookButton";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex justify-center w-full overflow-hidden bg-bg-main "
      style={{ maxHeight: "650px", minHeight: "350px" }}
    >

      <div className='w-full h-full overflow-hidden md:hidden' >
        <img className='w-full object-cover' style={{minHeight:"350px"}} src="/images/a85ed3aca34aadef77d9fa540d0a4d5e.jpeg" alt="eventImg" />
      </div>
      <div className='absolute bottom-0 w-full h-80 md:hidden' style={{background: "linear-gradient(360deg, rgba(26, 26, 26, 0.99) 30%, rgba(26, 26, 26, 0.90) 50%, rgba(26, 26, 26, 0.00) 100%)"}}></div>
      <div className='absolute bottom-0 w-full px-6  sm:container sm:mx-auto sm:px-4 md:hidden'>
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


      <div className="container mx-auto px-4 hidden md:flex w-full items-center text-center mb-5 ">

      <div className="hidden md:flex w-[500px] lg:w-[700px] xl:w-[800px] flex-col text-white font-Inter text-xl font-400 pt-20 h-80 items-center justify-evenly ">
        {/* <h2 className="text-main-hover">Experience the difference of expertly crafted events tailored to your vision, </h2>
        <p className=" text-2xl mb-5"> Let us handle the details while you enjoy the moment.</p> */}
        <h2 className="text-3xl opacity-60 tracking-[0.3em]">EVENTURE</h2>
        <p className="text-main-color text-2xl mb-4 hidden lg:block">  Your unforgettable event begins with us</p>
        <button onClick={()=>navigate("/events-page/all")} className="w-36 h-10 text-base rounded-lg bg-main-color hover:bg-main-hover transition-all duration-300 ease-in-out ">
          See Categories
        </button>

        
      </div>
          <div className="w-full rounded-2xl overflow-hidden mt-20 ">
        <video
          className="w-full"
          controls
          autoPlay
          muted
          loop

        >
          <source src="/Eventure.mp4" type="Video/mp4" />
          Sorry, seems that your browser doesn't support the video tag
        </video>
      </div>
      </div>
    </div>
  );
}
