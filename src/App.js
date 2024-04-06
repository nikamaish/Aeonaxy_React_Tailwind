import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Description from './components/Description/Description';
import Interest from './components/Interest/Interest';
import RightPlace from './components/RightPlace/RightPlace';
import Comfort from './components/Comfort/Comfort';
import WayPage from './components/WayPage/WayPage';
import LearningPath from './components/LearningPath/LearningPath';
import Recommendation from './components/Recommendation/Recommendation';

function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <Router>
      <div>
        <ProgressBar progress={progress} />
        <Routes>
          <Route path="/" element={<Description updateProgress={updateProgress} />} />
          <Route path="/interest" element={<Interest updateProgress={updateProgress} />} />
          <Route path='/rightplace' element={<RightPlace updateProgress={updateProgress} />} />
          <Route path='/waypage' element={<WayPage updateProgress={updateProgress} />} />
          <Route path='/comfort' element={<Comfort updateProgress={updateProgress} />} />
          <Route path='/learningpath' element={<LearningPath />} />
          <Route path='/recommendation' element={<Recommendation  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
