import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LearningPath = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next component after 3 seconds
     navigate('/recommendation')
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigate]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center '>
        <FontAwesomeIcon icon={faSpinner} className='text-yellow-500 mb-10' spin size="5x" />
        <h3 className='text-center whitespace-pre-wrap mx-2' >Finding learning path recommendations for you based on your responses</h3>
      </div>
    </div>
  );
}

export default LearningPath;
