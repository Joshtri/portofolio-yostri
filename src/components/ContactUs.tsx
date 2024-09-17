import React from 'react';
import { FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import imgIntro from '../assets/87437837853.jpg';

const ContactUs: React.FC = () => {
  const handleSendEmail = () => {
    window.location.href = 'mailto:your-email@example.com'; // Replace with your email
  };

  const handleWhatsAppMessage = () => {
    window.open('https://wa.me/your-phone-number', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-gray-950 to-blue-900 opacity-90"></div>
      
      {/* Content */}
      <div className="bg-gray-900 p-9 rounded-lg shadow-md text-center">
        {/* Profile Picture */}
        <img
          src={imgIntro} // Replace with the correct image path
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">Feel Free to Reach Out</h2>
        <p className="text-gray-300">Let's start a productive conversation</p>

        {/* Send Email Button */}
        <button
          onClick={handleSendEmail}
          className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg flex items-center justify-center hover:bg-gray-600 transition mx-auto"
        >
          <FaEnvelope className="mr-2" />
          Send Email
        </button>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <FaWhatsapp
            onClick={handleWhatsAppMessage}
            className="text-2xl cursor-pointer hover:text-green-500 transition"
          />
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600 transition" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
          <FaGithub className="text-2xl cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </div>  
  );
};

export default ContactUs;
