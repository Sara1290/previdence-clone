import React from 'react';
import Carousel from 'react-multi-carousel';
import {FaTrophy, FaEdit, FaUserFriends, FaChartBar, FaUsers, FaDesktop, FaUserLock, FaHourglassHalf} from 'react-icons/fa';




import 'react-multi-carousel/lib/styles.css';

const CorCarousel = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1000, min: 480 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    
    <Carousel className=""
      swipeable={false}
      draggable={false}
      // showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      deviceType={deviceType}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container-cor "
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >

      <div className="cor-icon">
      <div className="icon-circle-cor">
        <FaChartBar />
        </div>
        <p>Instant Individual <br></br> Analysis</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
        <FaEdit />
        </div>
        <p>Cutting-Edge Mental Wellness Asessments</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
        <FaTrophy />
        </div>
        <p>Award Winning <br></br> Services</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
        <FaHourglassHalf />
        </div>
        <p>Rapid Pairing with Mental Health Professionals</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
          <FaDesktop />
          </div>
        <p>Continuous Outcome Based Monitoring</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
          <FaUserLock />
          </div>
        <p>Data is Encrypted and Stored</p>
      </div>

      <div className="cor-icon">
      <div className="icon-circle-cor">
          <FaUserFriends />
          </div>
        <p>Customized Organizational Training</p>
      </div>

      <div className="cor-icon">
          <div className="icon-circle-cor">
          <FaUsers />
          </div>
        <p>Expert <br></br> Team</p>
      </div>


    </Carousel>
   
  )
}
export default CorCarousel;