import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PrevEvents from '../Data/PrevEvents.json';
import OtherEvent from './Ui/OtherEvent';



function PastEvents() {
  return (
    <section className="py-12 max-w-7xl mx-auto" id='upcomingevents'>
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Past Events</h2>
      
      {PrevEvents.length > 2 ? (
        <Splide
          options={{
            type: 'loop',
            perPage: 2,
            speed: 1000,
            easing: 'ease', 
            gap: '1rem',
            breakpoints: {
              1024: { perPage: 2 }, // Large screens: 2 cards
              768: { perPage: 1 },   // Medium screens: 1 card
              480: { perPage: 1 },   // Small screens: 1 card
            },
          }}
        >
          {PrevEvents.map((event, index) => (
            <SplideSlide key={index}>
              <OtherEvent event={event} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PrevEvents.map((event, index) => (
            <OtherEvent key={index} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PastEvents;
