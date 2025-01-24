import React, { useState, useEffect } from 'react';
import starsVideo from '../assets/stars.mp4';
import imgIntro from '../assets/87437837853.jpg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './flip.css';

const Biography: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false);
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true); // Trigger the flip-out animation
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Update the role
        setAnimateOut(false); // Trigger the flip-in animation
      }, 300); // Half of the flip duration
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="biography">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={starsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-8 sm:px-16 lg:px-32 text-white">
          <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-8">
            {/* Text Section */}
            <div className="text-left max-w-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 whitespace-nowrap">
                Hello, I'm <span className="text-blue-400">Yosry Lenggu</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
                And I'm{' '}
                <span
                  className={`inline-block text-red-500 flip-transition ${
                    animateOut ? 'flip-out' : 'flip-in'
                  }`}
                >
                  {roles[roleIndex]}
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                Graduated with a Bachelor's degree in Computer Science from Nusa Cendana University in 2020. Possesses programming and web development skills using various languages and frameworks.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/arpakhsad-j-s-lenggu-771242201/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-2xl text-blue-600">
                    <FaLinkedin />
                  </i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-2xl text-blue-700">
                    <FaFacebook />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/yosryy_lenggu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="text-2xl text-pink-500">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>

            {/* Rounded Image Section */}
            <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56">
              <img
                src={imgIntro}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Background overlay to darken the video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </section>
  );
};

export default Biography;
