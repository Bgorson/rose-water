import NavbarComponent from './components/Navbar';
import Routes from './Routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const Main = styled.div`
  background-color: #fbede6;
`;

function App() {
  return (
    <div>
      <NavbarComponent className={'navbar'} />
      <Main>
        <Routes />
      </Main>
    </div>
  );
}

export default App;
