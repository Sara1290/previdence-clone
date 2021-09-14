import React from "react";
import NavBarTwo from "../NavBarTwo";
import firefighters from '../../images/firefighters.jpg'
import fireTruck from '../../images/fireTruck.jpg';
import fireFighter2 from '../../images/fireFighter2.jpg';
import paramedic from '../../images/paramedic.jpg';
import TestimonialsPS from "./TestimonialsPS";
import PsCarousel from "./PsCarousel";

const PublicSafety = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
    <NavBarTwo />
    <div className="PS-Outer">
      
      <div className="PS-Left">
        <div className="Left-inner">
        <h1>Public Safety</h1>
        <br></br>
        <p>
          Previdence helps your organization create a stronger, healthier, and
          more productive workforce. Our incomparable mental health assessments
          inform key leaders about the strengths and risks of their
          organization, while keeping the individuals’ information confidential.
          Additionally, the Previdence team provides customized mental health
          and wellness training, professional clinical support, and crisis
          response.
        </p>
        <br></br>
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
        <br></br>
        <p>
        Previdence provides options to help all public safety staff members, as well as
        family members of those who serve.
        </p>
        <br></br>
        <br></br>
      <PsCarousel className="ps-carousel" />
      <div className="button-parent">
            <button className="liaison">
          <Mailto className="a" email="reedsara90@gmail.com" subject="Faith Based Liaison" body="Hello">
              CONTACT OUR PUBLIC SAFETY LIAISON
          </Mailto>
            </button>
          </div>
      </div>
        </div>
          <div className='ps-img-container'>
            <img alt="fireTruck" src={fireFighter2} className="fireTruck2" />
            <img alt="fireTruck" src={paramedic} className="fireTruck3" />
            <img alt="firefighters" src={firefighters} className="fireFighter-img" />
            {/* <img alt="fireTruck" src={fireTruck} className="fireTruck" /> */}
          </div>


     </div>
     <TestimonialsPS />
    </div>
  );
};
export default PublicSafety;
