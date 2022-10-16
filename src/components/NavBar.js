import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <NavLink to="/">
          <Navbar.Brand>IMG</Navbar.Brand>
        </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            <>
              <NavLink className={styles.NavLink} to="/signin">
                <i className="fas fa-sign-in-alt"></i>Sign in
              </NavLink>
              <NavLink to="/signup" className={styles.NavLink}>
                <i className="fas fa-user-plus"></i>Sign up
              </NavLink>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
