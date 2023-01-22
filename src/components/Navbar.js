import styled, { keyframes } from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
  & > div {
    margin-left: 2em;
  }
`;
const pulse = keyframes`
  to {
    box-shadow: 0 0 0 18px rgba(255, 255, 255, 0); 
  }
`;
const NavItem = styled(Nav.Item)`
  font-family: 'Playfair';
  font-size: 1em;
  & > a {
    color: black;
  }
  &:last-child {
    padding-right: 2em;
  }
`;

const Button = styled(Nav.Item)`
  font-family: 'Playfair';
  margin-left: 1em;
  padding-left: 0;
  text-align: center;
  color: white;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid white;
  border-radius: 1000px;

  box-shadow: 0 2px 5px 0 rgba(3, 6, 26, 0.15);
  transition: 0.5s all ease-in-out;
  &:hover {
    cursor: pointer;
    background: white;
    color: #1f4141;
    animation: none;
    //animation-play-state: paused;
  }
  animation: ${pulse} 2s infinite 3s cubic-bezier(0.25, 0, 0, 1);
  box-shadow: 0 0 0 0 black;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1em;
  }
`;

export default function NavbarComponent({ ishome }) {
  return (
    <NavBar className="nav" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontFamily: 'Playfair', fontSize: '1.75rem' }} href="/">
          Rosewatter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ alignSelf: 'end' }}>
          <Nav>
            <NavItem>
              <Nav.Link href="/">Home</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/career">We're Hiring!</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/#services">Services</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/about">About</Nav.Link>
            </NavItem>
            <Button>
              <Nav.Link
                style={{ border: '1px solid grey', borderRadius: '20px' }}
                href="/appointment"
              >
                Book an Appointment
              </Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  );
}
