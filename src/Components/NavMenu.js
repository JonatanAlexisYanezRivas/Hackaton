import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import ajolote from '../img/Ajolote.png';

import {Outlet, Link} from "react-router-dom";
function NavMenu() {
    return (
      <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={ajolote} className="logoNav"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
              <Nav.Link as={Link} to="/About">Acerda de</Nav.Link>
              <Nav.Link as={Link} to="/Especies" >Especies en peligro de extinción</Nav.Link>
              <Nav.Link as={Link} to="/Footer">Footer</Nav.Link> */}

              <Nav.Link href='#home'>Inicio</Nav.Link>
              <Nav.Link href='#especies'>Especies en peligro de extinción</Nav.Link>
              <Nav.Link href='#about'>Acerda de</Nav.Link>
              <Nav.Link href='#footer'>Footer</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
      </>
    );
  }
  
  export default NavMenu;