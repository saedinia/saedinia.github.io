import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TweenLight from '../plugins/TweenLight/TweenLight';
import './../scss/main.scss';
import { useEffect } from 'react';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      {/* <TweenLight /> */}
    </div>
  );
};

export default App;
