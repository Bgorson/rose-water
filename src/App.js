import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import { Container } from '@mui/material';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Main = styled.div`
  background-color: #fefae0;
`;

function App() {
  return (
    <>
      <NavbarComponent className={'navbar'} />
      <Main>
        <Container className={'container'} maxWidth="lg">
          <Home />
        </Container>
      </Main>
    </>
  );
}

export default App;
