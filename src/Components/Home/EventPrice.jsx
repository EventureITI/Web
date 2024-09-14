import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventPrice({ price, id }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/event-details/${id}`)}
      className=" flex justify-center gap-2 mb-2 transition duration-300 ease-in-out items-center h-10 rounded-lg text-base w-32 font-semibold border-none text-white bg-main-color hover:bg-main-hover"
    >
      <img className="w-5" src="/images/Ticket.svg" alt="ticketIcon" />
      {price} EGP
    </button>
  );
}
