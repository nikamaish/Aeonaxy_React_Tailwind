import React from 'react';
import { Link } from 'react-router-dom';

const Recommendation = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mt-2">Learning paths based on your answers</h2>
      <h3 className='text-gray-600 mt-2'>Choose one to get started. You can switch anytime</h3>

      <div className="flex flex-row justify-center mt-12 gap-4 ">
        <div className="w-1/4 relative flex p-4 border border-gray-500 rounded-md  ">
          {/* "Most Popular" tag */}
          <div className="absolute -top-4 right-24 bg-yellow-500 text-black px-2 py-1 rounded-md">Most Popular</div>
          
          <div>
            <h3 className="text-lg font-semibold">Foundational Math</h3>
            <p>Build your foundational skills in algebra, geometry, and probability.</p>
          </div>
          <img src="/assets/educational-tool.png" alt="vector" className="ml-4 w-24 h-24" />
        </div>

        <div className="w-1/4 flex items-center p-4 border border-gray-500 rounded-md ">
          <div>
            <h3 className="text-lg font-semibold">Mathematical Thinking</h3>
            <p>Build your foundational skills in algebra, geometry, and probability.</p>
          </div>
          <img src="/assets/mathematics.png" alt="vector" className="ml-4 w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
