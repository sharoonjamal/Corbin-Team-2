import styled from 'styled-components';
import {useState} from 'react';

const HeaderWrapper = styled.div`
  background-color: #ffffff;
  padding: 10px;
`;

const NavLink = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: ${(props) => (props.active ? '#000' : '#777')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Header = ({ onNavigate }) => {
const [currentPage, setCurrentPage] = useState('character');

const handleNavigation = (page) => {
    setCurrentPage(page);
    onNavigate(page);
  };
  return (
    <HeaderWrapper>
      <h1>Queen's Gambit</h1>
      <NavLink onClick={() => handleNavigation('character')} active={currentPage === 'character'}>
        Character Page
      </NavLink>
      <NavLink onClick={() => handleNavigation('fan')} active={currentPage === 'fan'}>
        Fan Page
      </NavLink>
    </HeaderWrapper>
  );
};

export default Header;