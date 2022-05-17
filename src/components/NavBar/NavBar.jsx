import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { BsHeart } from "react-icons/bs";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="transparent" expand="lg" fixed="top" className="py-3">
      <Container>
        <Col className="d-flex align-items-center">
          <Link to="/">
            <Navbar.Brand className="fs-1 fw-bold">⨇</Navbar.Brand>
          </Link>
          <Col className="d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT US</Nav.Link>
              <NavDropdown title="SHOP" id="nav-dropdown" menuVariant="light">
                <NavDropdown.Header className="w-100">
                  CLOTHING
                </NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/categories/dresses">Dresses</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/t-shirts&shirts">T-shirts and Shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/sweaters">Sweaters</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/coats">Coats</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/denim">Denim</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/skirts">Skirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Header>ACCESORIES</NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/categories/earrings">Earrings</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/categories/necklaces">Necklaces</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Col>
        <Col className="d-flex justify-content-end">
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Search"
              className="bg-transparent border-0 border-bottom border-dark rounded-0 text-end me-0 pe-0"
            />
          </Form.Group>
          <button href="#cart" className="ps-3 border-0 bg-transparent">
            <BsHeart color="black" size={25} />
          </button>{" "}
          <CartWidget />
          <Navbar.Toggle
            id="nav-btn"
            aria-controls="basic-navbar-nav"
            className="d-lg-none border-0"
          />
        </Col>
        <div className="position-absolute top-100 end-0 bg-light w-100 text-center">
          <Navbar.Collapse id="basic-navbar-nav" className="d-lg-none">
            <Nav className="me-auto d-lg-none">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#link">ABOUT US</Nav.Link>
              <NavDropdown title="SHOP" id="basic-nav-dropdown">
                <div className="text-center">
                  <div>
                    <NavDropdown.Header>CLOTHING</NavDropdown.Header>
                    <NavDropdown.Item href="#action/3.1">
                      Dresses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      T-shirts and Shirts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Sweaters
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Coats
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Denim
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Skirts
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Header className="mt-2">
                      ACCESORIES
                    </NavDropdown.Header>
                    <NavDropdown.Item href="#action/3.1">
                      Earrings
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Necklaces
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
