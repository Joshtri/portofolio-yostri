import React from 'react';
import starsVideo from '../assets/stars.mp4';
import { SiHyperskill } from "react-icons/si";

// Data for skills
const skillsData = [
  { name: 'Node JS', icon: 'https://cdn.simpleicons.org/Node.js/5FA04E' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/DD2C00' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Dotnet', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'EJS', icon: 'https://cdn.simpleicons.org/ejs/B4CA65' },
  { name: 'Bulma', icon: 'https://cdn.simpleicons.org/bulma/00D1B2' },
  { name: 'DaisyUI', icon: 'https://cdn.simpleicons.org/daisyui/5A0EF8' },
  { name: 'Bun', icon: 'https://cdn.simpleicons.org/bun/FFFFFf' },
];

// Skills component with video background
const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative text-white p-6 pb-44">
      {/* Background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src={starsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      <h2 className="text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
        <SiHyperskill className="text-4xl text-indigo-500" />
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 text-white rounded-md flex flex-col items-center justify-center p-2 shadow-md transform transition hover:scale-105"
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
            <p className="mt-1 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
