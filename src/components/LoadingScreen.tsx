import React from 'react';
import './loadingSpin.css'; // Make sure to import your CSS file

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
      <div className="text-white text-lg">
        <div className="spinner"></div>
        <div className="mt-4">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
