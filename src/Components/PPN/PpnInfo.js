import React from "react";
import NavBar from "../NavBar";
import TherapyCartoonColors3 from "../../images/TherapyCartoonColors3.png";
import ppnTherapist2Small from '../../images/ppnTherapist2Small.jpg';
import ppnTherapist3 from '../../images/ppnTherapist3.jpg';
import ppnTherapist5 from '../../images/ppnTherapist5.jpg';
import videoPlaceHolder from "../../images/videoPlaceHolder.png";
// import TherapyCartoonColors2 from "../../images/TherapyCartoonColors2.png";
// import TherapyCartoonColors1 from "../../images/TherapyCartoonColors1.png";
// import ppnTherapist1 from '../../images/ppnTherapist1.jpg';
// import ppnTherapist4 from '../../images/ppnTherapist4.jpg';
// import ppnTherapist6 from '../../images/ppnTherapist6.jpg';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
import UniFooter from "../UniFooter";

const PpnInfo = () => {
  return (
    <div>

      <NavBar />
    <div className="ppn-wrapper">
      <div className="ppn-header-wrapper">
        <header className="ppn-header">
          <h1>Welcome Previdence Professional Network Providers</h1>
        </header>
        <img
          className="ppn-cartoon-header"
          alt="therapist and client animation"
          src={TherapyCartoonColors3}
        />
      </div>
      <div className="welcome-video-div">
     
        <img alt="video place holder" className="video1" src={videoPlaceHolder} />
      </div>
        <div className="image-left-box-right">
            <div className="cartoon-wrapper-left">
            <img 
              className="ppn-cartoon-body1"
              alt="therapist and client animation"
              src={ppnTherapist2Small}
              />
            </div>
          <div className="maroon-right">
           <h1> Welcome Paragraph.</h1>
            <p> a nice paragraph welcoming them to the <br></br>network and explaining the info on this page, etc. <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </div>
        <div className="image-right-box-left">
        <div className="cartoon-wrapper-right">
            <img 
              className="ppn-cartoon-body2"
              alt="therapist and client animation"
              src={ppnTherapist3}
              />
            </div>
          <div className="maroon-left">
           <h1> Clinical Director's Message.</h1>
           <FaQuoteLeft />
             <p>  We can update this once a week or whatever is needed, whenever the Clinical Director has a new message to share. </p>
           <FaQuoteRight />
          </div>
        </div>
        <div className="training-videos-container">
          <div className="vid-wrapper">
          <img alt="" className="trainingVid" src={videoPlaceHolder} />
          <p>CULTURE TRAINING</p>
          </div>
          <div className="vid-wrapper">
          <img alt="" className="trainingVid" src={videoPlaceHolder} />
          <p>ASSESSMENT TRAINING</p>
          </div>
        </div>
        <div className="image-left-box-right2">
            <div className="cartoon-wrapper-left2">
            <img 
              className="ppn-cartoon-body3"
              alt="therapist and client animation"
              src={ppnTherapist5}
              />
            </div>
          <div className="maroon-right2">
           <h1> Upcoming Trainings </h1>
            <p>January 20th - ART - with Kent Allen <br></br> Remote via Zoom 6pm MST </p>
            <p>February 17th - ART - with Kent Allen <br></br> Remote via Zoom 6pm MST</p>
          </div>
        </div>
        <div className="addtl-resources">
        <Link to="/additionalresources" className="link t-link"> Find Additional Resources Here</Link>
        </div>
      <UniFooter />
    </div>
              </div>
  );
};
export default PpnInfo;
