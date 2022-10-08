import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom"
import NavIcon from "../media/navbar-icon.svg"
import CasW from "../media/cupandsun-white.svg"
import bg1 from "../media/textured-paper-dark.png"

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="shadow-lg" style={{backgroundImage: `url("${bg1}")`}}>
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/"><img src={CasW} alt="Mayn's Coffee" style={{height: 48}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}><img src={NavIcon} alt="icon" style={{height: 36}}/></Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{backgroundImage: `url("${bg1}")`, backgroundRepeat: "repeat-y"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={CasW} alt="Kopi Sabin" style={{height: 48}}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{color: "white", fontSize: "1.5rem", fontWeight: 'bold'}}>
                  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/Menu">Menu</Nav.Link>
                  <Nav.Link as={NavLink} to="/Specials">Specials</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;