import React from "react";
import NavBar from "../NavBar";
import Fade from "react-reveal/Fade";
import ppnTherapist2Small from "../../images/ppnTherapist2Small.jpg";
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
// import ppnTherapist1Small from "../../images/ppnTherapist1Small.jpg";
import faithImage3Small from "../../images/faithImage3Small.jpg";

import therapist from '../../images/therapist.jpg';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
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
            className="header-img"
            alt="therapist and client animation"
            src={ppnTherapist3Small}
          />
        </div>
        <div className="image-left-text-right1">
          <Fade left>
            <div className="left-img-wrapper">
              <img
                className="img-left1"
                alt="therapist"
                src={ppnTherapist2Small}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="text-right">
              <h1>Welcome, Providers, to your personal PPN website.</h1>
              <p>
                This page gives you access to valuable information regarding
                Previdence instructional trainings, clinical discussion groups,
                and upcoming ART training dates.
                <br></br>Please watch the short video below for an explanation
                of the content of this page. We highly appreciate and value your
                willingness to assist us in this great work!
              </p>
              <Link
                to="/contact"
                className="link t-link"
                style={{
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#8f2a2b",
                }}
              >
                Have A Question? Send Us A Message Here!
              </Link>
            </div>
          </Fade>
        </div>
        <div className="welcome-vid-container">
          <Fade left>
            <div
              className="assessment-training-vid"
              style={{ padding: 0, margin: 0 }}
            >
              <iframe
                src="https://player.vimeo.com/video/672790661?h=99e73987a5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="iframe-video"
                // style={{width: 700, height: 700 }}
                title="Welcome Video - 12/23/2021, 11:50:48 AM"
              ></iframe>
            </div>
          </Fade>
        </div>
        <div className="ppn-trainings-outer">
          <div className="left-img-wrapper2">
            {/* <img
                className="img-left2"
                alt="therapist and client animation"
                src={ppnTherapist5Small}
              /> */}
          </div>

          <div className="text-training">
            <h1> Information About Trainings </h1>
            <div className="training-columns">
              <Fade left>
                <div className="utah-trainings">
                  <h2>Utah Providers</h2>
                  <p>
                    {/* <a
                      href="https://us02web.zoom.us/j/5860273747?pwd=OTIwdndJMjQ1eVIxdkYvSEdSK1VLUT09"
                      className="link"> </a>*/}
                      Trainings Coming Soon
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div>
                  <h2>National Providers</h2>
                  <h5>
                    Visit the ART websites below to check for available
                    trainings
                  </h5>
                  <p>
                    <a
                      href="https://acceleratedresolutiontherapy.com/reg/icat.php?course=Basic"
                      className="link"
                    >
                      Accelerated Resolution Therapy
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://artherapyinternational.org/events/maps/ "
                      className="link"
                    >
                      Accelerated Resolution Therapy Event Locations
                    </a>
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="training-videos-container">
          <Fade left>
            <div className="vid-wrapper">
              <div
                className="assessment-training-vid culture-training-vid"
                style={{ padding: 0, margin: 0 }}
              >
                <h2>Culture Training</h2>
                <h5 style={{fontWeight: 400,}}>See 
                   <a className="link-ppn" target="_blank" rel="noreferrer" href="localhost:3000/#/additionalresources"> Additional Resources </a>  
                  for the slides featured in the Culture Training Video</h5>
                <iframe
                  src="https://player.vimeo.com/video/666866491?h=026d5193ac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="iframe-video"
                  // style={{width: 700, height: 700 }}
                  title="Culture Training - 12/23/2021, 11:50:48 AM"
                ></iframe>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="vid-wrapper">
              <div className="assessment-training-vid" style={{ padding: 0, margin: 0 }}>
                <h2>Assessment Training</h2>
                <h5 style={{
                  fontWeight: 400,
                }} >See 
                   <a className="link-ppn" target="_blank" rel="noreferrer" href="localhost:3000/#/additionalresources"> Additional Resources </a>  
                  for the slides featured in the Assessment Training Video</h5>
                <iframe src="https://player.vimeo.com/video/672459507?h=4e9ca734ce&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="iframe-video" // style={{width: 700, height: 700 }} 
                title="PPN Assessment Training"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </Fade>

        </div>
        <div className="image-right-text-left clinical-directors-message">
          <Fade right>
            <div className="right-img-wrapper">
              <img
                className="img-right"
                alt="therapist and client animation"
                src={therapist}
              />
            </div>
          </Fade>
          <Fade left>
            <div className="text-left">
              <h1> Clinical Director's Message.</h1>
              <FaQuoteLeft />
              <p>
              As we start out this year, I like a lot of individuals think about goals and what I’m going to do for the new year.  As therapists there is something that I would like you to consider as you look at your therapy goals.  Do you instill hope into the lives of your clients?  I have found over the lifetime of my career that when my clients have hope, it is usually followed up with change.
              </p>
              <FaQuoteRight />
            </div>
          </Fade>
        </div>
        <UniFooter />
      </div>
    </div>
  );
};
export default PpnInfo;
