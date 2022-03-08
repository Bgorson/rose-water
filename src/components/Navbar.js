import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const NavBar = styled(Navbar)`
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 5;
  border-radius: 0 0 10px 0px;
  opacity: 0.9;
`;

const NavItem = styled(Nav.Item)`
  font-family: 'ArchivoNarrow';
  font-size: 1em;
  & > a {
    color: black;
  }
  &:last-child {
    padding-right: 2em;
  }
`;
const Button = styled.button`
  padding: 1em;
  background-color: blue;
`;

export default function NavbarComponent() {
  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavItem>
              <Nav.Link href="/home">Home</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#services">Services</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#about">About</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </NavItem>
            <NavItem>
              <button>Get Started</button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  );
}
