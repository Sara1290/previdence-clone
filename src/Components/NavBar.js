import React, {useRef, useState, useEffect} from 'react';
import eLogo from '../images/eLogo.png';
import '../CSS/App.css';

const NavBar = () => {
  const dropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState(false)

  const onClick = () => setDropdown(!dropdown)

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setDropdown(!dropdown);
      }
    };
  
    if (dropdown) {
      window.addEventListener('click', pageClickEvent);
    }
  
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  
  }, [dropdown]);
  



  return(

    <div className="navbar-wrapper">
      <div className="nav-img-container">
      <img className="nav-img" alt="" src={eLogo}/>
      </div>
      <div>
      <ul className="nav-links">
        <li>Home</li>
        <li onClick={onClick}>Specialties</li> 
          <nav ref={dropdownRef} className={`menu ${dropdown ? 'active' : 'inactive'}`}>

          <ul>
            <li>Public Safety</li>
            <li>K-12</li>
            <li>Military</li>
            <li>Faith Based</li>
            <li>Humanitarian</li>
            <li>Correctional Facilities</li>
            <li>Corporations</li>
            <li>Professional</li>
          </ul>
          </nav>
        <li>Testimonials</li>
        <li>Trainings</li>
        <li>Team</li>
        <li>Login</li>
      </ul>
     </div>
    </div>
  )
}

export default NavBar;