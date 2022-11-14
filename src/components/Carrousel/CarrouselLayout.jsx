import { Container, ThemeProvider } from 'react-bootstrap';

export const Carrousel = ()=> {
  
  const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']

    return (
       
        <Container fluid className='px-0'>
        <ThemeProvider
          breakpoints= { breakpoints }
          minBreakpoint='xxs'
          >
          <Carrousel />

        </ThemeProvider>

      </Container>
            )
        }