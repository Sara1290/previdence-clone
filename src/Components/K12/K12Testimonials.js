import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import wsdlogo1 from "../../images/wsdlogo1.png";

const K12Testimonials = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="testimonial-outer">
      <h1>Client Testimonials</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        deviceType={deviceType}
        autoPlay={deviceType !== "mobile" ? true : false}
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
          <img alt="" className="testimonial-logo" src={wsdlogo1} />
          <br></br>
          <br></br>
          <div className="k12-paragraph">
            <p>
              The Previdence Mental Health model has been a tremendous addition
              in our (Weber) School District. Through the assessment process, we
              feel that we are then able to better identify, measure and manage
              risky behaviors using established protocols. Through more
              effective mental health assessments, we also feel that we have
              significantly improved our ability to provide the best treatment
              possible for our students. The results in our district have proven
              to be invaluable! We know that students and families have been
              better served as a result of our use of the Previdence Mental
              Health assessment tools.
            </p>
            <br></br>
          </div>
          <span>
            {" "}
            -Dr. Jeff Stephens, Superintendent, Weber School District
          </span>
        </div>
        <div className="client-container">
          <img alt="" className="testimonial-logo" src={wsdlogo1} />
          <br></br>
          <br></br>
          <div className="k12-paragraph">
            <p>
              {" "}
              Previdence was a game-changer for our (Weber) School District!
              With this simple and straight-forward software, we are able to
              identify and track threatening students, and then wrap supports
              around those students so we can help them thrive. We have recently
              started using Previdence to track all of the mental health
              services we are offering to our students, and it saves us so much
              time to store all of our clinical data and assessments within this
              great program.
            </p>
            <br></br>
          </div>
          <span>
            {" "}
            -Zach Leifson, LCSW, Mental Health Specialist, Weber School District
          </span>
        </div>
      </Carousel>
    </div>
  );
};
export default K12Testimonials;
