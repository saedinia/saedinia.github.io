import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../react-pages/Home';
import './../scss/main.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
