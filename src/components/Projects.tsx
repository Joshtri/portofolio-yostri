import React, { useEffect, useRef } from 'react';
import { Card } from 'flowbite-react';
import { ProjectProps } from '../types/ProjectProps';
import projectsData from '../data/projects.json'; // Import the JSON data
import './noScrollBar.css';
// import './aurora.css';
import starsVideo from '../assets/stars.mp4';
import { FaProjectDiagram,FaGithub } from "react-icons/fa";


const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        // Scroll ke kanan sebesar lebar card
        scrollRef.current.scrollBy({
          left: 384, // Width of the card (w-96 is 384px)
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

    const interval = setInterval(scroll, 6000); // Scroll setiap 6 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <section id="projects" className="relative p-6 text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src={starsVideo} // Replace with the path to your video file
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      <h2 className="text-5xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
      <FaProjectDiagram className='text-5xl text-green-400' />

        Projects
      </h2>
      <div className="overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto no-scrollbar">
          {/* Duplicate content for infinite scroll effect */}
          {[...projectsData, ...projectsData].map((project: ProjectProps, index) => (
            <div key={index} className="flex-shrink-0 w-96 bg-opacity-70">
              <Card className="h-full flex flex-col justify-between bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg rounded-lg transition transform hover:scale-95 hover:shadow-2xl border-none focus:outline-none">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-contain rounded-t-lg" // Increased height to h-48
                />
                <div className="p-3 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex space-x-2 mb-2">
                    {project.technologies?.map((tech, i) => (
                      <img
                        key={i}
                        src={tech.iconUrl}
                        alt={tech.name}
                        title={tech.name}
                        className="h-5 w-5"
                      />
                    ))}
                  </div>

                    View Project
                  
                  <a
                    href={project.link}
                    className="text-blue-400 hover:underline text-xs mt-auto focus:outline-none"
                  >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                <FaGithub className="h-10 w-10 text-white" />
              </div>
              </a>
                </div>
                {/* Hover Effect - Github Icon */}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;