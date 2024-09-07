import React from 'react';
import formatDate from '../utils/formatDayAndYear';

export default function TicketItem({ imgUrl, title, myDate, startTime, endTime, price }) {
 
  const day = formatDate(myDate)['day'];
  const year = formatDate(myDate)['year'];
  
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="self-stretch p-4 sm:p-6 bg-ticket rounded-2xl flex flex-col md:flex-row justify-start items-start gap-4 md:gap-8">
        {/* Image with responsive width and height */}
        <img className="w-full md:w-[300px] lg:w-[380px] h-auto rounded-[10px]" src={imgUrl} alt="Ticket" />
    
        <div className="grow shrink basis-0 self-stretch py-2 sm:py-4 flex flex-col justify-between items-start">
          {/* Title and time section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch text-white text-lg sm:text-xl lg:text-2xl font-bold">{title}</div>
            <div className="self-stretch text-main-color text-sm sm:text-base font-normal">
              {day}, {year} - {startTime} - {endTime}
            </div>
            <div className="self-stretch text-main-color text-sm sm:text-base font-normal">Quantity: 1</div>
          </div>

          {/* Price and total section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch h-[0px] border border-main-color"></div>
            <div className="self-stretch flex justify-between items-center">
              <div className="text-white text-sm sm:text-base font-medium">Total paid</div>
              <div className="text-white text-sm sm:text-base font-medium">{price} EGP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
