import React from 'react';

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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center p-4 shadow-lg transform transition hover:scale-105"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <p className="mt-4 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
