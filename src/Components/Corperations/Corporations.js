import React from "react";
import officePeople from "../../images/officePeople.jpg";
import highFive from "../../images/highFive.jpg";
import NavBarTwo from "../NavBarTwo";
import CorCarousel from "../Correctional/CorCarousel"


const Corporations = () => {
  return (
    <div>
      <NavBarTwo />
      <div className="corp-outer">
        <h1>Corporations</h1>
        <div className="corp-inner">
          <img alt="office people" className="corp-img image-scale box-shadow-slow" src={officePeople} />
          <div className="corp-paragraph" >
            <p>
              Previdence helps your organization create a stronger, healthier, and
              more productive workforce. Our incomparable mental health
              assessments inform key leaders about the strengths and risks of
              their organization, while keeping the individuals’ information
              confidential. Additionally, the Previdence team provides customized
              mental health and wellness training, professional clinical support,
              and crisis response.
            </p>
          </div>
          <img alt="office people" className="corp-img box-shadow-slow" src={highFive} />
          </div>
          <div className="button-parent-corp">
            <button className="liaison">
              CONTACT OUR CORPORATIONS LIAISON
            </button>
        </div>
      </div>
        <CorCarousel />
    </div>
  );
};
export default Corporations;
