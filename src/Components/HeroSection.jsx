// ./Components/HeroSection.jsx
import React from "react";
import { IconButton } from "@material-tailwind/react";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 ">
      <h1 className="text-4xl font-bold text-blue-gray-900 mb-6">
        Google Developer Group Lucknow
      </h1>
      <div className="flex items-center gap-6">
        <a href="https://twitter.com/gdglko" target="_blank" rel="noopener noreferrer">
          <IconButton className="text-blue-400 text-xl" variant="outlined">
            <i className="fab fa-twitter" />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/company/google-developer-groups-lucknow" target="_blank" rel="noopener noreferrer">
          <IconButton className="text-blue-700 text-xl" variant="outlined">
            <i className="fab fa-linkedin-in" />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/gdglucknow" target="_blank" rel="noopener noreferrer">
          <IconButton className="text-pink-600 text-xl " variant="outlined">
            <i className="fab fa-instagram" />
          </IconButton>
        </a>
        <a href="https://t.me/joinchat/AgOwMk_6J3JjYTQ9" target="_blank" rel="noopener noreferrer">
          <IconButton className=" text-blue-700 text-xl" variant="outlined">
            <i className="fab fa-telegram" />
          </IconButton>
        </a>
      </div>
    </div>
  );
}
