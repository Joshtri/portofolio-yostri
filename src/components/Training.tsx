import React from 'react';
import { FaEye } from 'react-icons/fa'; // Importing the eye icon from React Icons
import { LiaCertificateSolid } from "react-icons/lia";
import starsVideo from '../assets/stars.mp4';

// Importing images
import webDevCertificate from "../assets/certificates/sertifikat-udemy-complete-web-dev.png";
import pythonCertificate from "../assets/certificates/sertifikat-kursus-python.png";
import webProgramming2023 from "../assets/certificates/sertifikat-web-pro-2023.png";
import webProgramming2024 from "../assets/certificates/workshop-web-programming-2024.png";
import adsCertificate from "../assets/certificates/sertifikat-ads.png";
import projectManagement from "../assets/certificates/sertifikat-dasar-manpro.png";
import selfDevelopment from "../assets/certificates/sertifikat-self-development.png";
import sqlCertificate from "../assets/certificates/sertifikat-sql.png";
import backendJavascript from "../assets/certificates/sertifikat-backend-pemula-js.png";

// Training data with images imported directly
const trainingData = [
  {
    id: 1,
    title: "Web Development 2024 Bootcamp",
    description: "The Complete 2024 Web Development Bootcamp with Dr. Angela Yu",
    image: webDevCertificate,
  },
  {
    id: 2,
    title: "Fundamental Python",
    description: "",
    image: pythonCertificate,
  },
  {
    id: 3,
    title: "Workshop Web Programming 2023",
    description: "",
    image: webProgramming2023,
  },
  {
    id: 4,
    title: "Workshop Web Programming 2024",
    description: "",
    image: webProgramming2024,
  },

  {
    id: 5,
    title: "Associate Data Scientist (Vocational School Graduate Academy)",
    description: "",
    image: adsCertificate,
  },

  {
    id: 6,
    title: "Belajar Dasar Manajemen Proyek",
    description: "",
    image: projectManagement,
  },

  {
    id: 7,
    title: "Belajar Strategi Pengembangan Diri",
    description: "",
    image: selfDevelopment,
  },

  {
    id: 8,
    title: "Belajar Dasar Structured Query Language (SQL)",
    description: "",
    image: sqlCertificate,
  },

  {
    id: 9,
    title: "Belajar Back-End Pemula dengan Javascript",
    description: "",
    image: backendJavascript,
  },
];

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
        <h2 className="text-5xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-2">
          <LiaCertificateSolid className="text-5xl text-blue-600" /> {/* Add icon with styling */}
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingData.map((training) => (
            <div
              key={training.id}
              className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg rounded-lg p-6 transition transform hover:scale-100 hover:shadow-2xl"
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
