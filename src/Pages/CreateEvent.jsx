import { Button, Card, Checkbox, Typography, Input } from '@material-tailwind/react'
import React from 'react'
import { CalendarClear } from 'react-ionicons'

export default function CreateEvent() {
    return (
        <div className=" bg-gray-900">
            <div className="w-full max-w-xx rounded-lg  px-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10">
                <h2 className="text-[32px] text-white font-semibold mb-10">Create Event</h2>
                <form>
                    {/* Event Image */}
                    <div className="mb-4">
                        <label className="block text-white mb-2 text-base font-medium" >Event Image</label>
                        <div className="w-full h-56 bg-customGray rounded-xl flex items-center justify-center relative overflow-hidden">
                            <input id="dropzone-file" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                            <img
                                id="image-preview"
                                src="/Placeholder.svg"
                                alt="Event"
                                className="w-full h-full  object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    {/* Event Title */}
                    <div className="mb-4">
                        <label className="block text-white mb-2 text-base font-medium" htmlFor="eventTitle">Event Title</label>
                        <input className="w-full px-4 py-2 bg-customGray  text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" id="eventTitle" placeholder="Ah Gani" />
                    </div>
                    {/* Event Host */}
                    <div className="mb-4">
                        <label className="block text-white mb-2 text-base font-medium" htmlFor="eventHost">Event Host</label>
                        <input className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" id="eventHost" placeholder="Omar G Gani" />
                    </div>
                    {/* Event Location */}
                    <div className="mb-4">
                        <label className="block text-white mb-2 text-base font-medium" htmlFor="eventLocation">Event Location</label>
                        <input className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="text" id="eventLocation" placeholder="Sayapeti Si Sawi" />
                    </div>
                    {/* Ticket Price */}
                    <div className="mb-4">
                        <label className="block text-white mb-2 text-base font-medium" htmlFor="ticketPrice">Ticket Price</label>
                        <input className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500" type="number" id="ticketPrice" placeholder={700} />
                    </div>
                    {/* Start Time and End Time */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-white mb-2 text-base font-medium" htmlFor="startTime">Start Time</label>
                            <input className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 " type="time" id="startTime" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 text-base font-medium" htmlFor="endTime">End Time</label>
                            <input className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 " type="time" id="endTime" />
                        </div>
                    </div>
                    {/* Start Date and End Date */}
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block  text-white mb-2 text-base font-medium" htmlFor="startDate">Start Date</label>
                            <input className="w-full  px-4 py-2 bg-customGray text-white   rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none" type="date" id="startDate" />
                        </div>
                        <div>
                            <label className="block text-white mb-2 text-base font-medium" htmlFor="endDate">End Date</label>
                            <input className="w-full px-4 py-2 bg-customGray  text-white  rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none" type="date" id="endDate" placeholder="Select a date" />
                        </div>
                    </div>
                    {/* Event Description */}
                    <div className="mb-10">
                        <label className="block text-white mb-2 text-base font-medium" htmlFor="eventDescription">Event Description</label>
                        <textarea className="w-full px-4 py-2 bg-customGray text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 " id="eventDescription" rows={7} placeholder="Enter event description" defaultValue={""} />
                    </div>
                    {/* Create Event Button */}
                    <div className='flex justify-end  space-x-6'>
                        <button className=" w-[348px] bg-gray-900 text-white font-bold py-4 rounded-2xl border-2 border-teal-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500">Cancel</button>
                        <button className=" w-[348px] bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-2xl">Create Event</button>
                    </div>
                </form>
            </div>
        </div>


    )
}
