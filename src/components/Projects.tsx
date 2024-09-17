import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import { ProjectProps } from '../types/ProjectProps';
import projectsData from '../data/projects.json'; // Import the JSON data
import './noScrollBar.css';
import starsVideo from '../assets/stars.mp4';
import { FaProjectDiagram, FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cards per page

  // Calculate total pages
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  // Get current page projects
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section id="projects" className="relative pb-24 pt-15 p-10 text-white">
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

      <div className="relative z-10">
        <h2 className="text-4xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
          <FaProjectDiagram className='text-4xl text-green-400' />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProjects.map((project: ProjectProps, index) => (
            <div key={index} className="relative bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-2xl">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-md mb-3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-36 object-contain rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <div className="flex space-x-2 mb-2">
                {project.technologies?.map((tech, i) => (
                  <img
                    key={i}
                    src={tech.iconUrl}
                    alt={tech.name}
                    title={tech.name}
                    className="h-4 w-4"
                  />
                ))}
              </div>

              {/* Hover Effect - GitHub Icon */}
              <a href={project.link} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
                <FaGithub className="h-8 w-8 text-white" />
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-green-400 text-white' : 'bg-gray-800 text-gray-400'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
