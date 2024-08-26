import React from 'react'
import Footer from '../Components/Footer'

export default function ContactUs() {
  return (
    <div className=" bg-[#1A1A1A] ">
    <div className="w-full max-w-xx rounded-lg  px-6 2xl:px-40 xl:px-40 lg:px-40 md:px-20 pt-14 mb-8">
        <h2 className="text-[32px] text-white font-semibold mb-10">Contact Us</h2>
        <form>
            {/* Name  */}
            <div className="mb-8">
                <label className="block text-white mb-2 text-base font-medium" htmlFor="name">Name</label>
                <input className="w-full px-4 py-2 bg-customGray  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" id="name" placeholder="Your Name or Organization" />
            </div>
 
            {/* Subject  */}
            <div className="mb-8">
                <label className="block text-white mb-2 text-base font-medium" htmlFor="subject">Subject</label>
                <input className="w-full px-4 py-2 bg-customGray  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" id="subject" placeholder="Contact or Event Subject" />
            </div>
 
          
            {/* Event Description */}
            <div className="mb-10">
                <label className="block text-white mb-2 text-base font-medium" htmlFor="eventDescription">Event Description</label>
                <textarea className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" id="eventDescription" rows={7} placeholder="Please provide details about your event (e.g., date, time, location, type of event)" defaultValue={""} />
            </div>
            {/* Create Event Button */}
            <div className='flex justify-end  space-x-6'>
                <button className=" w-full bg-[#4fdfd1] hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-2xl">Send</button>
            </div>
        </form>
    </div>
    <Footer/>
</div>
  )
}
