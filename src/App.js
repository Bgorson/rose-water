import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import Image from './background.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Main = styled.div`
  /* background-image: url(${Image}); */
  /* background-repeat: no-repeat; */
  background-color: #fff;
`;

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
