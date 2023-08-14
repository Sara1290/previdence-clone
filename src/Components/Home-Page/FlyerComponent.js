import  React from "react";
import firstRCFlyer from '../../images/firstRCFlyer.jpg';

const FlyerComponent = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="a2" href={`mailto:${email}${params}`}>{children}</a>;
  };

 return (
  <div className="center-content">
   <div className="flyer-comp-outer">
    <img alt="first responder conference" src={firstRCFlyer} className="firstrcflyer"/>
      <div className="flyer-comp-inner">
        <h1>ATTENTION ALL 1ST RESPONDERS IN UTAH AND SURROUNDING AREAS </h1>
        <p>
        Let us introduce you to a life-enhancing, life altering conference for ALL 1st Responders!
        </p>
        <p>
          Welcome to the most remarkable mental wellness conference hosted by the nationwide organization: 1st Responder Conference.  This is the first time in history that this amazing organization and conference have visited our beautiful State of Utah!
        </p>
       <p>
        This conference is co-hosted by YOUR fellow department, Brigham City Police Department. It is also endorsed by Brigham City Fire Department, Centerville Police Department, Price Police Department, Utah FOP, Roy City Fire Department, and Snowbird Resort! 
        We are encouraging you to research, share, and post this flyer for all personnel and their families to attend. 
        </p>
        <p>
        Training credits are available, which could allow department training budgets to cover costs. Scholarships for individuals needing financial assistance are also available. The greatest value of the conference is the education, connection with fellow first responders, and mental wellness resources offered.  
        Please register on our site or for more information, please go to their website listed below or reach out to <Mailto className="frc-email" email="amanda@1strc.org"> Amanda Brumbaugh </Mailto> or <Mailto className="frc-email" email="Shawn@1strc.org">Shawn Thomas </Mailto> and mention Utah Conference in December 2023!
        </p>
       <p>To purchase tickets on our website, and skip the extra fees, <a href="https://previdence.myshopify.com/collections/all" target="_blank" rel="noreferrer" className="underline">click here.</a></p>
       <p>For more info about the conference, visit the <a href="https://www.1strc.org/" target="_blank" rel="noreferrer" className="underline"> first responder conference website!</a></p>
    </div>
  </div>
</div>
 );
}
export default FlyerComponent;