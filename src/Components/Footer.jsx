import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full py-6"
      style={{
        backgroundColor: "#1A1A1A",
        borderTop: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="sm:container sm:mx-auto px-4 flex justify-center md:justify-between">
        <div className="hidden md:flex md:flex-col md:justify-between">
          <div
            className="text-white hidden md:block md:text-md md:text-lg lg:text-xl md:w-[450px] lg:w-full font-semibold"
            style={{ maxWidth: "560px", fontFamily: "Inter", fontWeight: 400 }}
          >
            <p>
            Bringing people together through seamless event planning and
            effortless ticketing, trusted by thousands."
            </p>
          </div>
          <div
            className="flex justify-between w-56 text-xs text-zinc-500 mt-16"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            <button className="hover:underline hover:text-main-color">
              Privacy policy
            </button>
            <button className="hover:underline hover:text-main-color">
              Terms of service
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-36 md:h-auto md:items-end text-gray-300 pl-7 ">
          <div className="flex text-sm pt-1 lg:text-base">
            <button onClick={()=>navigate("/")} className="hover:text-teal-500 lg:mb-0">Home</button>
            <p className="px-2">/</p>
            <button onClick={()=>navigate("/contact")} className="hover:text-teal-500 lg:mb-0">
              Event Hosting
            </button>
            <p className="px-2">/</p>
            <button className="hover:text-teal-500">About Us</button>
          </div>
          <div className="flex justify-between w-32 lg:w-40 py-5 transition duration-300 ease-in-out">
            <button className="hover:scale-110 transition ease-in-out">
              <img
                className="w-7 lg:w-8"
                src="/images/facebook.svg"
                alt="facebookLogo"
              />
            </button>
            <button className="hover:scale-110 transition ease-in-out">
              <img
                className="w-7 lg:w-8"
                src="/images/x.svg"
                alt="twitterLogo"
              />
            </button>
            <button className="hover:scale-110 transition ease-in-out">
              <img
                className="w-7 lg:w-8"
                src="/images/instagram.svg"
                alt="instagramLogo"
              />
            </button>
          </div>
          <div
            className="flex md:hidden justify-between w-60 text-xs text-zinc-500"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            <button className="hover:underline hover:text-main-color">
              Privacy policy
            </button>
            <button className="hover:underline hover:text-main-color">
              Terms of service
            </button>
            <p
              className="text-xs text-zinc-500"
              style={{ fontFamily: "Inter", fontWeight: 400 }}
            >
              © 2024
            </p>
          </div>
          <p
            className="hidden md:block text-xs text-zinc-500"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            © 2024
          </p>
        </div>
      </div>
    </div>
  );
}
