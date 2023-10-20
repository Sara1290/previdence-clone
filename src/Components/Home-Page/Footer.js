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
      <p>Address: 5677 S 1475 E, Suite 4B 
        <br></br>
        South Ogden, UT 84403
      </p> 
        <p>Phone: (801) 409-0904</p>
          <Mailto email="sales@previdence.com" subject="Public Relations" body="Hello">
        <p className="white-hover">Email: sales@previdence.com</p>
          </Mailto>
        <p className="white-hover">Member Care Email: MemberCare@previdence.com</p>
        <p className="white-hover"><a className='a2' href='tel:+1-800-273-8255'>Member Care Phone: 801-917-4377</a></p>
        <p>Hours: Monday - Friday <br></br>
          8:00 am - 5:00 pm MST</p>

  </div>


  <div className="about">
    <h5>About</h5>
    <p className="footer-p">Our Previdence mission: Heal individuals and families one mind at a time. 
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