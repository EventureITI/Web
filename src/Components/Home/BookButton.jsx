import React from "react";
import { Link } from "react-router-dom";

export default function BookButton({ id }) {
  return (
    <Link
      to={`/event-details/${id}`}
      className="flex transition duration-300 ease-in-out items-center bg-main-color text-white rounded-lg h-10 sm:btn text-xs sm:text-sm md:text-base px-2 w-full sm:w-40 font-medium md:w-40 md:h-6 md:font-semibold border-none sm:text-white sm:bg-main-color hover:bg-main-hover"
    >
      Book A Ticket
      <div>
        <img
          className="w-5 ml-2 sm:ml-0"
          src="/images/Ticket.svg"
          alt="ticketIcon"
        />
      </div>
    </Link>
  );
}
