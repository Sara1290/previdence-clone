import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
import { NavDropdown, Navbar, Nav, Button, Container, NavLink } from 'react-bootstrap';
import eLogo from '../images/eLogo.png';
// import bigETransparent from '../images/bigETransparent.png'

const NavBar = () => {


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
        <NavLink as={Link} to="/faithbased" className="link NavLink">Faith Based</NavLink>
        <NavLink as={Link} to="/humanitarian" className="link NavLink">Humanitarian</NavLink>
        <NavLink as={Link} to="/correctional" className="link NavLink">Correctional Facilities</NavLink>
        <NavLink as={Link} to="/corporations" className="link NavLink">Corporations</NavLink>
      </NavDropdown>
      <Links smooth to="/#testimonials" className="link t-link">TESTIMONIALS</Links>
      <Link to="/trainings" className="link t-link">TRAININGS</Link>
      <Link to="/team" className="link t-link">TEAM</Link>
      <Link to="/resources" className="link t-link">RESOURCES</Link>
      <Link to="/providers" className="link t-link">PROVIDERS</Link>

     
      {/* <NavDropdown title="PROVIDERS" id="navbarScrollingDropdown" className="link" renderMenuOnMount={true}>
      <a class="dropdown-item" href="https://previdence.com/#/ppninfo" target="_blank" rel="noreferrer">Current PPN</a>
      <a class="dropdown-item" href="https://previdence.com/#/providers" target="_blank" rel="noreferrer">Want to join our network of providers?</a>
      </NavDropdown> */}
    
      <NavDropdown title="LOGIN" id="navbarScrollingDropdown" className="link" renderMenuOnMount={true}>
      <a class="dropdown-item" href="https://login.previdence.com/Login.aspx?ReturnUrl=%2f" target="_blank" rel="noreferrer">Church and School Organizations</a>
      <a class="dropdown-item" href="https://previdence.tech9app.com/" target="_blank" rel="noreferrer">All Other Organization Types</a>
      </NavDropdown>

      <li>
          <Link to="/contact" className="link contact-button"><Button className="contact-btn " variant="">CONTACT </Button></Link>
      </li>

    </Nav>

  </Navbar.Collapse>
 </Container>
</Navbar>
)
}
export default NavBar;
