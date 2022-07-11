import  React from "react";
import NavBar from '../NavBar';
import GroupSection from './GroupSection';
import Specialties from './Specialties';
import Testimonials from './Testimonials';
import MultiCarousel from './MultiCarousel';
import Footer from './Footer';
import '../../CSS/App.css';
import TheClipComponent from './TheClipComponent';
import ReactGA from 'react-ga';
import ScrollToTop from "../ScrollToTop";
import Steps from "./Steps";
import Hubspot from "../HubSpot/Hubspot";
// import HubspotThankYou from "../HubSpot/HubspotThankYou";
// import FacebookFeed from "./FacebookFeed";




const Homepage = () => {
  ReactGA.pageview('src/Components/Home-Page/Homepage.js');



  return (
    <div>
      <NavBar />
      <TheClipComponent />
      <h1 className="compH1">Comprehensive Mental Health and Wellness Platform</h1>
      <h4 className="compH3">Currently live with 26 Public Safety departments, covering over 1000 lives</h4>
      <GroupSection />
      <Steps />
      <Hubspot />
      {/* <HubspotThankYou /> */}
      <ScrollToTop />
      <Specialties />
      {/* <FacebookFeed />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <MultiCarousel />
      <Testimonials id="testimonials"/>
      <Footer />
    </div>
  )
}

export default Homepage;