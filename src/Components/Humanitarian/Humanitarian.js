import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavBarTwo from '../NavBarTwo'
import achf from '../../images/achf.png';
import hugs from '../../images/hugs.jpg';
import twins from '../../images/twins.jpg';
import girlOnSwing from '../../images/girlOnSwing.jpg';
import summerCamp from '../../images/summerCamp.jpg';
import building from '../../images/building.jpg';
import soccer from '../../images/soccer.jpg';



const Humanitarian = ({deviceType}) => {
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
    <div>

    <NavBarTwo />
    <div className="hum-outer">
      <div className="hum-left-top">
        <h1>Humanitarian</h1>



          <p>Previdence helps your organization create a stronger, healthier, and more productive
          community. Our incomparable mental health assessments inform key leaders about the strengths and risks
          of their organization, while keeping the individuals’ information confidential. Additionally, the
          Previdence team provides customized mental health and wellness training, professional clinical support,
          and crisis response.
        </p>
 
        <div className="achf-img-container">
          <img alt="A Child's Hope Foundation Logo" src={achf}/>
        </div>
        <p>Together, we're lifting orphans from surviving to thriving. Read about our partner, A Child's Hope Foundation
        <a className="a" target="_blank" rel="noreferrer" href="https://www.achildshopefoundation.org/"> here</a></p>
        <br></br>
        <div className="button-parent">
        <button className="liaison">
          CONTACT OUR PUBLIC SAFETY LIAISON
        </button>
    </div>
      </div>
      <div className="hum-right-bottom">
          <Carousel className="hum-carousel"
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
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={hugs} />
            </div>
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={twins} />
            </div>
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={girlOnSwing} />
            </div>
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={summerCamp} />
            </div>
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={building} />
            </div>
            <div className="hum-carousel-img-container">
              <img alt="" className="hum-carousel-img"  src={soccer} />
            </div>
            
          </Carousel>
      </div>
    </div>
  </div>
  )
}
export default Humanitarian;