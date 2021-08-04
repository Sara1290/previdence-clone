import React from "react";
import NavBarTwo from "../NavBarTwo";
import firefighters from '../../images/firefighters.jpg'
import TestimonialsPS from "./TestimonialsPS";

const PublicSafety = () => {
  return (
    <div>
    <NavBarTwo />
    <div className="PS-Outer">
      <div className="PS-Left">
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
        <p>
        Previdence provides options to help all public safety staff members, as well as
        family members of those who serve.
        </p>
        <button className="liaison">
          CONTACT OUR PUBLIC SAFETY LIAISON
        </button>
      </div>
      <div className="PS-Right">
        <img alt="firefighters" src={firefighters} className="fireFighter-img" />
      </div>
     </div>
     <TestimonialsPS />
    </div>
  );
};
export default PublicSafety;
