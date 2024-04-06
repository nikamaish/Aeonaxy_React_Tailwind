import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Description from './components/Description/Description';
import Interest from './components/Interest/Interest';
import RightPlace from './components/RightPlace/RightPlace';
import Comfort from './components/Comfort/Comfort';
import WayPage from './components/WayPage/WayPage';
import LearningPath from './components/LearningPath/LearningPath';
import Recommendation from './components/Recommendation/Recommendation';

function ProgressBar() {
  const location = useLocation();
  let progress = 0;

  // Calculate progress based on the current location
  switch (location.pathname) {
    case '/interest':
      progress = 25;
      break;
    case '/rightplace':
      progress = 50;
      break;
    case '/comfort':
      progress = 75;
      break;
    case '/learningpath':
      progress = 100;
      break;
    default:
      progress = 0;
  }

  return (
    <div className="h-4 bg-gray-200">
      <div className={`h-full bg-blue-500 transition-all duration-500 ease-in-out w-${progress}`}></div>
    </div>
  );
}

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <div>
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/interest" element={<Interest />} />
          <Route path='/rightplace' element={<RightPlace/>}></Route>
          <Route path='/waypage' element={<WayPage/>}></Route>
          <Route path='/comfort' element={<Comfort/>}></Route>
          <Route path='/learningpath' element={<LearningPath/>}></Route>
          <Route path='/recommendation' element={<Recommendation/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
