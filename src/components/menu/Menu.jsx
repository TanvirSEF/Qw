import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/BWFC.png";
import "./main.css";
const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="nav_one">
        <Container>
          <Navbar.Brand href="#home">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto navigation">
              <Nav.Link href="#product" className="li active">
                Product
              </Nav.Link>
              <Nav.Link href="#template" className="li">
                Template
              </Nav.Link>
              <Nav.Link href="#blog" className="li">
                Blog
              </Nav.Link>
              <Nav.Link href="#pricing" className="li">
                Pricing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="btnn">
            <a href="#" className="sign">
              Sign In
            </a>
            <a href="#" className="start">
              Start Free
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
