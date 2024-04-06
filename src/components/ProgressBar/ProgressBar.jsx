import React, { useState, useEffect } from 'react';
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

  return (
    <div className="h-4 bg-gray-200">
      <div className={`h-full bg-blue-500 transition-all duration-500 ease-in-out w-${progress}%`}></div>
    </div>
  );
};

export default ProgressBar;
