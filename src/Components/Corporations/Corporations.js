import React from "react";
import { withRouter } from "react-router";
import officePeople from "../../images/officePeople.jpg";
import meeting2 from '../../images/meeting2.jpg';
import NavBar from "../NavBar";
// import CorCarousel from "../Correctional/CorCarousel"
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';



const Corporations = () => {
  ReactGA.pageview('src/Components/Coporations/Corporations.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <NavBar />
      <div className="corp-outer">
        <h1>Corporations</h1>
        <div className="corp-inner">
          <img alt="office people" className="corp-img image-scale box-shadow-slow" src={officePeople} />
          <div className="corp-paragraph" >
            <p>
              Previdence helps your organization create a stronger, healthier, and
              more productive workforce. Our incomparable mental health
              assessments inform key leaders about the strengths and risks of
              their organization, while keeping the individuals’ information
              confidential. Additionally, the Previdence team provides customized
              mental health and wellness training, professional clinical support,
              and crisis response.
            </p>
          </div>
          <img alt="office people" className="corp-img box-shadow-slow" src={meeting2} />
          </div>
          <div className="button-parent-corp">
          <Mailto className="a" email="sales@previdence.com" subject="Corportate Liaison" body="Hello">
            <button className="liaison">
              CONTACT OUR CORPORATE LIAISON
            </button>
          </Mailto>
          </div>
      </div>
        {/* <CorCarousel /> */}
        <div className="whitespace"></div>
        <UniFooter />
    </div>
  );
};
export default withRouter(Corporations);
