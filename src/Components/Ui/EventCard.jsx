import React from 'react';
import arw from '../../assets/Arrow.svg';
import grd from '../../assets/Grids.svg';

function EventCard({ event }) {
  return (
    <div className="block max-w-[100%] h-[300px] bg-white border-2 border-gray-300 rounded-2xl flex flex-row relative overflow-hidden">
      <div
        className="w-[35%] bg-red-400 rounded-xl m-2"
        style={{ backgroundImage: `url(${grd})` }}
      />
      <div className="w-[70%] h-[100%] flex flex-col pt-4 pb-4">
        
        {/* Responsive Date */}
        <span className="font-sans text-[clamp(1.5rem, 2vw + 1rem, 2.5rem)]">
          {event.date}
        </span>

        {/* Responsive Title */}
        <span className="font-sans font-bold text-[clamp(2rem, 4vw + 1rem, 3rem)] text-[#343434]">
          {event.title}
        </span>

        {/* Responsive Description */}
        <span className="text-[clamp(1rem, 2vw + 0.5rem, 1.5rem)]">
          {event.description}
        </span>

        {/* Responsive Venue */}
        <span className="font-bold font-sans text-[clamp(1.25rem, 2vw + 1rem, 2rem)]">
          {`Venue: ${event.venue}`}
        </span>

        <div className="flex bottom-0 h-[100%] items-end">
          <div className="flex flex-row justify-start w-[100%] h-[10%] bottom-0">
            <button className="flex flex-row items-center left-0">
              <img src={arw} alt="" className="max-w-[26px] block" />
              
              {/* Responsive 'View Details' Button */}
              <span className="text-[#2D82F1] font-bold font-sans text-[clamp(1rem, 2vw + 0.5rem, 1.5rem)]">
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Responsive 'Register' Button */}
      <button
        className="absolute top-1 right-1 rounded-tr-2xl rounded-bl-3xl w-[18%] h-[18%] border-b-4 border-r-4 active:border-r-0 active:border-b-0 active:border-l-4 active:border-t-4 border-[#414141] bg-[#2D82F1] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${grd})` }}
      >
        <span className="relative z-10 font-bold text-[clamp(1.5rem, 3vw + 1rem, 3rem)]">
          Register
        </span>
      </button>
    </div>
  );
}

export default EventCard;
