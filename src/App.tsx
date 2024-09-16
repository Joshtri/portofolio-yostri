import React from 'react';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Introduction from './components/Introduction';
import CustomNavbar from './components/CustomNavbar'; // Import the new Navbar component

function App() {
  return (
    <div className="mx-auto">
      <CustomNavbar /> {/* Use the CustomNavbar component here */}

      <Introduction />
      <main className='mx-auto p-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-gradient'>
        {/* <Biography /> */}
        <Skills />
        <Projects />
        <Training />
      </main>
    </div>
  );
}

export default App;
