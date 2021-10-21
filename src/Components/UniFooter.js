import React from 'react';
import PrevLogo from '../images/PrevLogo.png';
import {FaLinkedin, FaFacebook, FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const UniFooter = () => {

  
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
  <div className="uni-footer">
     <img src={PrevLogo} alt="previdence logo" className="footer-logo" />
     {/* <h5>Previdence Corporation</h5> */}

     <div className="footer-snippet-larger">
      <div className="footer-icons">
        <FaMapMarkerAlt className="footer-icon" />
      </div>
        <p> Address: 5685 S 1475 E, <br></br>Suite 2B South Ogden, UT 84403</p>
        <div className="footer-line"></div>
     </div>

     <div className="footer-snippet">
      <div className="footer-icons">
        <FaPhoneAlt className="footer-icon" />
      </div>
        <p> Call Us: <br></br>801-409-0904</p>
        <div className="footer-line"></div>
     </div>

     <div className="footer-snippet">
      <div className="footer-icons">
        <FaRegEnvelope className="footer-icon" />
      </div>
        <Mailto email="sales@previdence.com" subject="Public Relations and Sales" body="Hello">
          <p className="email-hover-dark" style={{color: 'black', fontWeight: 600}}>Email Us: <br></br> sales@previdence.com</p>
        </Mailto>
        <div className="footer-line"></div>
     </div>

     <div className="socials-footer">
        <a href="https://www.facebook.com/PrevidenceMentalHealthRiskAssessment/" target="_blank" rel="noreferrer"><FaFacebook className="social-f" /></a>
        <a href="https://www.linkedin.com/company/previdence-corporation/mycompany/" target="_blank" rel="noreferrer"><FaLinkedin className="social-f" /></a>
        </div>
  </div>
  )
}
export default UniFooter;