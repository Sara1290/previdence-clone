import React from 'react';
import uniform from '../../images/uniform.jpg'
import {FaUsers, FaUserFriends, FaHandHoldingHeart, FaWarehouse} from 'react-icons/fa';
import NavBar from '../NavBar';
import UniFooter from '../UniFooter';
import ReactGA from 'react-ga';
import CountUp from 'react-countup';

const Military = () => {

  // ReactGA.pageview('src/Components/Military/Military.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <NavBar />       
      <div className="mili-inner">
          <h1 className="h1">
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
          <div className="button-parent-mili">
          <Mailto className="a" email="sales@previdence.com" subject="Military Liaison" body="Hello">
            <button className="liaison-mili">
              CONTACT OUR MILITARY LIAISON
            </button>
          </Mailto>
          </div>
          <div className="mili-counters">
            <div className="counter">
              <FaUsers className="counter-icon"/><br></br>
              <CountUp start={0} end={300000} separator=',' delay={2} duration={2} className='CountUp'>
              </CountUp>
            <h4>Men and Women Served in the US Armed Forces</h4>
            </div>
            <div className="counter">
              <FaUserFriends className="counter-icon"/><br></br>
              <CountUp start={0} end={6000} separator=',' delay={3} duration={2} className='CountUp'>
              </CountUp>
            <h4>Military Therapist Users</h4>
            </div>
            <div className="counter">
              <FaHandHoldingHeart className="counter-icon"/><br></br>
              <CountUp start={0} end={56} suffix='%' delay={4} duration={2} className='CountUp'>
              </CountUp>
            <h4>Reduced Soldier Suicide with the Wounded Warrior Transition Unit</h4>
            </div>
            <div className="counter">
              <FaWarehouse className="counter-icon"/><br></br>
              <CountUp start={0} end={300} delay={5} duration={2} className='CountUp'>
              </CountUp>

            <h4>Military Bases</h4>
            </div>
          </div>
      </div>
      <UniFooter />
    </div>
  )
}
export default Military;