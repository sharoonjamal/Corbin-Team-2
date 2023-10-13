import styled from 'styled-components';
import {useState} from 'react';
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import Login from './Login';

const HeaderWrapper = styled.div`
  background-color: #ffffff;
  padding: 10px;
`;
/*
const NavLink = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: ${(props) => (props.active ? '#000' : '#777')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;
*/
const Header = ({ onNavigate }) => {
const [currentPage, setCurrentPage] = useState('character');
const { user, logout } = useContext(AuthContext);

const handleNavigation = (page) => {
    setCurrentPage(page);
    onNavigate(page);
  };
  return (
    <HeaderWrapper>
      <h1>Queen's Gambit</h1>
      <NavLink to="/characters" active={currentPage === 'character'}>
        Character Page
      </NavLink>
      <NavLink to="/" active={currentPage === 'fan'}>
        Fan Page
      </NavLink>
      {user ? (
        <>
          <span>{`Welcome, ${user.username}`}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header; 