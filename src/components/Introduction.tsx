import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import starsVideo from '../assets/stars.mp4';
import imgIntro from '../assets/87437837853.jpg';
import backgroundMusic from '../assets/Mille Lire Al Mese.mp3'; // Background music file

const Introduction: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Frontend', 'Backend', 'Full Stack']; // Add more roles if needed

  // Toast notification to show music information
  const showMusicNotification = () => {
    toast.dark(`🎵 Now Playing: 'Mille Lire Al Mese' by Enzo Orefice trio | Duration: 2:55`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    // Function to play audio after user interaction
    const playAudioOnInteraction = () => {
      const audio = new Audio(backgroundMusic);

      // Attempt to play the audio
      audio.play()
        .then(() => {
          showMusicNotification(); // Show toast when music starts
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
        });
      
      // Remove the event listener after the interaction
      window.removeEventListener('click', playAudioOnInteraction);
    };

    // Add event listener to trigger audio playback on first user click
    window.addEventListener('click', playAudioOnInteraction);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', playAudioOnInteraction);
    };
  }, []);

  return (
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
              And I'm <span className="text-red-500">{roles[roleIndex]}</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Active student in Semester 9 of the Computer Science
              Undergraduate Study Program at Nusa Cendana University in 2020. Has
              programming and web development skills using various languages and
              frameworks.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/arpakhsad-j-s-lenggu-771242201/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/facebook/0866FF" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/yosryy_lenggu/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-8 h-8" />
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

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default Introduction;
