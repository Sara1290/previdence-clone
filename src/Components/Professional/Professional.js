import React from "react";
import NavBar from "../NavBar";
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';
import ppnTherapist4Small from '../../images/ppnTherapist4Small.jpg';

const Professional = () => {
  ReactGA.pageview('src/Components/Professional/Professional.js');


  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="pro-outer">
      <NavBar />
      <div className="pro-inner">
        <div className="pro-container">
        <div className="image-left-text-right">
          <div className="left-img-wrapper">
            <img
              className="img-left1"
              alt="therapist"
              src={ppnTherapist4Small}
            />
          </div>
          <div className="text-right">
            <h1> Welcome Paragraph.</h1>
            <p>
            Counselors and therapists who join the Previdence Professional Network gain access to state-of-the-art data-driven intelligence practices, professional clinical support, certifications and training, more clients, clientele management, and outcome-based treatment.
            </p>
          </div>
        </div>
          {/* <h1>Professional</h1> */}
            {/* <div className="pro-para">
            <p>
            Counselors and therapists who join the Previdence Professional Network gain access to state-of-the-art data-driven intelligence practices, professional clinical support, certifications and training, more clients, clientele management, and outcome-based treatment.
            </p>
            </div> */}
        <div className="">
          <Mailto className="a" email="sales@previdence.com" subject="Therapist Advocate" body="Hello">
            <button className="liaison-dark">
              CONTACT OUR THERAPIST ADVOCATE
            </button>
          </Mailto>
          </div>
        </div>
      </div>
      <UniFooter />
    </div>
  )
}
export default Professional;