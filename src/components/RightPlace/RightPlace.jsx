import React from 'react';

const RightPlace = () => {
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="w-full flex">
        <div className="flex-1 p-4 flex flex-col justify-center items-center">
        
        <video
  src="/assets/pulley-blob.mp4"
  autoPlay
  loop
  muted
  className="w-96 h-96"
/>



          
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center items-left">
          
          <h1 className="text-xl font-bold mb-2">You are in right place</h1>
          <p>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
        </div>
      </div>
    </div>
  );
}

export default RightPlace;
