import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import backgroundMusic from './assets/Mille Lire Al Mese.mp3'; // Background music file
import CustomNavbar from './components/CustomNavbar'; // Import the new Navbar component
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {

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
    // Function to play audio
    const playAudio = () => {
      const audio = new Audio(backgroundMusic);
      audio.play()
        .then(() => {
          showMusicNotification(); // Show toast when music starts
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
        });
    };

    // Check if the user has previously interacted (stored in localStorage)
    const hasInteracted = localStorage.getItem('hasInteracted');

    // If the user has already interacted, autoplay the music
    if (hasInteracted) {
      playAudio();
    } else {
      // Function to play audio after user interaction
      const playAudioOnInteraction = () => {
        playAudio();

        // Store user interaction in localStorage so audio can autoplay in the future
        localStorage.setItem('hasInteracted', 'true');
        
        // Remove the event listener after the interaction
        window.removeEventListener('click', playAudioOnInteraction);
      };

      // Add event listener to trigger audio playback on first user click
      window.addEventListener('click', playAudioOnInteraction);
    }
  }, []);

  return (
    <div className="mx-auto">
      <CustomNavbar /> {/* Use the CustomNavbar component here */}
      
      {/* The components of the website */}
      <Introduction />
      <Skills />
      <Projects />
      <Training />
      <Education />
      <ContactUs />
      
      <Footer />

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default App;
