import styled, { keyframes } from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import { colors } from '../utils/colors';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavBar = styled(Navbar)`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${(props) =>
    props.$scrolled
      ? 'rgba(255, 254, 250, 0.95)'
      : 'rgba(255, 254, 250, 0.85)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${(props) =>
      props.$scrolled
        ? 'rgba(168, 181, 160, 0.25)'
        : 'rgba(168, 181, 160, 0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.$scrolled ? '0 4px 20px rgba(61, 61, 61, 0.06)' : 'none'};

  & > div {
    margin-left: 2em;
  }
`;

const BrandName = styled(Navbar.Brand)`
  font-family: 'Cormorant Garamond', 'Playfair', serif;
  font-size: 1.8rem !important;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${colors.charcoal} !important;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${colors.rose}, ${colors.sage});
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.sageDark} !important;

    &::after {
      width: 100%;
    }
  }
`;

const DropdownMenu = styled(Dropdown.Menu)`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  background: rgba(255, 254, 250, 0.98);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 181, 160, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  box-shadow: 0 10px 40px rgba(61, 61, 61, 0.12);
  animation: ${slideDown} 0.2s ease-out;
  margin-top: 0.5rem;

  .dropdown-item {
    padding: 0.75rem 1.5rem;
    color: ${colors.slate};
    transition: all 0.2s ease;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 2px;
      background: ${colors.sage};
      transition: width 0.2s ease;
    }

    &:hover {
      background: rgba(168, 181, 160, 0.1);
      color: ${colors.charcoal};
      padding-left: 2rem;

      &::before {
        width: 8px;
      }
    }

    &:focus {
      background: rgba(168, 181, 160, 0.15);
    }
  }
`;

const NavItem = styled(Nav.Item)`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;

  & > a:not(.dropdown-toggle) {
    color: ${colors.slate} !important;
    padding: 0.5rem 1rem !important;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: ${colors.sage};
      transition: width 0.3s ease;
      border-radius: 2px;
    }

    &:hover {
      color: ${colors.charcoal} !important;

      &::after {
        width: 80%;
      }
    }
  }

  &:last-child {
    padding-right: 0;
  }

  .dropdown-toggle {
    color: ${colors.slate} !important;
    padding: 0.5rem 1rem !important;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.charcoal} !important;
    }

    /* Caret arrow styling */
    &::after {
      display: inline-block;
      margin-left: 0.4em;
      vertical-align: 0.1em;
      content: '';
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
      transition: transform 0.2s ease;
    }
  }

  .show > .dropdown-toggle::after {
    transform: rotate(180deg);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(168, 181, 160, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(168, 181, 160, 0);
  }
`;

const BookButton = styled(Nav.Item)`
  font-family: 'DM Sans', sans-serif;
  margin-left: 1.5rem;

  & > a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem !important;
    background: linear-gradient(
      135deg,
      ${colors.sage} 0%,
      ${colors.sageDark} 100%
    );
    color: white !important;
    border-radius: 50px;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    text-transform: none;
    border: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(122, 139, 114, 0.25);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(122, 139, 114, 0.35);
      background: linear-gradient(
        135deg,
        ${colors.sageDark} 0%,
        ${colors.sage} 100%
      );
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 1.5rem;

    & > a {
      width: 100%;
      justify-content: center;
    }
  }
`;

const MobileToggle = styled(Navbar.Toggle)`
  border: none !important;
  padding: 0.5rem;

  &:focus {
    box-shadow: none !important;
  }

  .navbar-toggler-icon {
    background-image: none;
    position: relative;
    width: 24px;
    height: 2px;
    background: ${colors.charcoal};
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 24px;
      height: 2px;
      background: ${colors.charcoal};
      transition: all 0.3s ease;
    }

    &::before {
      top: -7px;
    }

    &::after {
      bottom: -7px;
    }
  }
`;

const NavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    background: rgba(255, 254, 250, 0.98);
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
    box-shadow: 0 10px 40px rgba(61, 61, 61, 0.1);
    animation: ${slideDown} 0.3s ease-out;
  }
`;

export default function NavbarComponent({ ishome }) {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <NavBar
      className="nav"
      expanded={expanded}
      onToggle={handleToggle}
      expand="lg"
      $scrolled={scrolled}
    >
      <Container>
        <BrandName href="/">Rosewatter</BrandName>
        <MobileToggle aria-controls="basic-navbar-nav" />
        <NavCollapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <NavItem>
              <Nav.Link href="/" onClick={handleClose}>
                Home
              </Nav.Link>
            </NavItem>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={Nav.Link}>Services</Dropdown.Toggle>
              <DropdownMenu>
                <Dropdown.Item href="/#services" onClick={handleClose}>
                  All Services
                </Dropdown.Item>
                <Dropdown.Item href="/individual-therapy" onClick={handleClose}>
                  Individual Therapy
                </Dropdown.Item>
                <Dropdown.Item href="/couples-therapy" onClick={handleClose}>
                  Couples Therapy
                </Dropdown.Item>
                <Dropdown.Item href="/support-group" onClick={handleClose}>
                  Skill Groups
                </Dropdown.Item>
                <Dropdown.Item
                  href="/mental-health-workshops"
                  onClick={handleClose}
                >
                  Workshops
                </Dropdown.Item>
                <Dropdown.Item
                  href="/consultation-supervision"
                  onClick={handleClose}
                >
                  Consultation & Supervision
                </Dropdown.Item>
                <Dropdown.Item href="/groupDBT" onClick={handleClose}>
                  DBT Multifamily Group
                </Dropdown.Item>
                <Dropdown.Item href="/adult-dbt" onClick={handleClose}>
                  DBT Skills
                </Dropdown.Item>
                <Dropdown.Item href="/adhd-assessment" onClick={handleClose}>
                  ADHD & Neuropsych Assessment
                </Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <Nav.Link href="/about" onClick={handleClose}>
                Our Team
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/locations" onClick={handleClose}>
                Locations
              </Nav.Link>
            </NavItem>
            <BookButton>
              <Nav.Link href="/appointment" onClick={handleClose}>
                Book Appointment
              </Nav.Link>
            </BookButton>
          </Nav>
        </NavCollapse>
      </Container>
    </NavBar>
  );
}
