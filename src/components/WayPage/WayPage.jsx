import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const WayPage = () => {
    const renderStars = () => {
        const stars = Array(5).fill(null); // Create an array with 5 elements
        return stars.map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 text-2xl mx-1" />
        ));
      };
    
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex">
        <div className="flex-1 p-4 flex flex-col justify-center items-center">
          <video
            src="/assets/cheerleader-blorb.mp4"
            autoPlay
            loop
            muted
            className="w-96 h-96"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center items-left">
          <h1 className="text-xl font-bold mb-2">You're on your way!</h1>
          <div className="flex my-5">
            {renderStars()}
            
          </div>
          <p className='italic'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
          <p className='italic mt-5'>&mdash;&nbsp;Jacob S.</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-black text-white p-2 px-10 mb-2 rounded-md mt-4"><Link to='/learningpath'>Continue</Link></button>
      </div>
    </div>
  );
}

export default WayPage;
