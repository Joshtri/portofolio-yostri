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

  const linkStyle = "text-white px-3 py-2 rounded transition-all duration-300";
  const activeLinkStyle = "bg-gradient-to-r from-blue-900 to-blue-700 font-semibold shadow-lg transform scale-110"; // Enlarged active link style

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar className="bg-gradient-to-r from-gray-900 to-gray-700">
        <Navbar.Brand href="#">
          <span className="text-2xl font-bold text-white">My Portfolio</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link
            href="#biography"
            className={`${linkStyle} ${activeSection === 'biography' ? activeLinkStyle : ''}`}
          >
            Biography
          </Navbar.Link>
          <Navbar.Link
            href="#skills"
            className={`${linkStyle} ${activeSection === 'skills' ? activeLinkStyle : ''}`}
          >
            Skills
          </Navbar.Link>
          <Navbar.Link
            href="#projects"
            className={`${linkStyle} ${activeSection === 'projects' ? activeLinkStyle : ''}`}
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            href="#training"
            className={`${linkStyle} ${activeSection === 'training' ? activeLinkStyle : ''}`}
          >
            Certificates
          </Navbar.Link>

          <Navbar.Link
            href="#education"
            className={`${linkStyle} ${activeSection === 'education' ? activeLinkStyle : ''}`}
          >
            Education
          </Navbar.Link>

          <Navbar.Link
            href="#contact"
            className={`${linkStyle} ${activeSection === 'contact' ? activeLinkStyle : ''}`}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
