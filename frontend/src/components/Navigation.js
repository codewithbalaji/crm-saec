import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {

  const handleLogout = () => {
    // Clear authToken from localStorage
    localStorage.removeItem('authToken');
  };

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-md navbar-light"
      style={{ backgroundColor: "#5e6efe" }}
    >
      <Container>
        <Navbar.Brand className="text-white fw-bold" href="/">
          SA ENGINEERING COLLEGE
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="btn text-white fw-bold" onClick={handleLogout}>
              Log out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
