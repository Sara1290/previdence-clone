import React from 'react';
import emailjs  from 'emailjs-com';

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
      <div className="contact-form">
        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" placeholder="Subject" name="subject" />
          <textarea type="text" placeholder="Your Message Here" name="message"></textarea>
          <input type="text" placeholder="Your Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <input type="submit" value="Send Message"></input>
        </form>
      </div>
    </div>
  )
}
export default Contact;