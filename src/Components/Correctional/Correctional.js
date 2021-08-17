import React from "react";
import NavBarTwo from "../NavBarTwo";
import CorCarousel from "./CorCarousel";

const Correctional = () => {
  return (
    <div className="corr-outer">
      <NavBarTwo />
      <div className="corr-inner">
        <h1>Correctional Facilities</h1>
        <div className="corr-para">
          <p>
            Previdence helps your agency create a stronger, healthier, and more
            productive organization. Our incomparable mental health assessments
            inform key leaders about the strengths and risks of their
            organization, while keeping the individuals’ information
            confidential. Additionally, the Previdence team provides customized
            mental health and wellness training, professional clinical support,
            and crisis response.
          </p>
          <p>
            Individuals who are incarcerated, or who are on parole or probation,
            stand in need of care. Previdence assessments can help identify
            suicidal and homicidal tendencies, drug and alcohol abuse, sexual
            improprieties, and more. Doing so can help these individuals, as
            well as help keep communities safer.
          </p>
        </div>
            <div className="button-parent-corr">
            <button className="liaison">
              CONTACT OUR PUBLIC SAFETY LIAISON
            </button>
            </div>
      </div>
      <CorCarousel />
    </div>
  );
};
export default Correctional;
