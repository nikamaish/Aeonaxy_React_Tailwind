import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const WayPage = () => {
    const renderStars = () => {
        const stars = Array(5).fill(null); // Create an array with 5 elements
        return stars.map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 text-2xl mx-1" />
        ));
    };

    const navigate = useNavigate(); 

    const handleContinue =()=>{
        navigate ('/learningpath')
    }
    
    return (
        <div className="flex flex-col justify-start items-center h-screen mt-10">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                <div className="p-4 flex justify-center items-center lg:flex-1">
                    <video
                        src="/assets/cheerleader-blorb.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-64 lg:w-72 h-auto"
                    />
                </div>
                <div className="p-4 flex flex-col justify-center items-left lg:flex-1">
                    <h1 className="text-center text-2xl md:text-3xl lg:text-left  font-bold mb-2 mb-2  ">You're on your way!</h1>
                    <div className="flex justify-center lg:justify-start my-5">
                        {renderStars()}
                    </div>
                    <p className='italic text-center lg:text-left'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem-solving situations."</p>
                    <p className='italic text-center lg:text-left mt-5'>&mdash;&nbsp;Jacob S.</p>
                </div>
            </div>

            
            <button className="bg-black text-white p-2 px-10 mt-6 mb-2 rounded-md " onClick={handleContinue}>Continue</button>
            
        </div>
    );
}

export default WayPage;
