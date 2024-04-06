import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Comfort = ({updateProgress}) => {
  const comfortLevels = [
    {
      id: 0,
      level: 'Introductory',
      topic: 'Arithmetic',
      equation: '/assets/equation1.png'
    },
    {
      id: 1,
      level: 'Foundational',
      topic: 'Basic Algebra',
      equation: '/assets/equation2.png'
    },
    {
      id: 2,
      level: 'Intermediate',
      topic: 'Intermediate Algebra',
      equation: '/assets/equation3.png'
    },
    {
      id: 3,
      level: 'Advanced',
      topic: 'Calculus',
      equation: '/assets/equation4.png'
    }
  ];

  const [selectedBox, setSelectedBox] = useState(null);
  const navigate = useNavigate();

  const handleBoxClick = (id) => {
    setSelectedBox(id);
  };

  const handleContinue = () => {
    if (selectedBox !== null) {
        // Update progress (for example, moving to the next step increases progress by 25%)
        const newProgress = 20;
        updateProgress(newProgress);
        // Navigate to the next page
        
        navigate('/waypage');
    }
};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-2">
      <h1 className="text-2xl font-bold text-gray-800 mt-2 text-center">What is your math comfort level?</h1>
      <h3 className='text-gray-600 mt-2 text-center'>Choose the highest level you feel confident in &mdash; you can always adjust later.</h3>

      <div className="flex flex-wrap justify-center gap-4 cursor-pointer mt-10">
        {comfortLevels.map((level) => (
         <div
           key={level.id}
           className={` flex flex-col p-4 border rounded-lg ${selectedBox === level.id ? 'border-golden' : 'border-gray-300'}  w-52`}
           onClick={() => handleBoxClick(level.id)}
       
         >
            <img src={level.equation} alt="equation" className="h-36 w-36 object-contain mx-auto" />
            <h3 className="text-md text-center  ">{level.topic}</h3>
            <p className='text-gray-500 text-center'>{level.level}</p>
          </div>
        ))}
      </div>

      <button className={`bg-black text-white p-2 px-10 my-4 rounded-md  ${selectedBox !== null ? '' : 'pointer-events-none opacity-50'}`} disabled={!selectedBox} onClick={handleContinue} >
       Continue
      </button>
    </div>
  );
}

export default Comfort;
