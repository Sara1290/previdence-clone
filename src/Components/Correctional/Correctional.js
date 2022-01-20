import React from "react";
import NavBar from "../NavBar";
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';
import { Fade } from "react-reveal";


const Correctional = () => {
  ReactGA.pageview('src/Components/Correctional/Correctional.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="corr-outer">
      <NavBar />
      <div className="corr-inner parallax-background">
        <Fade left>
          <div className="corr-para">
          <h1 className="correctional">Correctional Facilities</h1>
            <p>
              Previdence helps your agency create a stronger, healthier, and more
              productive organization. Our incomparable mental health assessments
              inform key leaders about the strengths and risks of their
              organization, while keeping the individuals’ information
              confidential. Additionally, the Previdence team provides customized
              mental health and wellness training, professional clinical support,
              and crisis response.
              <br></br>
              <br></br>
              Individuals who are incarcerated, or who are on parole or probation,
              stand in need of care. Previdence assessments can help identify
              suicidal and homicidal tendencies, drug and alcohol abuse, sexual
              improprieties, and more. Doing so can help these individuals, as
              well as help keep communities safer.
            </p>
          </div>
        <div className="button-parent-corr">
          <Mailto className="a" email="sales@previdence.com" subject="Correctional Facility Liaison" body="Hello">
            <button className="liaison-dark">
              CONTACT OUR CORRECTIONAL LIAISON
            </button>
          </Mailto>
          </div>
        </Fade>
      </div>
      <UniFooter />
    </div>
    
  );
};
export default Correctional;
