import React from 'react'
import NavBar from '../NavBar';
import GroupSection from './GroupSection';
import Specialties from './Specialties';
import Testimonials from './Testimonials';
import MultiCarousel from './MultiCarousel';
import Footer from './Footer';
import '../../CSS/App.css';
import TheClipComponent from './TheClipComponent';


const Homepage = () => {

  return (
    <div>
      <NavBar />
      <TheClipComponent />
      <GroupSection />
      <Specialties />
      <MultiCarousel />
      <Testimonials id="testimonials"/>
      <Footer />
    </div>
  )
}

export default Homepage;