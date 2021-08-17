import React from "react";
import NavBarTwo from "../NavBarTwo";

const Professional = () => {

  return (
    <div className="pro-outer">
      <NavBarTwo />
      <div className="pro-inner">
        <div className="pro-container">
          <h1>Professional</h1>
            <div className="pro-para">
            <p>
            Counselors and therapists who join the Previdence Professional Network gain access to state-of-the-art data-driven intelligence practices, professional clinical support, certifications and training, more clients, clientele management, and outcome-based treatment.
            </p>
            </div>
          <div className="">
          <button className="liaison-dark">
            CONTACT OUR LIAISON
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Professional;