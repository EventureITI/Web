import React from "react";

export default function EventPrice({ price }) {
  return (
    <button className=" flex justify-center gap-2 mb-2 transition duration-300 ease-in-out items-center h-10 rounded-lg text-base w-32 font-semibold border-none text-white bg-zinc-600 hover:bg-zinc-700">
      <img className="w-5" src="/images/Ticket.svg" alt="ticketIcon" />
      {price} EGP
    </button>
  );
}
