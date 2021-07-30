import React from 'react'
import NavBarTwo from './NavBarTwo';
import TheClip from '../images/TheClip.mp4';
import PrevLogo from '../images/PrevLogo.png';
import '../CSS/App.css';
import GroupSection from './GroupSection';

const Homepage = () => {

  return (
    <div>
      <NavBarTwo />
      <div className="background-video">
        <video autoPlay loop muted className="prev-clip">
           <source src={TheClip} type="video/mp4" />
        </video>
      <div className="logo-wrapper">
        <img alt="previdence logo" src={PrevLogo} className="prev-logo" />
      </div>
      </div>
      <GroupSection />
    </div>
  )
}

export default Homepage;