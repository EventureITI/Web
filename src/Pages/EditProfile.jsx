import React from "react";
import { EyeOff } from "react-ionicons";
import Footer from "../Components/Footer";

export default function EditProfile() {
  return (
    <div className=" bg-[#1A1A1A] px-50">
      <div className="w-full max-w-xx rounded-lg  px-6 2xl:px-40 xl:px-40 lg:px-40 md:px-40 sm:px-20 pt-28  mb-8">
        <h2 className="text-[32px] text-white font-semibold mb-6">
          Edit Profile
        </h2>
        <form>
          {/* First Name and Last Name */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div>
              <label
                className="text-base font-medium block text-white mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                className="w-full px-4 py-3 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="firstName"
                placeholder="First name"
                style={{ caretColor: "#4FE0D2" }}
              />
            </div>
            <div>
              <label
                className="block text-white mb-2 text-base font-medium"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                className="w-full px-4 py-3 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                id="lastName"
                placeholder="Last name"
                style={{ caretColor: "#4FE0D2" }}
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-8">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="eventTitle"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-customGray  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              id="email"
              placeholder="ahmed@gmail.com"
              style={{ caretColor: "#4FE0D2" }}
            />
          </div>
          {/* Password */}
          <div className="mb-8 relative">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-3 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
              type="password"
              id="password"
              placeholder="**********"
              style={{ caretColor: "#4FE0D2" }}
            />
            <span className="absolute inset-y-0  right-0 pr-3  flex items-center mt-6">
              <EyeOff color={"#858585"} height="24px" width="24px" />
            </span>
          </div>
          {/*Confirm Password */}
          <div className="mb-10 relative">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-3 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
              type="password"
              id="confirmPassword"
              placeholder="**********"
              style={{ caretColor: "#4FE0D2" }}
            />
            <span className="absolute inset-y-0  right-0 pr-3  flex items-center mt-6">
              <EyeOff color={"#858585"} height="24px" width="24px" />
            </span>
          </div>
          <div className="flex justify-end  space-x-6">
            <button className=" w-[348px] text-white font-bold py-3 rounded-2xl border-2 border-teal-500 hover:bg-[rgba(201,201,201,0.1)] focus:outline-none focus:ring-2 focus:ring-teal-500">
              Cancel
            </button>
            <button className=" w-[348px] bg-[#4fdfd1] hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-2xl">
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
