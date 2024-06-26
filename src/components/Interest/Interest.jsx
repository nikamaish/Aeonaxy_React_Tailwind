import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";  


const Interest = ({updateProgress}) => {
    const personalData = [
        {
            id: 1,
            title: "Learning specific skills to advance my career",
            image: "/assets/growth.png",
        },
        {
            id: 2,
            title: "Exploring new topics I'm interested in",
            image: "/assets/earth.png",
        },
        {
            id: 3,
            title: "Refreshing my math foundations",
            image: "/assets/calculating.png",
        },
        {
            id: 4,
            title: "Exercising my brain to stay sharp",
            image: "/assets/target.png",
        },
        {
            id: 5,
            title: "Something else",
            image: "/assets/eyes.png",
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
            
            navigate('/rightplace');
        }
    };


    return (
        <div className="text-center mx-4 mt-10">
           <h2 className="font-bold text-gray-800 text-2xl md:text-3xl mt-2">Which are you most interested in?</h2>
            <h3 className='text-gray-600 mt-6'>Choose just one. This will help us get you started (but won't limit your experience).</h3>

            <div className="flex flex-col items-center mt-12 mx-2">
                {personalData.map((data, index) => (
                    <div key={data.id} className={`flex items-center border rounded-md  mb-4  p-2  w-full md:w-1/2 text-gray-800 cursor-pointer ${selectedBox === data.id ? 'border-golden' : 'border-gray-300'}`} onClick={() => handleBoxClick(data.id)}>
                        <img src={data.image} alt="vector" width={40} height={20} className='mr-5'/>
                        {data.title}
                       
                    </div>
                ))}
            </div>

                
            <button className={`bg-black text-white p-2 px-10 my-4 rounded-md  ${selectedBox !== null ? '' : 'pointer-events-none opacity-50'}`} disabled={!selectedBox} onClick={handleContinue} >
        Continue
      </button>
        </div>
    );
}

export default Interest;
