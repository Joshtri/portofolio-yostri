import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl text-blue-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
  { name: 'Laravel', icon: <FaLaravel className="text-6xl text-red-600" /> },
  { name: 'PHP', icon: <FaPhp className="text-6xl text-purple-500" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-6xl text-purple-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-6xl text-yellow-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-6xl text-blue-800" /> },
  { name: 'React', icon: <FaReact className="text-6xl text-blue-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-6xl text-orange-700" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center p-6 shadow-lg transform transition hover:scale-105"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
