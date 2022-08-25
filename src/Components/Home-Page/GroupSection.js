import React from 'react';

import sheriff from '../../images/sheriff.jpg';
import police from '../../images/police.jpg';
import fireFighter3 from '../../images/fireFighter3.jpg';
import paramedic from '../../images/paramedic.jpg';
import firefighters from '../../images/firefighters.jpg';
import policeAtCar from '../../images/policeAtCar.jpg';
import '../../CSS/App.css';
import '../../CSS/Responsive.css';

const GroupSection = () => {

  return(
    <div className=" group-parent">
      <br></br>
      <br></br>
        <h1 className="">Comprehensive Mental Health and Wellness Platform</h1>
        <h2>Build Resilience to On-The-Job Stress and Injuries</h2>
        {/* <h5 style={{fontStyle: "italic"}}>Saving lives one mind at a time</h5> */}
        <div className="group-wrapper">

        <div className="group-item">
          <img className=" group-img" alt="" src={police}/>
            <h4 className="caption">Attract and Retain</h4>
            <p>Build a desirable culture that creates pyschological safety, trust, and unity</p>
          </div>

          <div className="group-item">
          <img className="group-img" alt="" src={paramedic}/>
            <h4 className="caption">Increase Performance</h4>
            <p>Help your staff stay mentally fit and prepared for any incident or emergency. Reduce absenteeism, and presenteeism</p>
          </div>

          <div className="group-item">
          <img className="group-img" alt="" src={sheriff}/>
            <h4 className="caption">Harden the Shield</h4>
            <p>Get your staff educated and aware of the signs and symptoms of trauma and suicidality</p>
          </div>

          <div className="group-item">
          <img className="group-img" alt="" src={firefighters}/>
            <h4 className="caption">Provide Individual Support</h4>
            <p>Give your team members the ability to consult with someone outside of work regarding their personal wellness, work-life balance, and family needs</p>
          </div>

          <div className="group-item">
          <img className="group-img" alt="" src={fireFighter3}/>
            <h4 className="caption">Support Growth & Development</h4>
            <p>Help your department grow, advance their careers, accept more responsibility, so they can thrive at work and at home</p>
          </div>

          <div className="group-item">
          <img className="group-img" alt="" src={policeAtCar}/>
            <h4 className="caption">Protect Career and Reputation</h4>
            <p>Provide your team confidential access to treatment, with zero kickback</p>
          </div>
      </div>
    </div>
 

  
  )
}
export default GroupSection;