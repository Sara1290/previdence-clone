import React from "react";
import NavBarTwo from "../NavBarTwo";
import {FaTrophy, FaEdit, FaUserFriends, FaChartBar, FaUsers, FaDesktop, FaUserLock, FaHourglassHalf} from 'react-icons/fa';
import "../../CSS/Pages.css";
import "../../CSS/Responsive.css";
import "../../CSS/App.css";
import "../../CSS/index.css";

const FaithBased = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="faith-outer">
      {/* <img alt="clouds" src={sky} /> */}
      <NavBarTwo />
      <div className="faith-inner">
        <h1 className="faith">Faith Based</h1>
        <div className="faith-paragraphs-container">
          <p>
            Previdence helps your organization create a stronger, healthier, and
            more productive community. Our incomparable mental health
            assessments inform key leaders about the strengths and risks of
            their organization, while keeping the individuals’ information
            confidential. Additionally, the Previdence team provides customized
            mental health and wellness training, professional clinical support,
            and crisis response.
          </p>
          <p>
            Previdence recognizes the importance of strength and fellowship for
            religious communities. We can help the individuals within your
            religious institution flourish.
          </p>
        </div>
          <div className="icon-container">

          <div className="icon">
              <div className="icon-circle">
              <FaChartBar />
              </div>
              <p>Instant Individual Analysis</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaEdit />
              </div>
              <p>Cutting-Edge Mental Wellness Asessments</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaTrophy />
              </div>
              <p>Award Winning Services</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaHourglassHalf />
              </div>
              <p>Rapid Pairing with Mental Health Professionals</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaDesktop />
              </div>
              <p>Continuous Outcome Based Monitoring</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaUserLock />
              </div>
              <p>Data is Encrypted and Stored</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaUserFriends />
              </div>
              <p>Customized Organizational Training</p>
            </div>

            <div className="icon">
              <div className="icon-circle">
              <FaUsers />
              </div>
              <p>Expert Team</p>
            </div>

          </div>
          <div className="faith-button-parent a">
            <button className="liaison a">
          <Mailto className="a" email="reedsara90@gmail.com" subject="Faith Based Liaison" body="Hello">
              CONTACT OUR PUBLIC SAFETY LIAISON
          </Mailto>
            </button>
          </div>
      </div>
    </div>
  );
};
export default FaithBased;