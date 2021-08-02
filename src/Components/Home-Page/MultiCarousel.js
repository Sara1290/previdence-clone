import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DHA from '../../images/DHA.png';
import WTU from '../../images/WTU.png';
import tooele from '../../images/tooele.png';
import DOD from '../../images/DOD.png';
import harrisville from '../../images/harrisville.png';
import LDS from '../../images/LDS.png';
import opd from '../../images/opd.png';
import osd from '../../images/osd.png';
import wsd from '../../images/wsd.png';

const MultiCarousel = ({deviceType}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
<Carousel className="carouselHome"
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
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>
    <img alt="" className="DHA" src={DHA} />
  </div>
  <div>
  <img alt="" className="org-logo" src={WTU} />
  </div>
  <div>
  <img alt="" className="tooele" src={tooele} />
  </div>
  <div>
  <img alt="" className="org-logo" src={DOD} />
  </div>
  <div>
  <img alt="" className="org-logo" src={harrisville}/>
  </div>
  <div>
  <img alt="" className="lds" src={LDS} />
  </div>
  <div>
  <img alt="" className="org-logo" src={opd} />
  </div>
  <div>
  <img alt="" className="org-logo" src={osd} />
  </div>
  <div>
  <img alt="" className="wsd" src={wsd} />
  </div>
</Carousel>
  );

}
export default MultiCarousel;