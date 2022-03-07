import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import { Container } from '@mui/material';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarComponent className={'navbar'} />
      <Container className={'container'} maxWidth="lg">
        <Home />
      </Container>
    </>
  );
}

export default App;
