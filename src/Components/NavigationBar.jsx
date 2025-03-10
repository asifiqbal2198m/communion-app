import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar">
      <Container className="d-flex">
        {/* Left Section - Logo + Name (Horizontally) */}
        <div className="navbar-left">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Communion App Logo" className="logo-circle" />
          </Navbar.Brand>
          <span className="brand-name">CommunionHub</span>
        </div>

        {/* Centered Navigation Links */}
        <div className="nav-container">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
