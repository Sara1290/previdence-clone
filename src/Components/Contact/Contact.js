import React from 'react';
import emailjs  from 'emailjs-com';
import NavBarTwo from '../NavBarTwo';
import { FaUser, FaEnvelope, FaPenFancy, FaPenAlt, FaPhoneAlt } from 'react-icons/fa'
// import ReCaptchaComponent from './ReCaptchaComponent'


const Contact = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3jjo4uo', 'template_eqscyfd', e.target, 'user_rbpqRkclByRof3uBBcLVG', '47267216205e32b76c884990c5be99d7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
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
        <p>public.relations@previdence.com</p>
      </div>
      <div className="contact-form">
        <form onSubmit={sendEmail} className="contact-form">
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
    {/* <ReCaptchaComponent /> */}
      </div>
      </div>
    </div>
  )
}
export default Contact;