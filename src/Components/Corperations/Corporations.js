import React from "react";
import corporations1 from "../../images/corporations1.jpg";
import corporations2 from "../../images/corporations2.jpg";
import NavBarTwo from "../NavBarTwo";
import CorCarousel from "../Correctional/CorCarousel"


const Corporations = () => {
  return (
    <div>
      <NavBarTwo />
      <div className="corp-outer">
        <h1>Corporations</h1>
        <div className="corp-inner">
          <img alt="office people" className="corp-img" src={corporations1} />
          <p className="corp-p"> 
            Previdence helps your organization create a stronger, healthier, and
            more productive workforce. Our incomparable mental health
            assessments inform key leaders about the strengths and risks of
            their organization, while keeping the individuals’ information
            confidential. Additionally, the Previdence team provides customized
            mental health and wellness training, professional clinical support,
            and crisis response.
          </p>
          <img alt="office people" className="corp-img" src={corporations2} />
          <div className="button-parent-corp">
            <button className="liaison">
              CONTACT OUR CORPORATIONS LIAISON
            </button>
          </div>
        </div>
      </div>
        <CorCarousel />
    </div>
  );
};
export default Corporations;
