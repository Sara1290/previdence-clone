import React from 'react'
import { NavDropdown, Navbar, Nav, Button, Container } from 'react-bootstrap';
import eLogo from '../images/eLogo.png'

const NavBarTwo = () => {

  return(
    <Navbar  expand="lg" className="navbar-spacing">
      <Container>

  <Navbar.Brand href="#"><img alt="" src={eLogo} className="nav-img" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0 justify-content-start"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
      <Nav.Link href="#action1">HOME</Nav.Link>
      <NavDropdown title="SPECIALTIES" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">Public Safety</NavDropdown.Item>
        <NavDropdown.Item href="#action4">K-12</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Military</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Professional</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Faith Based</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Humanitarian</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Correctional Facilities</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Corporations</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#action2">TESTIMONIALS</Nav.Link>
      <Nav.Link href="#action2">TRAININGS</Nav.Link>
      <Nav.Link href="#action2">TEAM</Nav.Link>
      <Nav.Link href="#action2">LOGIN</Nav.Link>
      <li><Button className="contact-button" variant="outline-dark">Contact</Button></li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>


  )
}
export default NavBarTwo;