import React from 'react';
import PrevNoMotto from '../images/PrevNoMotto.png'
import {FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const PpnFooter = () => {

  
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };
//we got rid of the social media links because we don't use them//
  return (
  <div className="uni-footer">
     <img src={PrevNoMotto} alt="previdence logo" className="footer-logo" />
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
        <Mailto className="footer-email" email="Cody.Wilson@previdence.com" subject="Question from the PPN Info Page" body="Hello">
          <p className="email-hover-dark" style={{color: 'black', marginRight: "5px"}}>Email The PPN Team: <br></br> Cody.Wilson@previdence.com</p>
        </Mailto>
        <div className="footer-line"></div>
     </div>



     {/* <div className="socials-footer">
        <a href="https://www.facebook.com/PrevidenceMentalHealthRiskAssessment/" target="_blank" rel="noreferrer"><FaFacebook className="social-f" /></a>
        <a href="https://www.linkedin.com/company/previdence-corporation/mycompany/" target="_blank" rel="noreferrer"><FaLinkedin className="social-f" /></a>
        </div> */}
  </div>
  )
}
export default PpnFooter;