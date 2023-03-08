import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            {/* navbar brand that also links to home */}
            <Navbar.Brand>Spencer Robinson</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* react router links to main pages home and about */}
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="mx-3">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link className="mx-3">Projects</Nav.Link>
              </LinkContainer>
              {/* Controls the dropdown menu for the different services, ideally
              each service will link to a different part on one large services
              page */}
              <NavDropdown
                title="About"
                id="basic-nav-dropdown"
                className="mx-3"
              >
                <LinkContainer to="/about">
                  <NavDropdown.Item>About</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="ai">
                  <NavDropdown.Item>Service Industry</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="robotics">
                  <NavDropdown.Item>Full Stack</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="softdev">
                  <NavDropdown.Item>Personal</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
