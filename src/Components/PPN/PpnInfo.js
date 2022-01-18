import React from "react";
import NavBar from "../NavBar";
import Fade from "react-reveal/Fade";
import ppnTherapist2Small from "../../images/ppnTherapist2Small.jpg";
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
// import ppnTherapist5Small from "../../images/ppnTherapist5Small.jpg";
import ppnTherapist1Small from "../../images/ppnTherapist1Small.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import UniFooter from "../UniFooter";
// import ContactForm from "../Contact/ContactForm";

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
              <h1> Welcome Providers!</h1>
              <p>
                You're beautiful, we love you, happy to have you etc etc etc.
                <br></br>This page has lots of information for you. <br></br>
                <br></br> Below is a welcome video. you'll also find training
                schedules as well as an assessment training and a culture
                training.
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
                {/* <img alt="video place holder" className="video1" src={videoPlaceHolder} /> */}
                <div
                  className="assessment-training-vid"
                  style={{ padding: 0, margin: 0 }}
                  >
                  <iframe
                    src="https://player.vimeo.com/video/659743288?h=be615770b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="iframe-video"
                    // style={{width: 700, height: 700 }}
                    title="Sara Allen Assessment Training - 12/23/2021, 11:50:48 AM"
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
                    <a
                      href="https://us02web.zoom.us/j/5860273747?pwd=OTIwdndJMjQ1eVIxdkYvSEdSK1VLUT09"
                      className="link"
                    >
                      January 12th - ART - with Laney Rosenzwig <br></br> Remote
                      via Zoom 6pm Mountain Standard Time
                    </a>
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
                      href="https://acceleratedresolutiontherapy.com/"
                      className="link"
                    >
                      Accelerated Resolution Therapy
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://acceleratedresolutiontherapy.com/"
                      className="link"
                    >
                      Accelerated Resolution Therapy
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
                <iframe
                  src="https://player.vimeo.com/video/666866491?h=026d5193ac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="iframe-video"
                  // style={{width: 700, height: 700 }}
                  title="Sara Allen Assessment Training - 12/23/2021, 11:50:48 AM"
                ></iframe>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="vid-wrapper">
              <div className="assessment-training-vid" style={{ padding: 0, margin: 0 }}>
                 <h2>Assessment Training</h2>
                <iframe
                  src="https://player.vimeo.com/video/659743288?h=be615770b4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="iframe-video"
                  // style={{width: 700, height: 700 }}
                  title="Sara Allen Assessment Training - 12/23/2021, 11:50:48 AM"
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
                src={ppnTherapist1Small}
              />
            </div>
          </Fade>
          <Fade left>
            <div className="text-left">
              <h1> Clinical Director's Message.</h1>
              <FaQuoteLeft />
              <p>
                We can update this once a week or whatever is needed, whenever
                the Clinical Director has a new message to share.
              </p>
              <FaQuoteRight />
            </div>
          </Fade>
        </div>

        {/* <ContactForm /> */}
        {/* <div className="addtl-resources">
          <Link to="/additionalresources" className="link t-link">
            Find Additional Resources Here
          </Link>
        </div> */}
        <UniFooter />
      </div>
    </div>
  );
};
export default PpnInfo;
