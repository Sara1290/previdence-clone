import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import { NavDropdown, Navbar, Nav, Button, Container } from 'react-bootstrap';
import eLogo from '../images/eLogo.png'

const NavBarTwo = () => {

  return(
    <Navbar  expand="lg" className="navbar-spacing">
      <Container>

  <Navbar.Brand ><Link to="/" className="link"><img alt="" src={eLogo} className="nav-img" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0 justify-content-start"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
      <Nav.Link><Link to="/" className="link">HOME</Link></Nav.Link>
      <NavDropdown title="SPECIALTIES" id="navbarScrollingDropdown" className="link">
        <NavDropdown.Item><Link to="/publicsafety" className="link">Public Safety</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/k12" className="link">K12</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/military" className="link">Military</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/professional" className="link">Professional</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/faithbased" className="link">Faith Based</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/humanitarian" className="link">Humanitarian</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/correctional" className="link">Correctional Facilities</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/corporations" className="link">Corporations</Link></NavDropdown.Item>
      </NavDropdown>
      <Links smooth to="/#testimonials" className="link t-link">TESTIMONIALS</Links>
      <Nav.Link><Link to="/trainings" className="link">TRAININGS</Link></Nav.Link>
      <Nav.Link ><Link to="/team" className="link">TEAM</Link></Nav.Link>
      <a href="https://login.previdence.com/Login.aspx?ReturnUrl=%2f" target="_blank" rel="noreferrer" className="a link t-link">LOGIN</a>
      <li><Button className="contact-button" variant=""><Link to="/contact" className="link">Contact</Link></Button></li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>


  )
}
export default NavBarTwo;