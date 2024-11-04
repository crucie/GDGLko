import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import EventCard from './Ui/EventCard';
import eventsData from '../Data/Events.json';

function UpcomingEvents() {
  return (
    <section className="py-12 max-w-7xl mx-auto" id='upcomingevents'>
      <h2 className="text-3xl font-bold text-slate-800 mb-8">Upcoming Events</h2>
      
      {eventsData.length > 1 ? (
        <Splide
        options={{
          type: 'slide',
          speed: 1000,
          easing: 'ease',
          direction: 'ttb', // Sets direction to top-to-bottom (vertical)
          height: '500px', // Adjusts height for 2 visible slides at a time
          perPage: 2, // Shows 2 cards at a time
          gap: '8rem',
          pagination: false, // Optional: hides pagination dots
          breakpoints: {
            768: { height: '300px', perPage: 1 }, // On smaller screens, show 1 slide vertically
          },
        }}
        className="splide-vertical" // Optional: custom class for styling
        >
          {eventsData.map((event, index) => (
            <SplideSlide key={index}>
              <EventCard event={event} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}

export default UpcomingEvents;
