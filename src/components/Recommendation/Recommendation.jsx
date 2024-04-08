import React, { useState } from 'react';

const Recommendation = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Learning paths based on your answers</h2>
      <h3 className='text-gray-600 mt-4'>Choose one to get started. You can switch anytime</h3>

      <div className="flex flex-col md:flex-row justify-center mt-12 gap-4 cursor-pointer">
        <div
          className={`w-full md:w-1/4 relative flex items-center p-4 border ${selectedBox === 0 ? 'border-yellow-500' : 'border-gray-500'} rounded-md`}
          onClick={() => handleBoxClick(0)}
        >
          {/* "Most Popular" tag */}
          <div className="absolute -top-4 right-24 bg-yellow-500 text-black px-2 py-1 rounded-md">Most Popular</div>
          
          <div>
            <h3 className="text-lg font-semibold">Foundational Math</h3>
            <p >Build your foundational skills in algebra, geometry, and probability.</p>
          </div>
          <img src="/assets/educational-tool.png" alt="vector" className="ml-4 w-24 h-24" />
        </div>

        <div
          className={`w-full md:w-1/4 flex items-center p-4 border ${selectedBox === 1 ? 'border-yellow-500' : 'border-gray-500'} rounded-md `}
          onClick={() => handleBoxClick(1)}
        >
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
