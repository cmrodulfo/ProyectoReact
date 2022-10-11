
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './compenets/Header/Header';
import { Container, ThemeProvider } from 'react-bootstrap';
import { Carrousel } from './compenets/Main/Carrousel';

function App() {

  const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']

  return (
    <>
      <Header />
      <Container fluid className='px-0'>
        <ThemeProvider
          breakpoints= { breakpoints }
          minBreakpoint='xxs'
        >
          <Carrousel />

        </ThemeProvider>

      </Container>
    </>
  );
}

export default App;
