import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = () => {
  const location = useLocation();
  let progress = 0;

  // Calculate progress based on the current location
  switch (location.pathname) {
    case '/':
      progress = 20;
      break;
    case '/interest':
      progress = 40;
      break;
    case '/rightplace':
      progress = 60;
      break;
    case '/comfort':
      progress = 80;
      break;
    case '/waypage':
      progress = 100; // Set progress to 100 when on '/waypage'
      break;
    default:
      progress = 0;
  }

  // Render null if the location is after '/learningpath' or '/recommendation'
  if (location.pathname === '/learningpath' || location.pathname === '/recommendation') {
    return null;
  }

  // Render the back button only if not on the first page
  const backButton = location.pathname !== '/' ? (
    <Link to="#" className="text-gray-500" onClick={() => window.history.back()}>
      <FontAwesomeIcon icon={faLessThan} className='mr-2 text-xl'/> 
    </Link>
  ) : null;

  return (
    <div className="flex items-center justify-between px-24 mt-12">
      {backButton}
      <div className="h-1 bg-gray-200  flex-grow rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600  transition-width duration-500 ease-in-out"
          style={{ width: `${progress}%` }} // Adjusted width to make it narrower
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
