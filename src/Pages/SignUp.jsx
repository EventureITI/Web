import React, { useState } from "react";
import { Link } from "react-router-dom";
import EyeIcon from "../Components/Icons/EyeIcon";
import EyeSlashIcon from "../Components/Icons/EyeSlashIcon";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
      {/* <Layout> */}
      <div className="flex flex-col md:flex-row md:justify-between justify-center h-screen bg-bg-main">
        <div className="hidden relative w-2/5 md:flex justify-center items-center bg-[url('/images/signupbg.jfif')] bg-cover bg-center px-10 lg:px-24">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-center font-Inter items-center gap-5 w-full">
            <p className="relative text-center text-white text-xl font-600">
              Already Registered?
            </p>
            <p className="text-white font-400 text-xs text-center">
              Sign in to manage your bookings and explore more events
            </p>
            <Link to="/login" className="block w-full">
              <button className="p-2 w-full rounded-lg text-white font-600 relative border border-main-color">
                <div className="absolute inset-0 bg-sec-color hover:opacity-100 transition duration-500 ease-in-out opacity-50 rounded-lg"></div>
                <span className="relative z-10">Sign In</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center px-8 lg:px-28">
          <form className="flex flex-col w-full gap-6 font-Inter ">
            <div className="text-center text-white text-xl font-600">
              Create a new account
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="w-full">
                <label
                  htmlFor="fname"
                  className="block text-base font-500 text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First name"
                  style={{ caretColor: "#4FE0D2" }}
                  className="mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="lname"
                  className="block text-base font-500 text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last name"
                  style={{ caretColor: "#4FE0D2" }}
                  className="mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
                />
              </div>
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
                className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="cpassword"
                className="block text-base font-500 text-white"
              >
                Confirm password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                style={{ caretColor: "#4FE0D2" }}
                className="mt-1 rounded-lg bg-input p-3 w-full text-white text-base font-400 shadow-custom-shadow focus:outline-none focus:ring-1 focus:ring-main-color focus:border-main-color"
              />
              <div
                className="absolute inset-y-0 top-7 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </div>
            </div>
            <div>
              <button className="bg-main-color p-3 w-full rounded-lg text-white font-600">
                Sign Up
              </button>
            </div>
            <div className="md:hidden -mt-4 font-300 text-white">
              Already have an account?
              <Link to="/login" className="pl-1 w-full">
                <span className="hover:underline transition duration-500 ease-in-out text-main-color cursor-pointer">
                  Sign In
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
}
