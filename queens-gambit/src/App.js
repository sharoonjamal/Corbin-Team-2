// import Carousel from './Carousel';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import BethHarmon from './Components/BethHarmon';
import Borgov from './Components/Borgov';
import Benny from './Components/BennyWatts';
import Harry from './Components/HarryBeltik';
import NavBar from './Components/Nav';
import Landing from './Components/Landing';

import './styles.css';
import './App.css';

function App() {
  return (
    <Router>
      {/* Render the Nav component here */}
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element = {<Landing />} />
          <Route path="/beth" element={<BethHarmon />} />
          <Route path="/borgov" element={<Borgov />} />
          <Route path="/benny" element={<Benny />} />
          <Route path="/harry" element={<Harry />} />
          {/* Other Routes, below are for testing purposes */}
        </Routes>
      </main>
    </Router>
  );
}
export default App;
