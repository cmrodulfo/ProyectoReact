import { Container, Navbar } from "react-bootstrap"
import { NavBar } from './NavBar'


export const Header = () => {

    return (
        <>
            <Navbar bg="warning" expand="lg">
                <Container fluid>
                   
                    <NavBar />
                </Container>
            </Navbar>
        </>
    )
}