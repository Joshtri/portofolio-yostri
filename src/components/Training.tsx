import React from 'react';
import { FaEye } from 'react-icons/fa'; // Importing the eye icon from React Icons
import trainingData from '../data/training.json'; // Importing static JSON data
import starsVideo from '../assets/stars.mp4';

const Training: React.FC = () => {
  return (
    <section id="training" className="relative pb-24 pt-15 p-10">
      {/* Background video */}
      <video
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src={starsVideo} // Path to the video you're using
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingData.map((training) => (
            <div
              key={training.id}
              className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-md mb-4">
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{training.title}</h3>
              <p className="text-gray-300">{training.description}</p>

              {/* Hover Effect - Eye Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity">
                <FaEye className="h-10 w-10 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
