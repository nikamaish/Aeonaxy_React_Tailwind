import React, { useState } from 'react';

const Interest = () => {
    const personalData = [
        {
            id: 1,
            title: "Learning specific skills to advance my career",
            image: "/assets/vector.png",
        },
        {
            id: 2,
            title: "Exploring new topics I'm interested in",
            image: "/assets/vector.png",
        },
        {
            id: 3,
            title: "Refreshing my math foundations",
            image: "/assets/vector.png",
        },
        {
            id: 4,
            title: "Exercising my brain to stay sharp",
            image: "/assets/vector.png",
        },
        {
            id: 5,
            title: "Something else",
            image: "/assets/vector.png",
        }
    ];

    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (id) => {
        setSelectedBox(id);
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Which are you most interested in?</h2>
            <h3 className='text-gray-600 mt-2'>Choose just one. This will help us get you started (but won't limit your experience).</h3>

            <div className="flex flex-col items-center mt-12">
                {personalData.map((data, index) => (
                    <div key={data.id} className={`flex items-center border rounded-md  mb-4 w-full md:w-1/2 text-gray-800 cursor-pointer ${selectedBox === data.id ? 'border-golden' : 'border-gray-300'}`} onClick={() => handleBoxClick(data.id)}>
                        <img src={data.image} alt="vector image" width={60} height={20} className='mr-5'/>
                        {data.title}
                    </div>
                ))}
            </div>

            <button className={`bg-black text-white p-2 px-10 mb-2 rounded-md mt-4 ${selectedBox ? '' : 'pointer-events-none opacity-50'}`} disabled={!selectedBox}>Continue</button>
        </div>
    );
}

export default Interest;