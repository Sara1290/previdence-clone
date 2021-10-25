import React, {useRef} from 'react';
import emailjs  from 'emailjs-com';
import NavBarTwo from '../NavBarTwo';
import {FaLinkedin, FaFacebook, FaPenAlt, FaPenFancy, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
// import ReCaptchaComponent from './ReCaptchaComponent'



const Contact = () => {

  //THIS IS THE SEND FUNCTION FOR THE FORM, IT'S JUST FOR THE FORM.
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // the arguments serviceID, templateID, e.target, userID, access token
    emailjs.sendForm('service_3jjo4uo', 'template_eqscyfd', e.target, 'user_rbpqRkclByRof3uBBcLVG', '47267216205e32b76c884990c5be99d7')
      .then((result) => {
          console.log("SUCCESS", result.text);
      }, (error) => {
          console.log("FAIL",error.text);
      });
      e.target.reset()
  };

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a" href={`mailto:${email}${params}`}>{children}</a>;
  };


  return (
    <div>
      <NavBarTwo />
      <div className="contact-outer background" >
      <div className="contact-details">
        <h1>Contact Details</h1>
        <h5>Address</h5>
        <p>5685 S 1475 E <br></br>
           Suite 2B
           South Ogden, UT 84403
        </p>
        <h5>Phone</h5>
        <p>
          801-409-0904
        </p>
        <h5>Email</h5>
        <Mailto className="a" email="sales@previdence.com" subject="Contact Us" body="Hello">
        <p>sales@previdence.com</p>
        </Mailto>
        <div className="socials">
        <a href="https://www.facebook.com/PrevidenceMentalHealthRiskAssessment/" target="_blank" rel="noreferrer"><FaFacebook className="social" /></a>
        <a href="https://www.linkedin.com/company/previdence-corporation/mycompany/" target="_blank" rel="noreferrer"><FaLinkedin className="social" /></a>
        </div>
      </div>
      {/*THIS IS THE STRUCTURE OF THE FORM. REMOVED FOR NOW BECAUSE I DON'T WANT IT UP UNTIL IT'S FULLY WORKING. */}
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1>Send Us A Message</h1>
        <div>

          <FaPenAlt className="input-icons" />
          <input className="contact-input" type="text" placeholder="Subject" name="subject" />
        </div>

          <div>
            <FaPenFancy className="input-icons" />
            <textarea className="contact-input" type="text" required placeholder="Your Message Here" name="message"></textarea>
          </div>

            <div>
              <FaUser className="input-icons" />
              <input className="contact-input" type="text" required placeholder="Your Name" name="name" />
            </div>

            <div>
              <FaPhoneAlt className="input-icons" />
              <input className="contact-input" type="phone" required  placeholder="Your Phone Number" name="phone" />
            </div>

            <div>
              <FaEnvelope className="input-icons" />
              <input className="contact-input" type="email" required placeholder="Your Email" name="email" />
            </div>

          <input className="form-btn" type="submit"  value="Send Message"></input>
        </form>
      </div>
   
      </div> 
      
    </div>
  )
}
export default Contact;