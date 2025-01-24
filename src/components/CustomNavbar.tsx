import React, { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';

const CustomNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('biography');
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
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

  const linkStyle = `text-white px-4 py-3 rounded-lg transition-all duration-300 hover:text-blue-400 hover:scale-105`;
  const activeLinkStyle = `bg-gradient-to-r from-blue-600 to-blue-400 font-semibold shadow-lg transform scale-110 text-white px-6 py-3 rounded-xl transition-all duration-300`;

  return (
    <header className="fixed w-full top-0 z-50 shadow-lg">
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg bg-opacity-90 transition-all duration-300"
      >
        <Navbar.Brand href="/">
          <span className="text-xl font-bold text-white hover:text-blue-400 transition-all duration-300">
            Arpakhsad Lenggu | Portfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} />
        <Navbar.Collapse
          className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:space-x-8 space-y-2 md:space-y-0`}
        >
          <Navbar.Link
            href="#biography"
            className={`${linkStyle} ${activeSection === 'biography' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Biography
          </Navbar.Link>
          <Navbar.Link
            href="#skills"
            className={`${linkStyle} ${activeSection === 'skills' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Skills
          </Navbar.Link>
          <Navbar.Link
            href="#projects"
            className={`${linkStyle} ${activeSection === 'projects' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Projects
          </Navbar.Link>
          <Navbar.Link
            href="#training"
            className={`${linkStyle} ${activeSection === 'training' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Certificates
          </Navbar.Link>
          <Navbar.Link
            href="#education"
            className={`${linkStyle} ${activeSection === 'education' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Education
          </Navbar.Link>
          <Navbar.Link
            href="#contact"
            className={`${linkStyle} ${activeSection === 'contact' ? activeLinkStyle : ''}`}
            onClick={handleLinkClick}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
