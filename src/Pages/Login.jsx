import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {/* <Layout> */}
      <div className="flex flex-col md:flex-row md:justify-between justify-center h-screen bg-bg-main">
        <div className="w-full md:w-3/5 flex justify-center items-center px-8 lg:px-28">
        <div role="button" onClick={()=>navigate("/")} className="text-2xl font-semibold whitespace-nowrap text-main-color hover:text-main-hover absolute top-8">Eventure</div>
          <form className="flex flex-col w-full gap-8 font-Inter ">
            <div className="text-center text-white text-xl font-600">
              Sign in to your account
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-500 text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                style={{ caretColor: "#4FE0D2" }}
                className="mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-base font-500 text-white"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                style={{ caretColor: "#4FE0D2" }}
                className="mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </div>
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-main-color font-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button className="bg-main-color hover:bg-main-hover transition duration-300 ease-in-out p-3 w-full rounded-lg text-white font-600">
                Sign In
              </button>
            </div>
            <div className="md:hidden -mt-4 font-300 text-white">
              Don’t have an account?
              <Link to="/signup" className="pl-1 w-full">
                <span className="hover:underline transition duration-300 ease-in-out text-main-color cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden relative w-2/5 md:flex justify-center items-center bg-[url('/images/loginbg.jfif')] bg-cover bg-center px-10 lg:px-24">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-center font-Inter items-center gap-5 w-full">
            <p className="relative text-white text-xl font-600">New User?</p>
            <p className="text-white font-400 text-xs text-center">
              Start your journey to unforgettable experiences today
            </p>
            <Link to="/signup" className="block w-full">
              <button className="p-2 w-full rounded-lg text-white font-600 relative border border-main-color">
                <div className="absolute inset-0 bg-sec-color hover:opacity-100 transition duration-300 ease-in-out opacity-50 rounded-lg"></div>
                <span className="relative z-10">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
}
