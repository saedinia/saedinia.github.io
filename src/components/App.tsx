import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './../react-pages/Home';
import About from './../react-pages/About';
import TweenLight from './TweenLight';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <TweenLight />
    </div>
  );
};

export default App;
