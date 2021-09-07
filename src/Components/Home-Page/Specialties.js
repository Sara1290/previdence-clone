import React from "react";
import {Link} from 'react-router-dom'
import publicSafety from "../../images/publicSafety.jpg";
import k12 from "../../images/k12.jpg";
import flag from "../../images/flag.jpg";
import correctional from "../../images/correctional.jpg";
import profesh from "../../images/profesh.jpg";
import corporate from "../../images/corporate.jpg";
import humanitarian from "../../images/humanitarian.jpg";
import faithBased from "../../images/faithBased.jpg";
import "../../CSS/Responsive.css";
import "../../CSS/App.css";

const Specialties = () => {
  return (
    <div className="text-center specialties-outer ">
      <h1 id="spec-title">Specialties</h1>
      <div className="specialties-inner">
        <div className="specialty-parent">

          <div className="specialty-item">
            <div className="specialty-img-container">
              <Link to="/publicsafety"><img
                alt="public safety"
                className="specialty-img"
                src={publicSafety}
              /></Link>
            </div>
            <Link to="/publicsafety" className="link"><h3 className="specialty">Public Safety</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
              <Link to="/k12"><img alt="K-12" className="specialty-img" src={k12} /></Link>
            </div>
            <Link to="/k12" className="link"><h3 className="specialty">K 12</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
              <Link to="/military"><img alt="flag" className="specialty-img" src={flag} /></Link>
            </div>
            <Link to="/military" className="link"><h3 className="specialty">Military</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
            <Link to="/professional"><img alt="professional woman" className="specialty-img" src={profesh} /></Link>
            </div>
            <Link to="/professional" className="link"><h3 className="specialty">Professional</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
            <Link to="/faithbased"><img alt="heavenly clouds" className="specialty-img" src={faithBased} /></Link>
            </div>
            <Link to="/faithbased" className="link"><h3 className="specialty">Faith Based</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
            <Link to="/humanitarian"><img alt="hands of the world" className="specialty-img" src={humanitarian} /></Link>
            </div>
            <Link to="/humanitarian" className="link"><h3 className="specialty">Humanitarian</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
            <Link to="/correctional"><img alt="leaf growing through barbed wire" className="specialty-img" src={correctional} /></Link>
            </div>
            <Link to="/correctional" className="link"><h3 className="specialty">Correctional</h3></Link>
          </div>

          <div className="specialty-item">
            <div className="specialty-img-container">
            <Link to="/corporate"><img alt="wrist watch" className="specialty-img" src={corporate} /></Link>
            </div>
            <Link to="/corporate" className="link"><h3 className="specialty">Corporate</h3></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specialties;
