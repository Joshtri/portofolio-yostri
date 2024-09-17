// import React from 'react';
// import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Introduction from './components/Introduction';
import CustomNavbar from './components/CustomNavbar'; // Import the new Navbar component
import Education from './components/Education';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="mx-auto">
      <CustomNavbar /> {/* Use the CustomNavbar component here */}

      <Introduction />
      <Skills />
      <Projects />
      <Training />
      <Education/>
      <ContactUs/>


      <Footer/>
      

    </div>
  );
}

export default App;
