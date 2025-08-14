import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', color = 'white' }) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <div className={`loading-spinner ${color}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;