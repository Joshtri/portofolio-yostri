import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Icons for education and experience

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <FaGraduationCap className="inline-block mr-2 text-yellow-500" />
            Education & Experience
            <FaBriefcase className="inline-block ml-2 text-blue-500" />
          </h2>
          <p className="mt-4 text-gray-400">
            This section highlights my educational background and my experiences during college and school.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Education Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">
              <FaGraduationCap className="inline-block mr-2 text-yellow-500" /> Education
            </h3>
            <div className="space-y-8">
              {/* Education Item */}
              <div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full h-4 w-4"></div>
                  <h4 className="text-xl font-semibold">University of Nusa Cendana</h4>
                  <span className="text-gray-400">2020 - present</span>
                  <p className="mt-2 text-gray-300">
                    Study various aspects of computer science, including algorithms, data structures, software engineering, web programming, and computer networks.
                  </p>
                </div>
              </div>
              {/* More Education Items */}
              <div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full h-4 w-4"></div>
                  <h4 className="text-xl font-semibold">SMAN 7 Kupang City</h4>
                  <span className="text-gray-400">2017 - 2020</span>
                  <p className="mt-2 text-gray-300">
                    Complete general education with a focus on scientific material.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">
              <FaBriefcase className="inline-block mr-2 text-blue-500" /> Experience
            </h3>
            <div className="space-y-8">
              {/* Experience Item */}
              <div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 rounded-full h-4 w-4"></div>
                  <h4 className="text-xl font-semibold">Practical Work in Badan Pusat Statistik</h4>
                    <span className="text-gray-400">2022</span>
                    <p className="mt-2 text-gray-300">
                    During this program, I developed a profile website for the sub-district and created an information system for small and medium enterprises (SMEs) and residents. This involved using the latest web development technologies, including EJS, Bootstrap, JavaScript, and Javascript runtime engine like Node JS, to build responsive and user-friendly applications that support the needs of the local community.
                    </p>

                </div>
              </div>
              {/* More Experience Items */}
              {/* Add more items here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
