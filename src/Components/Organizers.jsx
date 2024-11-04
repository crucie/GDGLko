import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const organizersData = [
  {
    name: 'John Doe',
    designation: 'Lead Organizer',
    profile: 'https://example.com/profile1.jpg',
    socialLinks: {
      twitter: 'https://twitter.com/example1',
      linkedin: 'https://linkedin.com/in/example1',
      github: 'https://github.com/example1',
    },
  },
];

export function Organizers() {
  return (
    <div className="organizers-section px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Meet Our Organizers</h2>
      <Splide options={{ pagination: false, arrows: false }}>
        {organizersData.map((organizer, index) => (
          <SplideSlide key={index}>
            <div className="p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
              <img
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-400"
                src={organizer.profile}
                alt={organizer.name}
              />
              <h3 className="text-center text-xl font-semibold text-gray-800">{organizer.name}</h3>
              <p className="text-center text-sm text-gray-600 mb-4">{organizer.designation}</p>
              <div className="flex justify-center space-x-4">
                <a href={organizer.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 transition" />
                </a>
                <a href={organizer.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href={organizer.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-gray-800 hover:text-gray-600 transition" />
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Organizers;
