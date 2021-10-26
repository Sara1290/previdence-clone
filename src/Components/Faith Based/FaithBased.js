import React from "react";
import NavBar from "../NavBar";
import CorCarousel from '../Correctional/CorCarousel'
import "../../CSS/Pages.css";
import "../../CSS/Responsive.css";
import "../../CSS/App.css";
import "../../CSS/index.css";
import UniFooter from "../UniFooter";

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
      <NavBar />
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
          <Mailto className="a" email="sales@previdence.com" subject="Faith Based Liaison" body="Hello">
            <button className="faith-liaison a" >
              CONTACT OUR FAITH BASED LIAISON
            </button>
          </Mailto>
          </div>
      <UniFooter />
      </div>
    </div>
  );
};
export default FaithBased;
