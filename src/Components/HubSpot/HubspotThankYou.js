import React from "react";
import checkmark from '../../images/checkmark.png';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import NavBar from "../NavBar";

const HubspotThankYou = () => {
    ReactGA.pageview('src/Components/Hubspot/HubspotThankYou.js');

    return (
        <div>
        <NavBar />
        <div className="hubspotTY-outer">
  
            <div id="hubspotTY">
              <img className="hubspotTY-img" alt="" src={checkmark} />
              <br></br>
              <br></br>
              <h1>Thank You!</h1>
              <h5> Your mental health matters to us.</h5>
              <h6> We'll be in touch with you soon.</h6>
            </div>
            <br></br>
            <Link to="/" className="link"><button className="BTH" variant="">Back to Homepage </button></Link>
            
        </div>
        </div>
    );

}

export default HubspotThankYou;