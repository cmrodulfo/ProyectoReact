import { Container, Navbar } from "react-bootstrap"
import { Brand } from "./Brand"
import { NavBar } from './NavBar'


export const Header = () => {

    return (
        <>
            <Navbar bg="warning" expand="lg">
                <Container fluid>
                   
                    <Brand />
                    <NavBar />
                    
                </Container>
            </Navbar>
        </>
    )
}