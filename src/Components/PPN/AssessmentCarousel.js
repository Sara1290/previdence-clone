import React from 'react';
import Carousel from 'react-multi-carousel';

import Slide1 from '../../images/AssessmentSlides/Slide1.PNG';
import Slide2 from '../../images/AssessmentSlides/Slide2.PNG';
import Slide3 from '../../images/AssessmentSlides/Slide3.PNG';
import Slide4 from '../../images/AssessmentSlides/Slide4.PNG';
import Slide5 from '../../images/AssessmentSlides/Slide5.PNG';
import Slide6 from '../../images/AssessmentSlides/Slide6.PNG';
import Slide7 from '../../images/AssessmentSlides/Slide7.PNG';
import Slide8 from '../../images/AssessmentSlides/Slide8.PNG';
import Slide9 from '../../images/AssessmentSlides/Slide9.PNG';
import Slide10 from '../../images/AssessmentSlides/Slide10.PNG';
import Slide11 from '../../images/AssessmentSlides/Slide11.PNG';
import Slide12 from '../../images/AssessmentSlides/Slide12.PNG';
import Slide13 from '../../images/AssessmentSlides/Slide13.PNG';
import Slide14 from '../../images/AssessmentSlides/Slide14.PNG';
import Slide15 from '../../images/AssessmentSlides/Slide15.PNG';
import Slide16 from '../../images/AssessmentSlides/Slide16.PNG';
import Slide17 from '../../images/AssessmentSlides/Slide17.PNG';
import Slide18 from '../../images/AssessmentSlides/Slide18.PNG';
import Slide19 from '../../images/AssessmentSlides/Slide19.PNG';
import Slide20 from '../../images/AssessmentSlides/Slide20.PNG';
import Slide21 from '../../images/AssessmentSlides/Slide21.PNG';
import Slide22 from '../../images/AssessmentSlides/Slide22.PNG';
import Slide23 from '../../images/AssessmentSlides/Slide23.PNG';
import Slide26 from '../../images/AssessmentSlides/Slide26.PNG';
import Slide24 from '../../images/AssessmentSlides/Slide24.PNG';
import Slide25 from '../../images/AssessmentSlides/Slide25.PNG'

import 'react-multi-carousel/lib/styles.css';

const AssessmentCarousel = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    
    <Carousel className=" "
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      deviceType={deviceType}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass=""
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide1} />
      </div>

      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide2} />
      </div>

      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide3} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide4} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide5} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide6} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide7} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide8} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide9} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide10} />
      </div>      
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide11} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide12} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide13} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide14} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide15} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide16} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide17} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide18} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide19} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide20} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide21} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide22} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide23} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide24} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide25} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide26} />
      </div>



    </Carousel>
   
  )
}
export default AssessmentCarousel;