import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';

const NavBar = styled(Nav)`
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 5;
`;
const NavItem = styled(Nav.Item)`
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
    <NavBar
      activeKey="/home"
      //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <NavItem
        style={{
          paddingLeft: '5em',
          justifySelf: 'flex-start',
          marginRight: 'auto',
        }}
      >
        <div>Logo here</div>
      </NavItem>
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
        <Button>Get Started</Button>
      </NavItem>
    </NavBar>
  );
}
