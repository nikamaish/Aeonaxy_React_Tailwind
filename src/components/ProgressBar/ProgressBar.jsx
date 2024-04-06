import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = ({ totalSteps }) => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    const step = path === '/' ? 1 : parseInt(path.split('/')[1]);
    const percentage = (step / totalSteps) * 100;
    setProgress(percentage);
  }, [location.pathname, totalSteps]);

  return (
    <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
      <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
