import React from 'react';
import '../../CSS/Responsive.css'
import '../../CSS/App.css'


const Footer = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

return (
<div className="footer-outer">
 {/* <div className="container-fluid footer-container"> */}
  <div className="contact">
    <h5>
      Contact
    </h5>
      <p>Address: 5685 S 1475 E, Suite 2B
        <br></br>
        South Ogden, UT 84403
      </p> 
      <a href="+1-801-409-0904">801-409-0904</a> 
        <p>Phone: (801) 409-0904</p>
          <Mailto email="sales@previdence.com" subject="Public Relations" body="Hello">
        <p className="white-hover">Email: public-relations@previdence.com</p>
          </Mailto>
        <p>Hours: Monday - Friday <br></br>
          8:00 am - 5:00 pm MST</p>

  </div>


  <div className="about">
    <h5>About</h5>
    <p className="">Our Previdence mission is crystal clear: we have pioneered a full “Personalized
       Mental Health Platform” for the mental health and behavioral science industry. We are known around the
       world in mental health professional settings as the go-to-platform that is grounded in science and
       outcomes.
       <br></br> 
       <br></br>
       We discover, create, develop, and deliver the best tools, diagnostics, practices and
       data-driven intelligence all with outcomes in mind. We provide the necessary tools, best practices, best
       providers and our Previdence library of screened studies and solutions to providers that are not found
       anywhere else in a package.
    </p>
  </div>
</div>
// </div>


)
}
export default Footer;