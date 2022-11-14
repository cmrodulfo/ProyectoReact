import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import { Login } from "../Login"
import { Search } from "./Search"

export const NavBar = () => {

  return (
    <>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/Inicio">Inicio</Nav.Link>
          <NavDropdown title="Categorias" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Juguetes">Juguetes</NavDropdown.Item>
            <NavDropdown.Item href="Indumentaria">Indumentaria</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Destacados">
              Destacados
            </NavDropdown.Item>
          </NavDropdown>
          <Login />
          <Nav.Link href="/Cart">Carrito</Nav.Link>
        </Nav>
        <Search />
        
      </Navbar.Collapse>
    </>
  )
}