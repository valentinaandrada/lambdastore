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
    <Navbar expand="lg" fixed="top" bg="transparent" className="py-3">
      <Container>
        <Col className="d-flex align-items-center">
          <Link to="/" className='link'>
            <Navbar.Brand className="fs-1 fw-bold">⨇</Navbar.Brand>
          </Link>
          <Col className="d-none d-lg-flex">
            <Nav className="me-auto">
              <Nav.Link><NavLink to="/" className='link'>HOME</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/about" className='link'>ABOUT US</NavLink></Nav.Link>
              <NavDropdown title="SHOP" id="nav-dropdown" menuVariant="light">
                <NavDropdown.Header className="w-100">
                  CLOTHING
                </NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/category/dresses" className='link'>Dresses</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/shirts" className='link'>Shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/sweaters" className='link'>Sweaters</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/coats" className='link'>Coats</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/denim" className='link'>Denim</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/skirts" className='link'>Skirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Header>ACCESORIES</NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/category/earrings" className='link'>Earrings</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/necklaces" className='link'>Necklaces</NavLink>
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
          <button className="ps-3 border-0 bg-transparent">
            <BsHeart color="black" size={25} />
          </button>
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
              <Nav.Link><NavLink to="/" className='link'>HOME</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/about" className='link'>ABOUT US</NavLink></Nav.Link>
              <NavDropdown title="SHOP" id="nav-dropdown" menuVariant="light">
                <NavDropdown.Header className="w-100">
                  CLOTHING
                </NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/category/dresses" className='link'>Dresses</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/shirts" className='link'>Shirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/sweaters" className='link'>Sweaters</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/coats" className='link'>Coats</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/denim" className='link'>Denim</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/skirts" className='link'>Skirts</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Header>ACCESORIES</NavDropdown.Header>
                <NavDropdown.Item>
                  <NavLink to="/category/earrings" className='link'>Earrings</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/category/necklaces" className='link'>Necklaces</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
