import React, { useEffect, useRef } from 'react';
import { Card } from 'flowbite-react';
import { ProjectProps } from '../types/ProjectProps';
import projectsData from '../data/projects.json'; // Import the JSON data

import './noScrollBar.css';

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        // Scroll ke kanan 200px
        scrollRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });

        // Jika scroll telah mencapai setengah dari total panjang
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          // Kembali ke awal tanpa transisi
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'auto',
          });
        }
      }
    };

    const interval = setInterval(scroll, 3000); // Scroll setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <section id="projects" className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto no-scrollbar">
          {/* Duplikat konten untuk memberikan efek loop */}
          {[...projectsData, ...projectsData].map((project: ProjectProps, index) => (
            <div key={index} className="flex-shrink-0 w-96">
              <Card className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-xs mb-2">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline text-xs">
                    View Project
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
