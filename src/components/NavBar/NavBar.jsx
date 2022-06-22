// React
import { Link, NavLink } from "react-router-dom";
// Components
import { CartWidget } from "../CartWidget/CartWidget";
// Styles
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="py-3 mt-3">
      <Container>
        <Col className="d-flex align-items-center">
          <Link to="/" className="link">
            <Navbar.Brand className="fs-1 fw-bold">⨇</Navbar.Brand>
          </Link>
          <Col className="d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Item className="py-2">
                <NavLink to="/" className="link">
                  HOME
                </NavLink>
              </Nav.Item>
              <NavDropdown title="SHOP" id="nav-dropdown" menuVariant="light">
                <NavDropdown.Header className="w-100">
                  CLOTHING
                </NavDropdown.Header>
                <NavDropdown.Item href="/category/dresses">
                  Dresses
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/shirts">
                  Shirts
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/sweaters">
                  Sweaters
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/coats">
                  Coats
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/denim">
                  Denim
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/skirts">
                  Skirts
                </NavDropdown.Item>
                <NavDropdown.Header>ACCESORIES</NavDropdown.Header>
                <NavDropdown.Item href="/category/earrings">
                  Earrings
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/necklaces">
                  Necklaces
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Col>
        <Col className="d-flex justify-content-end">
          <CartWidget />
          <Navbar.Toggle
            id="nav-btn"
            aria-controls="basic-navbar-nav"
            className="d-lg-none border-0"
          />
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
