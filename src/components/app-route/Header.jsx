// export default Header;
import Nav from "react-bootstrap/Nav";
import { header } from "../../constatns/header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded} // control expanded
      onToggle={(value) => setExpanded(value)}
      className="fixed-top bg-dark navbar-dark"
      id="navbar"
    >
      <Container className="justify-content-lg-between d-flex d-lg-flex">
        <Navbar.Brand
          className="yuji-mai-regular fs-1 d-flex text-white"
          onClick={() => {
            navigate("/");
            setExpanded(false); // close menu
          }}
        >
          DEA SAMBO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto align-items-center align-content-lg-center text-white">
            {header.map((items, index) => {
              return (
                <Link
                  to={items.path}
                  key={index}
                  className={`ms-lg-5 mt-3 mt-lg-0 header text-white ${
                    pathname === items.path ? "active" : ""
                  }`}
                  onClick={() => setExpanded(false)}
                >
                  {items.name}
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
