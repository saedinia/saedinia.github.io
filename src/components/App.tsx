import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/_Home';
import About from '../pages/_About';
import TweenLight from '../plugins/TweenLight/TweenLight';
import './../scss/main.scss';

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
