import React from "react";
import NavBarTwo from "../NavBarTwo";

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
            <button className="liaison-dark">
          <Mailto className="a" email="reedsara90@gmail.com" subject="Therapist Advocate" body="Hello">
              CONTACT OUR THERAPIST ADVOCATE
          </Mailto>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Professional;