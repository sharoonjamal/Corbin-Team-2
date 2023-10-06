import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
          <NavBar />
          <h2>Welcome to the Queen's Gambit Fansite</h2>
          <div style={{ margin: '10px 0' }}>
            <button style={{ marginRight: '10px' }}>
              <Link to="/home">Home</Link>
            </button>
            <button style={{ marginRight: '10px' }}>
              <Link to="/about">About</Link>
            </button>
            <button style={{ marginRight: '10px' }}>
              <Link to="/characters">Characters</Link>
            </button>
            <button style={{ marginRight: '10px' }}>
              <Link to="/fans">Fans</Link>
            </button>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      );
    };
    

export default Home;
