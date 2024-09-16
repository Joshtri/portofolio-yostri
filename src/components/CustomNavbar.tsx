import React, { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';

const CustomNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('biography');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this to your liking
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar className="bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar.Brand href="#">
          <span className="text-2xl font-bold text-white">My Portfolio</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link
            href="#biography"
            className={`text-white ${
              activeSection === 'biography' ? 'font-bold' : ''
            }`}
          >
            Biography
          </Navbar.Link>
          <Navbar.Link
            href="#skills"
            className={`text-white ${
              activeSection === 'skills' ? 'font-bold' : ''
            }`}
          >
            Skills
          </Navbar.Link>
          <Navbar.Link
            href="#projects"
            className={`text-white ${
              activeSection === 'projects' ? 'font-bold' : ''
            }`}
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            href="#training"
            className={`text-white ${
              activeSection === 'training' ? 'font-bold' : ''
            }`}
          >
            Training
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
