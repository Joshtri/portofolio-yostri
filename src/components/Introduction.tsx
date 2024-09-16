import React, { useState, useEffect } from 'react';

import starsVideo from '../assets/stars.mp4';

const Introduction: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Frontend', 'Backend', 'Full Stack']; // Add more roles if needed

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={starsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-8 sm:px-16 lg:px-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">Yosry Lenggu</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
          And I'm <span className="text-red-500">{roles[roleIndex]}</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-lg">
          Active student in Semester 6 of the Information Engineering
          Undergraduate Study Program at Dinamika Bangsa University in 2021. Has
          programming and web development skills using various languages and
          frameworks.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Background overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default Introduction;
