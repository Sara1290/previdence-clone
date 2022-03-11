import React from "react";
import NavBar from "../NavBar";
import Fade from "react-reveal/Fade";
import ppnTherapist2Small from "../../images/ppnTherapist2Small.jpg";
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
import kentMarble from '../../images/kentMarble.png'
import ReactGA from 'react-ga';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PpnFooter from "../PpnFooter";


const PpnInfo = () => {
  ReactGA.pageview('src/Components/PPN/PpnInfo.js');

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
              <h1>Thank you, for joining us in this great work</h1>
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
                     March 9 - 11  
                     Weber School District
                  </p>
                  <p>
                     March 10 - 12  
                     Sutton Clinical Services
                  </p>
                  <p>
                    April 28 - 30 
                    Ogden
                  </p>
                  <p>
                    June 16 - 18 
                    Ogden
                  </p>
                  <p>
                    August 25 - 27 
                    Ogden
                  </p>
                  <p>
                    October 20 - 22 
                    Ogden
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="">
                  <h2>National Providers</h2>
                  <h5>
                    Visit the ART websites below<br></br> to check for available
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
          <Fade left>
                <div className="monthly-clinicals">
                  <h2>Monthly Clinicals</h2>
                  <h5>These clinicals will include a 15 minute training led by Kent Allen,<br></br> followed by a Q&A collaboration session with the attendees.</h5>
            <div>
                  <p>
                     April 14th<br></br> 
                     6p - 7p Mountain Time<br></br>
                     <a
                      href=" https://us02web.zoom.us/j/87918245986?pwd=dXJWNDJhN0NwUmlTZVhKUy90UnhlQT09"
                      className="link"
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#8f2a2b",
                      }}
                    >
                      Join Here
                    </a>
                  </p>
                  <p>
                     May 12th <br></br>  
                     6p - 7p Mountain Time<br></br>
                     <a
                      href=" https://us02web.zoom.us/j/87918245986?pwd=dXJWNDJhN0NwUmlTZVhKUy90UnhlQT09"
                      className="link"
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#8f2a2b",
                      }}
                    >
                      Join Here
                    </a>
                  </p>
                  <p>
                     June 9th <br></br>  
                     6p - 7p Mountain Time<br></br>
                     <a
                      href=" https://us02web.zoom.us/j/87918245986?pwd=dXJWNDJhN0NwUmlTZVhKUy90UnhlQT09"
                      className="link"
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#8f2a2b",
                      }}
                      >
                      Join Here
                    </a>
                  </p>
                </div>
              </div>
              </Fade>
        </div>
        <div className="training-videos-container">
          <Fade left>
            <div className="vid-wrapper">
              <div
                className="assessment-training-vid culture-training-vid"
                style={{ padding: 0, margin: 0 }}
              >
                <h2>Culture Training</h2>
                <h5 style={{
                  fontWeight: 400,
                }} >See 
                   <a className="link-ppn" target="_blank" rel="noreferrer" href="https://previdence.com/#/additionalresources"> Additional Resources </a>  
                  for the slides featured in the Culture Training Video</h5>
                <iframe
                  src="https://player.vimeo.com/video/672921028?h=6ce79dbb3f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                   <a className="link-ppn" target="_blank" rel="noreferrer" href="https://previdence.com/#/additionalresources"> Additional Resources </a>  
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
                src={kentMarble}
              />
            </div>
          </Fade>
          <Fade left>
            <div className="text-left">
              <h1> Clinical Director's Message.</h1>
              <FaQuoteLeft />
              <p>
              As therapists there is something I would like you to consider as you look at your therapy goals: Do you instill hope into the lives of your clients? 
              Our first responders experience a tremendous amount of ongoing stress. Our role as therapists is to help them get their lives back in the fastest way possible. <br></br>
              When someone comes into my office who has experienced trauma, I try to have them leave with hope. I'm hoping many of you have discovered that when you use ART in your FIRST SESSION, your clients walk away with a smile and maybe, for the first time in many months, don't feel the heavy load they have been carrying.<br></br> It is still a wonder to me that after just 3-4 sessions an individual who has experienced horrible things can say to me, "I've gotten my life back'. 
              That's the Previdence way!

              </p>
              <FaQuoteRight />
            </div>
          </Fade>
        </div>
        <PpnFooter />
      </div>
    </div>
  );
};
export default PpnInfo;
