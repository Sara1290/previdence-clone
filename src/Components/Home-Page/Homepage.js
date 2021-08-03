import React from 'react'
import NavBarTwo from '../../Components/NavBarTwo';
import TheClip from '../../images/TheClip.mp4';
import PrevLogo from '../../images/PrevLogo.png';
import '../../CSS/App.css';

import GroupSection from './GroupSection';
import Specialties from './Specialties';
import Testimonials from './Testimonials';
import MultiCarousel from './MultiCarousel';
import Footer from './Footer';

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
      <Specialties />
      <MultiCarousel />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Homepage;