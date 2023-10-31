import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbardisney() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <img
          src="https://cdn.cookielaw.org/logos/765dfbe5-be35-45f9-9aa7-5ff2c5c5acfc/b509c4de-d554-49ec-8a19-a1d3a5eaaba2/logo.png"
          width={"120px"}
          alt=""
        ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-2">
            <Nav.Link href="#home" className="text-white">
              HOME
            </Nav.Link>
            <Nav.Link href="#home" className="ms-3 text-white ">
              CERCA
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 text-white">
              LA TUA LISTA
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 text-white">
              {" "}
              ORIGINALS
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 text-white ">
              FILM
            </Nav.Link>
            <Nav.Link href="#link" className="ms-3 text-white">
              SERIE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavLink href="#link" className="text-white">
          ANGI
        </NavLink>
        <img
          src="https://featuredanimation.com/wp-content/uploads/2022/02/Belle-Disney-Plus-Icon.jpg"
          alt=""
          width={"50px"}
          height={"48px"}
          className="rounded-circle ms-3"
        ></img>
      </Container>
    </Navbar>
  );
}

export default Navbardisney;
