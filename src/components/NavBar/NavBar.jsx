// React
import { Link, NavLink } from "react-router-dom";
// Components
import { CartWidget } from "../CartWidget/CartWidget";
// Styles
import './NavBar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar sticky="top" className="bg-white">
      <Container className="align-items-center">
        <Navbar.Brand as={Link} to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50"
            height="50"
          >
            <text
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="40"
              font-family="Arial, sans-serif"
            >
              ⨇
            </text>
          </svg>
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="SHOP" id="basic-nav-dropdown" className="custom-dropdown">
            <NavDropdown.Item as={NavLink} to="/category/dresses" className="custom-item">
              Dresses
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/shirts" className="custom-item">
              Shirts
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/sweaters" className="custom-item">
              Sweaters
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/coats" className="custom-item">
              Coats
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/denim" className="custom-item">
              Denim
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/skirts" className="custom-item">
              Skirts
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/category/earrings" className="custom-item">
              Earrings
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/necklaces" className="custom-item">
              Necklaces
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="ms-auto">
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
