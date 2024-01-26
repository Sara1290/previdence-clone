import React from "react";
import { withRouter } from "react-router";
import NavBar from "../NavBar";
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';
import { Fade } from "react-reveal";



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
        <div className="corp-inner parallax-background">
          <Fade left>

          <div className="corp-paragraph" >
            <h1>Corporations</h1>
            <p>
              Previdence helps your organization create a stronger, healthier, and
              more productive workforce. Our incomparable mental health
              assessments inform key leaders about the strengths and risks of
              their organization, while keeping the individuals’ information
              confidential. 
              <br></br>
              <br></br>
              Additionally, the Previdence team provides customized
              mental health and wellness training, professional clinical support,
              and crisis response.
            </p>
          </div>
          <div className="button-parent-corp">
          <Mailto className="a" email="MemberCare@previdence.com" subject="Reaching out from the Corporations page on the website" body="Hello">
            <button className="liaison-dark">
              CONTACT OUR MEMBER CARE SPECIALIST
            </button>
          </Mailto>
          </div>
          </Fade>
          </div>
      </div>
        <UniFooter />
    </div>
  );
};
export default withRouter(Corporations);
