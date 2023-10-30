import { Container, Row, Col, Nav } from "react-bootstrap";

function Footerdisney() {
  <Container className="py-5 bg-dark">
    <Row>
      <img
        className="https://cdn.cookielaw.org/logos/765dfbe5-be35-45f9-9aa7-5ff2c5c5acfc/b509c4de-d554-49ec-8a19-a1d3a5eaaba2/logo.png"
        width={"120px"}
        alt=""
      ></img>
      <Col className="d-flex mb-3 text-black">
        <Nav.Link href="#" className="nav-link p-0">
          Informativa sulla privacy
        </Nav.Link>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Policy sui cookie
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Normativa sulla privacy in UE e UK
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Condizioni generali di abbonamento
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Assistenza
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Dispositivi supportati
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Chi siamo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Pubblicità basata sugli interessi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-2">
          <Nav.Link href="#" className="nav-link p-0 ">
            Gestione preferenze dati personali
          </Nav.Link>
        </Nav.Item>
      </Col>
    </Row>
  </Container>;
}

export default Footerdisney;
