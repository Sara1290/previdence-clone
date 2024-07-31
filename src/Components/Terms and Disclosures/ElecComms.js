import React from 'react';
import NavBar from '../NavBar'
import UniFooter from '../UniFooter';
// import './disclosures.css'


const ElecComms = () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="disclosures-container">
      <NavBar />
      <div className='disclosures-inner'>
    <div className='disclosures-texts'>
    <h1>Electronic Communications Disclosure</h1>
<br></br>
    <h3>Important Notice to Members</h3>
    <p>Your privacy and the security of your health information are of utmost importance to us. However, we want to make you aware of the potential risks associated with certain forms of communication.</p>
    <h4>Email and Text Messaging</h4>
    <p>While email and text messaging are convenient ways to communicate, they are not always secure. These forms of communication can be intercepted by unauthorized parties, potentially compromising the confidentiality of your health information.</p>
    <h5>Risks Involved</h5>
    <ul>
      <li> <b>Unauthorized Access: </b> Emails and text messages can be intercepted, read, and accessed by unauthorized individuals.</li>
      <li> <b> Loss of Privacy: </b> Personal and health information shared through insecure channels may be exposed to unintended recipients.</li>
      <li> <b> Data Breach: </b>  Your health information could be subject to breaches if intercepted by malicious actors.</li>
    </ul>
    <h5>Recommended Actions</h5>
    <ul>
      <li> <b>Use Secure Platforms:  </b> Whenever possible, use secure patient portals or encrypted communication tools provided for sharing sensitive health information.</li>
      <li> <b> Verify Recipients: </b> Ensure that you are sending emails and messages to the correct recipients to avoid accidental disclosures.</li>
      <li> <b> Be Cautious: </b> Avoid including sensitive information, such as your medical conditions, prescription details, or social security number, in unsecured emails or text messages..</li>
    </ul>
    <h5>Our Commitment</h5>
    <p>We are committed to protecting your health information and will make every effort to use secure communication methods. If you have any concerns or questions about the security of your health information, please contact us immediately.</p>
    <h5>Contact information</h5>
    <p>If you need assistance or have any questions about secure communications, please reach out to us at:
    </p>
    <Mailto  email="support@previdence.com" subject="Secure Communications Question" body="Hello">
          <p className="email-hover-dark" style={{color: 'black', marginRight: "5px"}}>Email Us: <br></br> support@previdence.com</p>
    </Mailto>
    <p>Thank you for your understanding and cooperation in keeping your health information secure.</p>
    </div>
      </div>
      <UniFooter />
    </div>
  );

};
export default ElecComms;

