import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Nav';
import CharacterManagement from './CharacterManagement';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h2>Welcome to the Queen's Gambit Fansite</h2>
      <div style={{ margin: '10px 0' }}>
        <button style={{ marginRight: '10px' }}>
          <Link to="/">Home</Link>
        </button>
        <button style={{ marginRight: '10px' }}>
          <Link to="/beth">Beth Harmon</Link>
        </button>
        <button style={{ marginRight: '10px' }}>
          <Link to="/borgov">Vasily Borgov</Link>
        </button>
        <button style={{ marginRight: '10px' }}>
          <Link to="/benny">Benny Watts</Link>
        </button>
        <button style={{ marginRight: '10px' }}>
          <Link to="/harry">Harry Beltik</Link>
        </button>
        <button style={{ marginRight: '10px' }}>
          <Link to="/characters">Manage Characters</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;