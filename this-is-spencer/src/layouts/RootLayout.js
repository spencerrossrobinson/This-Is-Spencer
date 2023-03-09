import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Outlet, NavLink } from "react-router-dom";
import "../css/Root.css";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header>
        <Navbar className="custom-nav" dark expand="md" fixed="top">
          <NavbarBrand href="/">Spencer.</NavbarBrand>
          <NavbarText style={{ color: "#f72585" }}>Welcome</NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/projects" className="nav-link">
                  Portfolio
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
