import { Navbar, NavDropdown, Nav } from "react-bootstrap"
import { Login } from "./Login"
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
          <Nav.Link href="#action1">Inicio</Nav.Link>
          <Nav.Link href="#action2">Ofertas</Nav.Link>
          <NavDropdown title="Categorias" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Juguetes</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Remeras</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Destacados
            </NavDropdown.Item>
          </NavDropdown>
          <Login />
        </Nav>
        <Search />
        
      </Navbar.Collapse>
    </>
  )
}