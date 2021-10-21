import React from "react";
import NavBarTwo from "../NavBarTwo";
// import UniFooter from "../UniFooter";

const Professional = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="pro-outer">
      <NavBarTwo />
      <div className="pro-inner">
        <div className="pro-container">
          <h1>Professional</h1>
            <div className="pro-para">
            <p>
            Counselors and therapists who join the Previdence Professional Network gain access to state-of-the-art data-driven intelligence practices, professional clinical support, certifications and training, more clients, clientele management, and outcome-based treatment.
            </p>
            </div>
        <div className="">
          <Mailto className="a" email="sales@previdence.com" subject="Therapist Advocate" body="Hello">
            <button className="liaison-dark">
              CONTACT OUR THERAPIST ADVOCATE
            </button>
          </Mailto>
          </div>
        </div>
      </div>
      {/* <UniFooter /> */}
    </div>
  )
}
export default Professional;