import React from 'react';
import NavbarComponent from './components/Navbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Career from './components/Career';
import { colors } from './utils/colors';

import { Container } from '@mui/material';
import Home from './components/Home';
const Main = styled.div`
  // background-color: #fbede6;

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
                <Home />
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
          <Route
            path="career"
            element={
              <Container
                className={'container'}
                maxWidth="lg"
                style={{ height: '100vh' }}
              >
                <Career />
              </Container>
            }
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
