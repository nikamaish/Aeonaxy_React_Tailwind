import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './components/Description/Description';
import Interest from './components/Interest/Interest';
import RightPlace from './components/RightPlace/RightPlace';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/interest" element={<Interest />} />
        <Route path='/rightplace' element={<RightPlace/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
