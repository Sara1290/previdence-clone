import React from "react";
import NavBar from "../NavBar";
import "../../CSS/Pages.css";
import "../../CSS/Responsive.css";
import "../../CSS/App.css";
import "../../CSS/index.css";
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';
import { Fade } from "react-reveal";


const FaithBased = () => {
  ReactGA.pageview('src/Components/Faith Based/FaithBased.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="faith-outer">
      {/* <img alt="clouds" src={sky} /> */}
      <NavBar />  
      <div className="faith-inner parallax-background">
        <Fade left>

        <div className="faith-paragraphs-container">
        <h1 className="faith">Faith Based</h1>
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
          <div className="faith-button-parent">
          <Mailto className="a" email="liaisons@previdence.com" subject="Faith Based Liaison" body="Hello">
            <button className="liaison-dark" >
              CONTACT OUR FAITH BASED LIAISON
            </button>
          </Mailto>
          </div>
        </Fade>
      <UniFooter />
      </div>
    </div>
  );
};
export default FaithBased;
