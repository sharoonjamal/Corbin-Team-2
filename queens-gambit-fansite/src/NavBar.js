import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  padding: 10px;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    margin-right: 30px;
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      color: #61dafb;
    }
  }
`;


{/* <Route path="/beth" element={<BethHarmon />} />
<Route path="/borgov" element={<Borgov />} />
<Route path="/benny" element={<Benny />} />
<Route path="/harry" element={<Harry />} /> */}

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Queen's Gambit</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/" end={true}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/beth">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/borgov">
              <Nav.Link>Borgov</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/benny">
              <Nav.Link>Benny Watts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/harry">
              <Nav.Link>Harry Beltik</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  

export default NavBar;