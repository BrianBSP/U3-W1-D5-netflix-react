import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import netflixLogo from "./imgs/netflix_logo.png";
import avatarImg from "./imgs/avatar.png";
import kidsIcon from "./imgs/kids_icon.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="netflix-logo" width="140" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Serie TV</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
            <Nav.Link href="#">
              <i className="bi bi-search text-white"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <img src={kidsIcon} alt="kids" width="35" height="35" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell-fill text-white"></i>
            </Nav.Link>
            <NavDropdown
              bg="dark"
              title={<img src={avatarImg} alt="user photo" width="35" height="35" />}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="./profile-netflix.html">Account</NavDropdown.Item>
              <NavDropdown.Item href="./setting-netflix.html">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
