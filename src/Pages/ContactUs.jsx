import React from "react";
import BackTop from "../Components/BackTop";

export default function ContactUs() {
  return (
    <div className=" bg-bg-main ">
      <div className="w-full max-w-xx container mx-auto rounded-lg px-4 pt-20 pb-8">
        <h2 className="text-[32px] text-white font-semibold mb-6">
          Contact Us
        </h2>
        <form>
          {/* Name  */}
          <div className="mb-6">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-3 bg-input  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              id="name"
              placeholder="Your Name or Organization"
            />
          </div>

          {/* Email  */}
          <div className="mb-6">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 bg-input  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              id="email"
              placeholder="Your Email Adddress"
            />
          </div>

          {/* Subject  */}
          <div className="mb-6">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="w-full px-4 py-3 bg-input  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              id="subject"
              placeholder="Contact or Event Subject"
            />
          </div>

          {/* Event Description */}
          <div className="mb-6">
            <label
              className="block text-white mb-2 text-base font-medium"
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <textarea
              className="w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="eventDescription"
              rows={7}
              placeholder="Please provide details about your event (e.g., date, time, location, type of event)"
              defaultValue={""}
            />
          </div>
          {/* Create Event Button */}
          <div className="flex justify-end  space-x-6">
            <button className=" w-full bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-2 px-6 rounded-2xl">
              Send
            </button>
          </div>
        </form>
      </div>
      <BackTop/>
    </div>
  );
}
