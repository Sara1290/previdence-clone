import React from "react";
import NavBar from "../NavBar";
import firefighters from '../../images/firefighters.jpg'
import fireFighter1 from '../../images/fireFighter1.jpg';
import fireLady from '../../images/fireLady.jpg';
import medic from '../../images/medic.jpg';
import TestimonialsPS from "./TestimonialsPS";
import PsCarousel from "./PsCarousel";
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';


const PublicSafety = () => {
  ReactGA.pageview('src/Components/Public Safety/PublicSafety.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
    <NavBar />
    <div className="PS-Outer"> 
      <div className="PS-Left">
        <div className="Left-inner">
        <h1>Public Safety</h1>
        <br></br>
          <div className="ps-para">
              <p>
                Previdence helps your organization create a stronger, healthier, and
                more productive workforce. Our incomparable mental health assessments
                inform key leaders about the strengths and risks of their
                organization, while keeping the individuals’ information confidential.
                Additionally, the Previdence team provides customized mental health
                and wellness training, professional clinical support, and crisis
                response.
              </p>
          </div>
        <div className="ps-para">
        <p>
        Previdence provides options to help all public safety staff members, as well as
        family members of those who serve.
        </p>
        </div>
        <br></br>
          <div className="PS-list-outer">
          {/* <img alt="fireTruck" src={fireFighter2} className="fireTruck3" /> */}

      <div className="ps-pros">
          <h4>Public Safety Professionals Include:</h4>
          <ul className="PS-List">
            <li>Dispatchers</li>
            <li>Emergency Medical Service Personnel</li>
            <li>Firefighters</li>
            <li>Fire Marshalls</li>
            <li>Law Enforcement</li>
            <li>Corrections and Jail Staff</li>
            <li>Parole and Probation</li>
            <li>Search and Rescue Teams</li>
          </ul>
      </div>
          <img alt="firefighters" src={fireLady} className="fireFighter-img" />
          </div>
        <br></br>
        <br></br>
        <br></br>
      <PsCarousel className="ps-carousel" />
      <div className="button-parent">
          <Mailto className="a"  email="sales@previdence.com" subject="Public Safety Liaison" body="Hello">
            <button className="liaison-mili">
              CONTACT OUR PUBLIC SAFETY LIAISON
            </button>
          </Mailto>
          </div>
      </div>
        </div>
          <div className='ps-img-container'>
            <img alt="firefighters" src={medic} className="fireTruck2" />
            <img alt="fireTruck" src={fireFighter1} className="fireTruck2" />
            <img alt="fireTruck" src={firefighters} className="fireTruck2" />
          </div>


     </div>
     <TestimonialsPS />
     <UniFooter />
    </div>
  );
};
export default PublicSafety;
