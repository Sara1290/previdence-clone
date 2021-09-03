import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import wsdlogo1 from '../../images/wsdlogo1.png';
import opd2 from '../../images/opd2.png';

const Testimonials = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="testimonial-outer">
      <section id="testimonials"></section>
      <h1>Client Testimonials</h1>
    <Carousel
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      deviceType={deviceType}
      // autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
 
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={opd2} />
          <br></br>
          <br></br>
          <div className="paragraph">

          <p>I fully endorse Previdence Corporation and their program for first
                  responders, they save lives.<br></br> As Commander of the 19th Special Forces Group (Airborne), Utah
                  Army National Guard, I became aware of Previdence's success in the U.S. Army's Wounded Warrior
                  Transition Unit and the positive impact they had in the lives of many soldiers. When I became Chief of
                  Police for the Ogden, Utah, Police Department I immediately reached out to see if the same results
                  could be achieved within the Public Safety sector. Previdence worked closely with me and built a
                  program designed specifically for police, fire, and dispatch personnel who suffer from many of the
                  same stress-induced traumatic events as military veterans, along with some unique to their
                  trades. <br></br> The impact of the evaluation and treatment program was immediate. Upon making the
                  program mandatory within the Department, we identified that 11% of our police officers were in
                  high-risk categories for negative behaviors, including risk to self or others. Once the confidential
                  findings were made available to the individual officers, many immediately began seeking treatment from
                  Previdence. In one extreme case, an officer reported he had been suicidal in the most recent week and
                  had put his gun in his mouth on two different occasions. He told his therapist the evaluation and
                  treatment saved his life.<br></br>To date, no officer or family member who has enrolled in treatment
                  through Previdence has had a poor outcome. Lives have been saved, families have remained intact,
                  mental health issues have been resolved, negative behaviors have been reduced, work performance has
                  improved.
                  </p><br></br>

          </div>
          <span> - Steven R. Watt, MSS, MBA, BS. Chief (ret.), Ogden, UT, PD and Colonel
                (ret.) USA, SF, IN</span>
        </div>
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={wsdlogo1} />
           <br></br>
             <br></br>
             <div className="paragraph">

               <p >The Previdence Mental Health model has been a tremendous addition in our
                  (Weber) School District. Through the assessment process, we feel that we are then able to better
                  identify, measure and manage risky behaviors using established protocols. Through more effective
                  mental health assessments, we also feel that we have significantly improved our ability to provide the
                  best treatment possible for our students. The results in our district have proven to be invaluable! We
                  know that students and families have been better served as a result of our use of the Previdence
                  Mental Health assessment tools.</p><br></br>
             </div>
                  <span> -Dr. Jeff Stephens, Superintendent, Weber School District </span>
        </div>
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={wsdlogo1} />
          <br></br>
          <br></br>
          <div className="paragraph">

          <p >Previdence was a game-changer for our (Weber) School District! With this
                  simple and straight-forward software, we are able to identify and track threatening students, and then
                  wrap supports around those students so we can help them thrive. We have recently started using
                  Previdence to track all of the mental health services we are offering to our students, and it saves us
                  so much time to store all of our clinical data and assessments within this great program.</p><br></br>
          </div>
          <span> -Zach Leifson, LCSW, Mental Health Specialist, Weber School District</span>
        </div>
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={opd2} />
          <br></br>
          <br></br>
          <div className="paragraph">

          <p> As we deployed Previdence, we saw results with our Peer Support Team in
                  the first month. The continuing results have been phenomenal. We have identified several serious
                  mental health concerns amongst employees that we have been able to properly address. Without the
                  Previdence system these issues would have gone unnoticed with potentially dire consequences.<br></br>
                  We are provided quarterly reports which help us at the command level to see what the mental fitness is
                  of our teams. The anonymous reports provide me as an executive, a look into the mental well-being of
                  my organization. Previdence vets and screens all their therapists to assure they are trauma trained
                  experts and only select the best to recommend for seeing all first responders.<br></br> Confidentiality
                  is paramount with their system. I do not see any names of team members who are getting help. We only
                  see actionable data which helps us with more targeted trainings.<br></br> I wholeheartedly recommend
                  the Previdence System to any public safety entity looking to better care for the members of their
                  organization.
                  </p><br></br>

          </div>
          <span> - Chief Eric Young, Ogden Police Department</span>
        </div>
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={opd2} />
          <br></br>
          <br></br>
          <div className="paragraph">

          <p> I can’t say enough good things about the staff and services at
                  Previdence.<br></br> I had known for some time that I could benefit from professional counseling due to
                  the cumulative stress and trauma of nearly 20 years in law enforcement. When I heard about what our
                  department was considering with Previdence and the assessment part of their services, I was hesitant
                  to seek help due to the stigma sometimes associated with seeking guidance with mental health.<br></br>
                  But I knew I could use some help. I finally took the panels… honestly and openly. I was pleased with
                  the candor and professionalism of the staff at Previdence. They truly made me feel at ease and
                  comfortable to the point that I actually looked forward to my appointments.<br></br> As for the
                  services provided, my quality of life and outlook on life has vastly improved. Thanks to the
                  counseling and advice offered by Previdence, I’ve finally been able to process stress and trauma in a
                  healthy way. I highly recommend the Previdence team to anyone experiencing excessive stress and
                  emotional trauma.
                  </p><br></br>

          </div>
          <span> -Matthew Hinojosa, Officer, Ogden Police Department </span>
        </div>

    </Carousel>
      </div>
  );
}
export default Testimonials;