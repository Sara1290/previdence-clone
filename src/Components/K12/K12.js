import React from 'react';
import NavBarTwo from '../NavBarTwo';
import student from '../../images/student.jpg'
import books from '../../images/books.jpg';
import graduation from '../../images/graduation.jpg';
import K12Testimonials from './K12Testimonials';


const K12 = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="k12-outer">
      <NavBarTwo />
      <div className="k12-inner">
        <h1>K-12</h1>
        <div className="k12">
        <p>
        Previdence helps your organization create a stronger, healthier, and more productive educational environment. Our incomparable mental health assessments inform key leaders about the strengths and risks of their organization, while keeping the individuals’ information confidential. Additionally, the Previdence team provides customized mental health and wellness training, professional clinical support, and crisis response.
        </p>
        </div>
        <div className="k12-liaison">
          <Mailto className="a" email="sales@previdence.com" subject="K-12 Liaison" body="Hello">
            <button className="liaison">
              CONTACT OUR K-12 LIAISON
            </button>
          </Mailto>
          </div>
        <div className="k12-img-container">
          <img alt="student reading" src={student} className="k12-img" />
          <img alt="books" src={books} className="k12-img" />
          <img alt="graduation ceremony" src={graduation} className="k12-img" />
        </div>
      </div>
        <K12Testimonials />
    </div>
  )
}
export default K12;