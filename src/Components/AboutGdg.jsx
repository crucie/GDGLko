import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faGoogle, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Importing named components
import '@splidejs/react-splide/css'; // Importing the CSS for Splide

function AboutGdg() {
  // Sample tech icons for the slider
  const techIcons = [
    { icon: faAndroid, label: 'Android' },
    { icon: faGoogle, label: 'Google' },
    { icon: faYoutube, label: 'YouTube' },
    { icon: faGithub, label: 'GitHub' },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">About Google Developer Group (GDG)</h2>
      <p className="text-slate-600 mb-4">
        Joining a Google Developer Group (GDG) offers you a unique opportunity to connect with fellow tech enthusiasts and developers in your area. GDG meetups feature a diverse array of topics, from insightful talks to hands-on workshops, all designed to help you build and sharpen your technical skills.
      </p>
      <p className="text-slate-600 mb-4">
        Our community stands out for its inclusive and welcoming atmosphere, inviting everyone from beginners to seasoned professionals. Whether you're just starting out in tech or looking to expand your expertise, GDG is a place for growth, learning, and collaboration.
      </p>
      <h3 className="text-2xl font-semibold text-slate-800 mb-3">What is a GDG?</h3>
      <p className="text-slate-600 mb-4">
        Google Developer Groups (GDGs) are dedicated communities for those interested in Google's developer technologies. From platforms like Android, Chrome, and Google Cloud, to APIs such as Maps, YouTube, and Cast, GDGs offer something for everyone.
      </p>
      <p className="text-slate-600 mb-4">
        A GDG event can range from casual meetups with tech talks to hackathons and large-scale gatherings featuring workshops and demos. Regardless of the format, GDGs maintain a focus on developers and technical content, fostering an environment for continuous learning.
      </p>
      <p className="text-slate-600 mb-4">
        <strong>GDG Lucknow</strong> is proud to be a part of this global community, welcoming participants from around the world to learn, share, and grow together.
      </p>

      <div className="mt-12 flex justify-center">
  <div className="max-w-screen-sm w-full">
    <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Technologies We Talk About</h2>
    <Splide
      options={{
        type: 'loop',
        perPage: 5,
        arrows:false,
        autoplay:true,
        pagination: false,
        gap: '1rem',
        breakpoints: {
          1024: { perPage: 5 },
          768: { perPage: 4 },
          480: { perPage: 3 },
        },
      }}
    >
      {techIcons.map((tech, index) => (
        <SplideSlide key={index}>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={tech.icon} className="h-16 w-16 text-slate-800" />
            <span className="block mt-2 text-slate-600">{tech.label}</span>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
</div>
    </section>
  );
}

export default AboutGdg;
