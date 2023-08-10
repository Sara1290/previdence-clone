import React from 'react';
import PrevNoMotto from '../images/PrevNoMotto.png'
import {FaRegEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const TrainingFooter = () => {

  
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
        <p> Address: 5742 S 1475 E, <br></br>Suite 200, South Ogden, UT 84403</p>
        <div className="footer-line"></div>
     </div>

    

     <div className="footer-snippet">
      <div className="footer-icons">
        <FaPhoneAlt className="footer-icon" />
      </div>
        <p> Call Us: <br></br><a className='link' href='tel:+1-801-409-0904'>801-409-0904</a></p>
        <div className="footer-line"></div>
     </div>

 


     <div className="footer-snippet">
      <div className="footer-icons">
        <FaRegEnvelope className="footer-icon" />
      </div>
        <Mailto className="footer-email" email="cindee.paulsen@previdence.com" subject="Trainings" body="Hello">
          <p className="email-hover-dark" style={{color: 'black', marginRight: "5px"}}>Email Us: <br></br>cindee.paulsen<br></br>@previdence.com</p>
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
export default TrainingFooter;