import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './components/Description/Description';
import Interest from './components/Interest/Interest';
import RightPlace from './components/RightPlace/RightPlace';
import Comfort from './components/Comfort/Comfort';
import WayPage from './components/WayPage/WayPage';
import LearningPath from './components/LearningPath/LearningPath';
import Recommendation from './components/Recommendation/Recommendation';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/interest" element={<Interest />} />
        <Route path='/rightplace' element={<RightPlace/>}></Route>
        <Route path='/waypage' element={<WayPage/>}></Route>
        <Route path='/comfort' element={<Comfort/>}></Route>
        <Route path='/learningpath' element={<LearningPath/>}></Route>
        <Route path='/recommendation' element={<Recommendation/>}></Route>


      </Routes>
    </Router>
  );
}

export default App;
