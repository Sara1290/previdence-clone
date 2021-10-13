import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import { NavDropdown, Navbar, Nav, Button, Container, NavLink } from 'react-bootstrap';
import eLogo from '../images/eLogo.png'

const NavBarTwo = () => {


  //render on mount set to true means the children, the list items, will render so we can more easily set the dropdown to open on hover
  return(
    <Navbar  expand="lg" className="navbar-spacing">
      <Container>
  <Navbar.Brand ><Link to="/" className="link"><img alt="" src={eLogo} className="nav-img" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className="justify-content-end">
    <Nav
      className="mr-auto my-2 my-lg-0 justify-content-start nav-wrapper"
      navbarScroll
      >
      <Link to="/" className="link t-link home-link">HOME</Link>
      <NavDropdown title="SPECIALTIES" id="navbarScrollingDropdown" className="link" renderMenuOnMount={true}>
        <NavLink as={Link} to="/publicsafety" className="link NavLink">Public Safety</NavLink>
        <NavLink as={Link} to="/k12" className="link NavLink">K12</NavLink>
        <NavLink as={Link} to="/military" className="link NavLink">Military</NavLink>
        <NavLink as={Link} to="/professional" className="link NavLink">Professional</NavLink>
        <NavLink as={Link} to="/faithbased" className="link NavLink">Faith Based</NavLink>
        <NavLink as={Link} to="/humanitarian" className="link NavLink">Humanitarian</NavLink>
        <NavLink as={Link} to="/correctional" className="link NavLink">Correctional Facilities</NavLink>
        <NavLink as={Link} to="/corporations" className="link NavLink">Corporations</NavLink>
      </NavDropdown>
      <Links smooth to="/#testimonials" className="link t-link">TESTIMONIALS</Links>
      <Link to="/trainings" className="link t-link">TRAINING</Link>
      <Link to="/team" className="link t-link">TEAM</Link>
      <Link to="/resources" className="link t-link">RESOURCES</Link>
      <a href="https://login.previdence.com/Login.aspx?ReturnUrl=%2f" target="_blank" rel="noreferrer" className="link t-link">LOGIN</a>
      <li>
        <Button className="contact-btn " variant="">
          <Link to="/contact" className="link contact-button">CONTACT</Link>
        </Button>
      </li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>


  )
}
export default NavBarTwo;