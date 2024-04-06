import React, { useState } from 'react';

const Description = ({ updateProgress }) => {
    const personalData = [
        {
            id: 1,
            title: "Student or soon to be enrolled",
            image: "/assets/student.png",
        },
        {
            id: 2,
            title: "Professional pursuing a career",
            image: "/assets/badge.png",
        },
        {
            id: 3,
            title: "Parent of a school-age child",
            image: "/assets/parents.png",
        },
        {
            id: 4,
            title: "Lifelong learner",
            image: "/assets/grandfather.png",
        },
        {
            id: 5,
            title: "Teacher",
            image: "/assets/teacher.png",
        },
        {
            id: 6,
            title: "Other",
            image: "/assets/confused.png",
        }
    ];

    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (id) => {
        setSelectedBox(id);
    };

    const handleContinue = () => {
        if (selectedBox !== null) {
            // Update progress (for example, moving to the next step increases progress by 25%)
            const newProgress = 25;
            updateProgress(newProgress);
            // Navigate to the next page
            window.location.href = '/interest'; // This will navigate to the "/interest" route
        }
    };

    return (
        <div className="text-center mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mt-2">Which describes you best?</h2>
            <h3 className='text-gray-600 mt-2'>This will help us personalize your experience.</h3>

            <div className="flex flex-col items-center mt-12 mx-4">
                {personalData.map((data, index) => (
                    <div key={data.id} className={`flex items-center border rounded-md  mb-4 w-full p-2 md:w-1/2 text-gray-800 cursor-pointer ${selectedBox === data.id ? 'border-golden' : 'border-gray-300'}`} onClick={() => handleBoxClick(data.id)}>
                        <img src={data.image} alt="vector" width={40} height={20} className='mr-5'/>
                        {data.title}
                    </div>
                ))}
            </div>

            <button className={`bg-black text-white p-2 px-10 my-4 rounded-md  ${selectedBox !== null ? '' : 'pointer-events-none opacity-50'}`} disabled={!selectedBox} onClick={handleContinue}>
                Continue
            </button>   
        </div>
    );
}

export default Description;
