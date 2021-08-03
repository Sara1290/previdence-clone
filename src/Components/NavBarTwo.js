import React from 'react'
import {Link} from 'react-router-dom';

import { NavDropdown, Navbar, Nav, Button, Container } from 'react-bootstrap';
import eLogo from '../images/eLogo.png'

const NavBarTwo = () => {

  return(
    <Navbar  expand="lg" className="navbar-spacing">
      <Container>

  <Navbar.Brand ><img alt="" src={eLogo} className="nav-img" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0 justify-content-start"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
      <Nav.Link><Link to="/">HOME</Link></Nav.Link>
      <NavDropdown title="SPECIALTIES" id="navbarScrollingDropdown">
      <NavDropdown.Item>Public Safety</NavDropdown.Item>
        <NavDropdown.Item>K-12</NavDropdown.Item>
        <NavDropdown.Item>Military</NavDropdown.Item>
        <NavDropdown.Item>Professional</NavDropdown.Item>
        <NavDropdown.Item>Faith Based</NavDropdown.Item>
        <NavDropdown.Item>Humanitarian</NavDropdown.Item>
        <NavDropdown.Item>Correctional Facilities</NavDropdown.Item>
        <NavDropdown.Item>Corporations</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link >TESTIMONIALS</Nav.Link>
      <Nav.Link >TRAININGS</Nav.Link>
      <Nav.Link ><Link to="/team">TEAM</Link></Nav.Link>
      <Nav.Link>LOGIN</Nav.Link>
      <li><Button className="contact-button" variant="outline-dark">Contact</Button></li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>


  )
}
export default NavBarTwo;