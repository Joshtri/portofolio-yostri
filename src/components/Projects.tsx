import React, { useEffect, useRef } from 'react';
import { Card } from 'flowbite-react';
import { ProjectProps } from '../types/ProjectProps';
import projectsData from '../data/projects.json'; // Import the JSON data
import './noScrollBar.css';
import './aurora.css';
import starsVideo from '../assets/stars.mp4';

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
    <section id="projects" className="relative p-4 text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src={starsVideo} // Replace with the path to your video file
        autoPlay
        muted
        loop
      ></video>

      <h2 className="text-3xl font-semibold mb-4 text-white text-center">Projects</h2>
      <div className="overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto no-scrollbar">
          {/* Duplicate content for infinite scroll effect */}
          {[...projectsData, ...projectsData].map((project: ProjectProps, index) => (
            <div key={index} className="flex-shrink-0 w-96 bg-opacity-70">
              <Card className="h-full flex flex-col justify-between bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg rounded-lg transition transform hover:scale-95 hover:shadow-2xl border-none focus:outline-none ">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-36 object-cover rounded-t-lg"
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
                  <a
                    href={project.link}
                    className="text-blue-400 hover:underline text-xs mt-auto focus:outline-none"
                  >
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
