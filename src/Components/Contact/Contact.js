import React from 'react';
import emailjs  from 'emailjs-com';
import NavBarTwo from '../NavBarTwo';

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
  }

  return (
    <div>
      <NavBarTwo />
      <div className="contact-outer" >
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
        <h1>Send Us A Message</h1>
        <form onSubmit={sendEmail} className="contact-form">
          <input className="contact-input" type="text" placeholder="Subject" name="subject" />
          <textarea className="contact-input" type="text" placeholder="Your Message Here" name="message"></textarea>
          <input className="contact-input" type="text" placeholder="Your Name" name="name" />
          <input className="contact-input" type="email" placeholder="Your Email" name="email" />
          <input className="form-btn" type="submit" value="Send Message"></input>
        </form>
      </div>
      </div>
    </div>
  )
}
export default Contact;