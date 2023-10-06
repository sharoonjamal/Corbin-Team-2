import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CharacterManagement from './components/CharacterManagement';
import FanManagement from './components/FanManagement';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<CharacterManagement />} />
          <Route path="/fans" element={<FanManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
