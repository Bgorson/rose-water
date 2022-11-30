import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import Home from './components/Home';

const AppRoutes = () => {
  return (
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
  );
};
export default AppRoutes;
