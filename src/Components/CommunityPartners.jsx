import React from 'react';
import gdgImage from '../assets/gdgLogo.svg'; 


const partnerLogos = [
  gdgImage,
  gdgImage,
  gdgImage,
  gdgImage,
  gdgImage,
  // Add more logo URLs as needed
];

export function CommunityPartners() {
  return (
    <div className="community-partners-section px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">Our Community Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-white">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPartners;
