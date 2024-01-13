import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TweenLight from '../plugins/TweenLight/TweenLight';
import './../scss/main.scss';

const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
      </div>
      <TweenLight />
    </>
  );
};

export default App;
