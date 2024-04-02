import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Description from './components/Description/Description';
import Interest from './components/Interest/Interest';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </Router>
  );
}

export default App;
