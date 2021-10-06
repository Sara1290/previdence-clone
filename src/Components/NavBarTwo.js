import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import { NavDropdown, Navbar, Nav, Button, Container, NavLink } from 'react-bootstrap';
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
      <Link to="/" className="link t-link">HOME</Link>
      <NavDropdown title="SPECIALTIES" id="navbarScrollingDropdown" className="link">
        <NavLink as={Link} to="/publicsafety" classname="link NavLink">Public Safety</NavLink>
        <NavLink as={Link} to="/k12" classname="link NavLink">K12</NavLink>
        <NavLink as={Link} to="/military" classname="link NavLink">Military</NavLink>
        <NavLink as={Link} to="/professional" classname="link NavLink">Professional</NavLink>
        <NavLink as={Link} to="/faithbased" classname="link NavLink">Faith Based</NavLink>
        <NavLink as={Link} to="/humanitarian" classname="link NavLink">Humanitarian</NavLink>
        <NavLink as={Link} to="/correctional" classname="link NavLink">Correctional Facilities</NavLink>
        <NavLink as={Link} to="/corporations" classname="link NavLink">Corporations</NavLink>
      </NavDropdown>
      <Links smooth to="/#testimonials" className="link t-link">TESTIMONIALS</Links>
      <Link to="/trainings" className="link t-link">TRAINING</Link>
      <Link to="/team" className="link t-link">TEAM</Link>
      <Link to="/resources" className="link t-link">RESOURCES</Link>
      <a href="https://login.previdence.com/Login.aspx?ReturnUrl=%2f" target="_blank" rel="noreferrer" className="a link t-link">LOGIN</a>
      <li><Button className="contact-button" variant=""><Link to="/contact" className="link">CONTACT</Link></Button></li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>


  )
}
export default NavBarTwo;