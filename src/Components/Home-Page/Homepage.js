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
// import CookieCons from '../Home-Page/CookieCons';
// import FlyerComponent from "./FlyerComponent";
// import Journey from "./Journey";
// import HubspotThankYou from "../HubSpot/HubspotThankYou";
// import FacebookFeed from "./FacebookFeed";




const Homepage = () => {
  ReactGA.pageview('src/Components/Home-Page/Homepage.js');



  return (
    <div>
      <NavBar />
      <TheClipComponent />
      {/* <CookieCons /> */}
      <GroupSection />
     <div className="mhm-container">
      <iframe className="mhm-signup" title="mhm" src="https://cdn.forms-content.sg-form.com/031f70a4-71d2-11ee-b1f0-f2593f7e8893"/>
     </div>
      {/* <Journey />*/}
      <Steps />
      <Hubspot />
      <ScrollToTop />
      <Specialties />
      <MultiCarousel />
      <Testimonials id="testimonials"/>
      <Footer />
    </div>
  )
}

export default Homepage;