import { Container, Form, Nav, Navbar, NavDropdown, Button, Figure } from "react-bootstrap"
import { NavBar } from './NavBar'
import Logo from "./../../assets/image/Logo.png";

export const Header = () => {

    return (
        <>
            <Navbar bg="warning" expand="lg">
                <Container fluid>
                    <figure>
                        <Figure.Image height={50}
                            scr={Logo}
                            alt="Logo"
                            className='pe-2'/>

                    </figure>
                    <NavBar />
                </Container>
            </Navbar>
        </>
    )
}