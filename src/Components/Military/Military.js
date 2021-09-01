import React from 'react';
import uniform from '../../images/uniform.jpg'
import {FaUsers} from 'react-icons/fa';
import NavBarTwo from '../NavBarTwo';

const Military = () => {

  return (
    <div>
      <NavBarTwo />
      <div className="mili-inner">
        <h1>
          MILITARY
        </h1>
        <img alt="military uniform" className="mili-img" src={uniform} />
        <div className="mili-paragraph">
          <p>
          Previdence helps your organization create a stronger, healthier,
          and more productive, battle ready workforce. Our incomparable mental health assessments inform key leaders
          about the strengths and risks of their organization, while keeping the individuals’ information
          confidential. Additionally, the Previdence team provides customized mental health and wellness training,
          professional clinical support, and crisis response.
          </p>
        </div>
          <div className="mili-counters">
            <div className="counter">
              <FaUsers className="counter-icon"/>
            <h2>300,000</h2>
            <h4>Men and Women Served in hte US Armed Forces</h4>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Military;