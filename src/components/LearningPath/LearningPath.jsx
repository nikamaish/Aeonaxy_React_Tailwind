import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LearningPath = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center '>
        <FontAwesomeIcon icon={faSpinner} className='text-yellow-500  mb-10' spin size="5x" />
        <h3 className='whitespace-normal break-all'>Finding learning path recommendations for you based on your responses</h3>
      </div>
    </div>
  );
}

export default LearningPath;
