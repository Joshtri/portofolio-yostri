import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 opacity-75"></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; 2024 Yosry Lenggu. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
