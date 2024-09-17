import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

import backgroundMusic from './assets/Mille Lire Al Mese.mp3'; // Background music file
import CustomNavbar from './components/CustomNavbar'; // Import the new Navbar component
import Introduction from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

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

  // Function to play audio
  const playAudio = () => {
    if (audio) {
      audio.play()
        .then(() => {
          showMusicNotification(); // Show toast when music starts
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
        });
    }
  };

  useEffect(() => {
    // Create audio instance
    const audioInstance = new Audio(backgroundMusic);
    setAudio(audioInstance);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleUserInteraction = () => {
    // Store user interaction in localStorage
    localStorage.setItem('hasInteracted', 'true');
    // Play audio
    playAudio();
    // Remove event listener after interaction
    window.removeEventListener('click', handleUserInteraction);
  };

  useEffect(() => {
    const hasInteracted = localStorage.getItem('hasInteracted');

    if (!hasInteracted) {
      // Add event listener to trigger audio playback on first user click
      window.addEventListener('click', handleUserInteraction);
    }
  }, [audio]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="mx-auto">
      <CustomNavbar /> {/* Use the CustomNavbar component here */}

      {/* The components of the website with animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Introduction />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Training />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Education />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ContactUs />
      </motion.div>

      <Footer />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default App;
