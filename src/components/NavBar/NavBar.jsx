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
                <div className="d-flex flex-column">
                  <NavLink to="/category/dresses" className="link ps-3 pb-2">
                    Dresses
                  </NavLink>
                  <NavLink to="/category/shirts" className="link ps-3 pb-2">
                    Shirts
                  </NavLink>
                  <NavLink to="/category/sweaters" className="link ps-3 pb-2">
                    Sweaters
                  </NavLink>
                  <NavLink to="/category/coats" className="link ps-3 pb-2">
                    Coats
                  </NavLink>
                  <NavLink to="/category/denim" className="link ps-3 pb-2">
                    Denim
                  </NavLink>
                  <NavLink to="/category/skirts" className="link ps-3 pb-2">
                    Skirts
                  </NavLink>
                </div>
                <NavDropdown.Header>ACCESORIES</NavDropdown.Header>
                <div className="d-flex flex-column">
                  <NavLink to="/category/earrings" className="link ps-3 pb-2">
                    Earrings
                  </NavLink>
                  <NavLink to="/category/necklaces" className="link ps-3 pb-2">
                    Necklaces
                  </NavLink>
                </div>
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
