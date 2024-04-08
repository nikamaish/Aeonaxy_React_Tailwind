import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 

const RightPlace = ({updateProgress}) => {

  const navigate = useNavigate();
  
  const handleContinue = () => {
        navigate('/comfort');
    
};

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="p-4 flex justify-center items-center lg:flex-1">
          <video
            src="/assets/pulley-blob.mp4"
            autoPlay
            loop
            muted
            className="w-96 h-96"
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-left lg:flex-1  ">
          <h1 className="text-center lg:text-left lg:text-3xl md:text-2xl font-bold mb-4 ">You're in the right place</h1>
          <p className='text-center text-gray-600 lg:text-left '>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
        </div>
      </div>

      
      <button className="bg-black text-white p-2 px-10 mb-2 rounded-md " onClick={handleContinue}><Link to='/comfort'>Continue</Link></button>
      
    </div>
  );
}

export default RightPlace;
