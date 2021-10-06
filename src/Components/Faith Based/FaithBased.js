import React from "react";
import NavBarTwo from "../NavBarTwo";
import {FaTrophy, FaEdit, FaUserFriends, FaChartBar, FaUsers, FaDesktop, FaUserLock, FaHourglassHalf} from 'react-icons/fa';
import CorCarousel from '../Correctional/CorCarousel'
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
          <CorCarousel />
          <div className="faith-button-parent a">
            <button className="faith-liaison a" onClick={Mailto}>
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
