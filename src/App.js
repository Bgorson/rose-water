import React from 'react';
import NavbarComponent from './components/Navbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Home from './components/Home';
const Main = styled.div`
  background-color: #fbede6;
`;

function App() {
  return (
    <div>
      <NavbarComponent className={'navbar'} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Container className={'container'} maxWidth="lg">
                <Home />
              </Container>
            }
          />
          <Route
            path="about"
            element={
              <Container className={'container'} maxWidth="lg">
                <About />
              </Container>
            }
          />
          <Route
            path="appointment"
            element={
              <Container className={'container'} maxWidth="lg">
                <Footer />
              </Container>
            }
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
