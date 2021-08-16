import React from "react";
import publicSafety from "../../images/publicSafety.jpg";
import k12 from "../../images/k12.jpg";
import flag from "../../images/flag.jpg";
import correctional from "../../images/correctional.jpg";
import profesh from "../../images/profesh.jpg";
import corporate from "../../images/corporate.jpg";
import humanitarian from "../../images/humanitarian.jpg";
import faithBased from "../../images/faithBased.jpg";
import '../../CSS/Responsive.css';
import '../../CSS/App.css';

const Specialties = () => {
  return (
    <div className="text-center specialties-outer ">
      <h1 id="spec-title">Specialties</h1>
      {/* <br></br>
      <br></br>
      <br></br> */}
      <div className="specialties-inner">
        <div className="specialty-parent">
          <div className="">
            <img
              alt="public safety"
              className="specialty-img"
              src={publicSafety}
            />
            <h3 className="specialty">Public Safety</h3>
          </div>

          <div className="">
            <img alt="K-12" className="specialty-img" src={k12} />
            <h3 className="specialty">K-12</h3>
          </div>

          <div className="">
            <img alt="flag" className="specialty-img" src={flag} />
            <h3 className="specialty">Military</h3>
          </div>

          <div className="">
            <img alt="lady" className="specialty-img" src={profesh} />
            <h3 className="specialty">Professional</h3>
          </div>

          <div className="">
            <img alt="clouds" className="specialty-img" src={faithBased} />
            <h3 className="specialty">Faith Based</h3>
          </div>

          <div className="">
            <img alt="hands" className="specialty-img" src={humanitarian} />
            <h3 className="specialty">Humanitarian</h3>
          </div>

          <div className="">
            <img
              alt="barbed wire with a leaf"
              className="specialty-img"
              src={correctional}
            />
            <h3 className="specialty">Correctional Facilities</h3>
          </div>

          <div className="">
            <img alt="wrist watch" className="specialty-img" src={corporate} />
            <h3 className="specialty">Corporations</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specialties;
