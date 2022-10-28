import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import { removeTokenTimestamp } from "../utils/utils";
import { NavLink } from "react-router-dom";
import Brand from "../assets/PARTYPEOPLE.png";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const [expanded, setExpanded] = useState(false);

  const handleSignOut = async () => {
    try {
      await axiosReq.post("dj-rest-auth/logout/", null);
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar
      expanded={expanded}
      className="navbar-dark bg-dark"
      expand="md"
      fixed="top"
    >
      <Container>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <NavLink to="/">
          <Navbar.Brand>
            <img src={Brand} width={80} alt="brand"></img>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            {currentUser ? (
              <>
                <NavLink className="nav-link" to="/" onClick={handleSignOut}>
                  <i className="fas fa-sign-out-alt"></i>Sign out
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={`/profiles/${currentUser?.profile_id}/bookmarks`}
                >
                  <i className={`fas fa-bookmark`} />
                </NavLink>
                <NavLink className="nav-link" to={`/profiles/`}>
                  {currentUser?.username}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/signin">
                  <i className="fas fa-sign-in-alt"></i>Sign in
                </NavLink>
                <NavLink to="/signup" className="nav-link">
                  <i className="fas fa-user-plus"></i>Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
