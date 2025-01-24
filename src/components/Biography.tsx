import React, { useState, useEffect } from 'react';
import starsVideo from '../assets/stars.mp4';
import imgIntro from '../assets/87437837853.jpg';
import { FaDownload, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './flip.css';
import cvArpakhsad from '../assets/CV - Arpakhsad Joshtri Sugiatma Lenggu (3).pdf';
import { IoLocationOutline } from "react-icons/io5";

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
      <div className="relative w-full min-h-screen overflow-hidden">
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
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 sm:px-16 lg:px-48 py-12 text-white gap-16">
          {/* Rounded Image Section */}
          <div className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 max-w-full">
            <img
              src={imgIntro}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 break-words">
              Hello, I'm{' '}
              <span className="text-blue-400">
                Arpakhsad Joshtri Sugiatma Lenggu
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
              And I'm{' '}
              <span
                className={`inline-block text-red-500 flip-transition ${
                  animateOut ? 'flip-out' : 'flip-in'
                }`}
              >
                {roles[roleIndex]}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8">
              Graduated with a Bachelor's degree in Computer Science from Nusa Cendana University in 2020. Possesses programming and web development skills using various languages and frameworks.
            </p>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300">
            <span className="inline-block"><IoLocationOutline /></span> Based in <span className="text-green-400">Kec. Kelapa Lima, Kupang</span>
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/arpakhsad-j-s-lenggu-771242201/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="text-2xl text-blue-600">
                  <FaLinkedin />
                </i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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

            {/* Buttons Section */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Send Email Button */}
              <a
              href="mailto:stuffofyos1516@gmail.com?subject=Subject&body=Message"
              className="flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
              >
              <i className="mr-2">
                <FaEnvelope />
              </i>
              Send Email
              </a>
              {/* Download CV Button */}
              <a
              href={cvArpakhsad}  // Change the link to your CV
              download
              className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
              >
              <i className="mr-2">
                <FaDownload />
              </i>
              Download CV
              </a>
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
