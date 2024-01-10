import React from "react";
import Counter from "./Counter";
import Home from "./../react-pages/Home";
import About from "./../react-pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Counter />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
