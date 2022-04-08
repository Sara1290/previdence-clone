import React from 'react';
import NavBar from '../NavBar';
import ReactGA from 'react-ga';
import ContactForm from './ContactForm';
import UniFooter from '../UniFooter';
require('dotenv').config();

const Contact = () => {
  ReactGA.pageview('src/Components/Contact/Contact.js');

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };


  return (
    <div className="contact-outer">
      <NavBar />
      <div className="contact-inner background" >
      <div className="contact-details">
        <h1>Contact Details</h1>
        <h5>Address</h5>
        <p style={{fontWeight: 300}}>5742 S 1475 E<br></br>
           Suite 200
           South Ogden, UT 84403
        </p>
        <h5>Phone</h5>
        <p style={{fontWeight: 300}}>
          801-409-0904
        </p>
        <h5>Email</h5>
        <Mailto className="a" email="sales@previdence.com" subject="Contact Us" body="Hello">
        <p style={{fontWeight: 300}}>sales@previdence.com</p>
        </Mailto>
        {/* <div className="socials">
        <a href="https://www.facebook.com/PrevidenceMentalHealthRiskAssessment/" target="_blank" rel="noreferrer"><FaFacebook className="social" /></a>
        <a href="https://www.linkedin.com/company/previdence-corporation/mycompany/" target="_blank" rel="noreferrer"><FaLinkedin className="social" /></a>
        </div> */}
      </div>
      <ContactForm />
    
      </div> 
      <UniFooter />
    </div>
  )
}
export default Contact;