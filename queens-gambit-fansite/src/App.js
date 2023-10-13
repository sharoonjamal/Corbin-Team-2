import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BethHarmon from './components/BethHarmon';
import Borgov from './components/Borgov';
import Benny from './components/BennyWatts';
import Harry from './components/HarryBeltik';
import NavBar from './components/Nav';
import Landing from './components/Landing';
import CharacterManagement from './components/CharacterManagement'; 
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import AuthContext from './AuthContext';

import './styles.css';
import './App.css';

const auth = {
  user: null,
  login: (userData) => {
  },
  logout: () => {
  }
};

const App = () => {

  return (
    <Router>
      <AuthContext.Provider value={auth}>
        <Header  />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/beth" element={<BethHarmon />} />
          <Route path="/borgov" element={<Borgov />} />
          <Route path="/benny" element={<Benny />} />
          <Route path="/harry" element={<Harry />} />
          <Route path="/characters" element={<CharacterManagement />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};


export default App;