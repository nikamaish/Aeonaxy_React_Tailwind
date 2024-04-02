import React from 'react';

const Description = () => {
    const personalData = [
        {
            id: 1,
            title: "Student or soon to be enrolled",
            image: "/assets/vector.png",
        },
        {
            id: 2,
            title: "Professional pursuing a career",
            image: "/assets/vector.png",
        },
        {
            id: 3,
            title: "Parent of a school-age child",
            image: "/assets/vector.png",
        },
        {
            id: 4,
            title: "Lifelong learner",
            image: "/assets/vector.png",
        },
        {
            id: 5,
            title: "Teacher",
            image: "/assets/vector.png",
        },
        {
            id: 6,
            title: "Other",
            image: "/assets/vector.png",
        }
    ];

    return (
        
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mt-2">Which describes you best?</h2>
                <h3 className='text-gray-600 mt-2'>This will help us personalize your experience</h3>

                <div className="flex flex-col h-screen  items-center mt-12">
                    {personalData.map((data, index) => (
                        <div key={data.id} className=" flex items-center border border-gray-300 rounded-md  px-8 mb-4 w-full md:w-1/2 text-gray-800">
                            <img src={data.image} alt="vector image" width={60} height={20} className='mr-5'/>
                            {data.title}
                        </div>
                    ))}
                </div>

                <button>Continue</button>
            </div>
      
    );
}

export default Description;
