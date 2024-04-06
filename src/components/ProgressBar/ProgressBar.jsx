import React from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = ({ totalSteps }) => {
  const location = useLocation();
  let progress = 0;

  // Calculate progress based on the current location
  switch (location.pathname) {
    case '/interest':
      progress = 25;
      break;
    case '/rightplace':
      progress = 50;
      break;
    case '/comfort':
      progress = 75;
      break;
    case '/learningpath':
      progress = 100;
      break;
    default:
      progress = 0;
  }

  // Define a style object to dynamically adjust the width of the green fill portion
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: '#6EE7B7', // Green color
    transition: 'width 0.5s ease-in-out', // Smooth transition animation
  };

  return (
    <div className="h-4 bg-gray-200">
      <div className="h-full" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
