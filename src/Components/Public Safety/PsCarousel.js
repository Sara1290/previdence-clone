import React from 'react';
import Carousel from 'react-multi-carousel';
import {FaUserFriends} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {FaCertificate} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';
import {FaTachometerAlt} from 'react-icons/fa';



import 'react-multi-carousel/lib/styles.css';

const PsCarousel = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1023, min: 480 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 479, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    
    <Carousel className=" PS-Carousel CarouselHome"
      swipeable={true}
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
      containerClass="carousel-container ps-carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      
      {/* <div className="icon-item">
        <FaTrophy className="icon-light" /><br></br>
        <div className="ps-icon-para">
          <p>Served Over 10,000 First Responders</p>
        </div>
      </div> */}
      <div className="icon-item">
        <FaUserFriends className="icon-light" /><br></br>
        <p>Peer Support Team Set Up and Specialized Training</p>
      </div>
      <div className="icon-item">
        <FaTachometerAlt className="icon-light" /> <br></br>
        <div className="ps-icon-para-rapid">
        <p>Rapid Pairing with Vetted and Trauma-Trained Mental Health Professionals</p>
        </div>

      </div>
      <div className="icon-item">
        <FaHeart className="icon-light" /><br></br>
        <p>Saves Lives!</p>
      </div>
      <div className="icon-item">
        <FaCertificate className="icon-light" /><br></br>
        <div className="ps-icon-para">
        <p>92% Decrease in PTSD Symptoms After 4 Sessions</p>
        </div>
      </div>
      <div className="icon-item">
        <FaUsers className="icon-light" /><br></br>
        <p>Critical Incident and Crisis Response Services</p>
      </div>

    </Carousel>
   
  )
}
export default PsCarousel;