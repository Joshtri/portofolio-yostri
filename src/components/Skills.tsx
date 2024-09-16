const Skills: React.FC = () => {
    return (
      <section id="skills" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-2">
            <li>Programming Languages: [e.g., JavaScript, Python]</li>
            <li>Frameworks: [e.g., React, Node.js]</li>
            <li>Tools: [e.g., Git, Docker]</li>
            <li>Databases: [e.g., MySQL, MongoDB]</li>
            <li>Others: [e.g., Agile methodology, REST APIs]</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Skills;
  