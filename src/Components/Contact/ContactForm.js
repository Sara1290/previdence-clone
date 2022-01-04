import React, {useRef} from 'react';
import {FaPenAlt, FaPenFancy, FaUser, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs  from 'emailjs-com';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // the arguments serviceID, templateID, e.target, userID, access token
    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE, process.env.REACT_APP_EMAIL_JS_TEMPLATE, e.target, process.env.REACT_APP_EMAIL_JS_USER, process.env.REACT_APP_EMAIL_JS_ACCESS)
    .then((result) => {
      console.log("SUCCESS", result.text);
    }, (error) => {
      console.log("FAIL",error.text);
    });
    e.target.reset()
  };

  return (
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
  )
}
export default ContactForm;