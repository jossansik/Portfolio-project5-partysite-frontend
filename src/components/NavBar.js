import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
  useCurrentUser,
  useSetCurrentUser,
} from '../contexts/CurrentUserContext'
import { axiosReq } from '../api/axiosDefaults'
import styles from '../styles/NavBar.module.css'
import { removeTokenTimestamp } from '../utils/utils'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()
  const [expanded, setExpanded] = useState(false)

  const handleSignOut = async () => {
    try {
      await axiosReq.post('dj-rest-auth/logout/', null)
      setCurrentUser(null)
      removeTokenTimestamp()
    } catch (err) {
      console.log(err)
    }
  }

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
            {currentUser ? (
              <>
                <NavLink
                  className={styles.NavLink}
                  to="/"
                  onClick={handleSignOut}
                >
                  <i className="fas fa-sign-out-alt"></i>Sign out
                </NavLink>
                <NavLink className={styles.NavLink} to={`/profiles/`}>
                    {currentUser?.name}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className={styles.NavLink} to="/signin">
                  <i className="fas fa-sign-in-alt"></i>Sign in
                </NavLink>
                <NavLink to="/signup" className={styles.NavLink}>
                  <i className="fas fa-user-plus"></i>Sign up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
