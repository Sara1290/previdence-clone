import React from 'react';
import Carousel from 'react-multi-carousel';

import Slide1 from '../../images/CultureSlides/Slide1.PNG';
import Slide2 from '../../images/CultureSlides/Slide2.PNG';
import Slide3 from '../../images/CultureSlides/Slide3.PNG';
import Slide4 from '../../images/CultureSlides/Slide4.PNG';
import Slide5 from '../../images/CultureSlides/Slide5.PNG';
import Slide6 from '../../images/CultureSlides/Slide6.PNG';
import Slide7 from '../../images/CultureSlides/Slide7.PNG';
import Slide8 from '../../images/CultureSlides/Slide8.PNG';
import Slide9 from '../../images/CultureSlides/Slide9.PNG';
import Slide10 from '../../images/CultureSlides/Slide10.PNG';
import Slide11 from '../../images/CultureSlides/Slide11.PNG';
import Slide12 from '../../images/CultureSlides/Slide12.PNG';
import Slide13 from '../../images/CultureSlides/Slide13.PNG';
import Slide14 from '../../images/CultureSlides/Slide14.PNG';
import Slide15 from '../../images/CultureSlides/Slide15.PNG';
import Slide16 from '../../images/CultureSlides/Slide16.PNG';
import Slide17 from '../../images/CultureSlides/Slide17.PNG';
import Slide18 from '../../images/CultureSlides/Slide18.PNG';
import Slide19 from '../../images/CultureSlides/Slide19.PNG';
import Slide20 from '../../images/CultureSlides/Slide20.PNG';
import Slide21 from '../../images/CultureSlides/Slide21.PNG';
import Slide22 from '../../images/CultureSlides/Slide22.PNG';
import Slide23 from '../../images/CultureSlides/Slide23.PNG';
import Slide24 from '../../images/CultureSlides/Slide24.PNG';
import Slide25 from '../../images/CultureSlides/Slide25.PNG';
import Slide26 from '../../images/CultureSlides/Slide26.PNG';
import Slide27 from '../../images/CultureSlides/Slide27.PNG';
import Slide28 from '../../images/CultureSlides/Slide28.PNG';
import Slide29 from '../../images/CultureSlides/Slide29.PNG';
import Slide30 from '../../images/CultureSlides/Slide30.PNG';
import Slide31 from '../../images/CultureSlides/Slide31.PNG';
import Slide32 from '../../images/CultureSlides/Slide32.PNG';
import Slide33 from '../../images/CultureSlides/Slide33.PNG';
import Slide34 from '../../images/CultureSlides/Slide34.PNG';
import Slide35 from '../../images/CultureSlides/Slide35.PNG';
import Slide36 from '../../images/CultureSlides/Slide36.PNG';
import Slide37 from '../../images/CultureSlides/Slide37.PNG';
import Slide38 from '../../images/CultureSlides/Slide38.PNG';
import Slide39 from '../../images/CultureSlides/Slide39.PNG';
import Slide40 from '../../images/CultureSlides/Slide40.PNG';
import Slide41 from '../../images/CultureSlides/Slide41.PNG';
import Slide42 from '../../images/CultureSlides/Slide42.PNG';
import Slide43 from '../../images/CultureSlides/Slide43.PNG';
import Slide44 from '../../images/CultureSlides/Slide44.PNG';
import Slide45 from '../../images/CultureSlides/Slide45.PNG';
import Slide46 from '../../images/CultureSlides/Slide46.PNG';
import Slide47 from '../../images/CultureSlides/Slide47.PNG';
import Slide48 from '../../images/CultureSlides/Slide48.PNG';
import Slide49 from '../../images/CultureSlides/Slide49.PNG';
import Slide50 from '../../images/CultureSlides/Slide50.PNG';
import Slide52 from '../../images/CultureSlides/Slide52.PNG';
import Slide51 from '../../images/CultureSlides/Slide51.PNG';



import 'react-multi-carousel/lib/styles.css';

const CultureCarousel = ({deviceType}) => {
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
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide27} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide28} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide29} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide30} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide31} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide32} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide33} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide34} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide35} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide36} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide37} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide38} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide39} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide40} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide41} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide42} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide43} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide44} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide45} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide46} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide47} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide48} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide49} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide50} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide51} />
      </div>
      <div className="ppn-slide">
        <img className="slide-img" alt='powerpoint slide' src={Slide52} />
      </div>

    </Carousel>
   
  )
}
export default CultureCarousel;