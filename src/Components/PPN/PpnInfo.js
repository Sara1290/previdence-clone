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
            <p>Reminder: Please contact Previdence Therapist Advocate Team for Basic ART registration information / non profit discount.</p>
            <br></br>
            <br></br>
            <div className="training-columns">
              <Fade left>
                <div className="utah-trainings">
                  <h2>Utah Providers</h2>
                  <h5>ART - Basic Training</h5>
                  {/* <p style={{borderWidth: 1, borderColor: 'black', borderStyle: 'solid', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}> 
                    <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/401+E+400+N,+Price,+UT+84501/@39.6066454,-110.7972132,17z/data=!3m1!4b1!4m5!3m4!1s0x874eb950232c87cf:0x986dfcde628b3fa5!8m2!3d39.6066454!4d-110.7972132"  className="link" style={{
                        fontWeight: 400, fontStyle: "italic"
                      }}>
                      USU Campus, C.I.B. Building <br></br>
                      401 E. 400 N. 
                      Price, UT 84501
                    </a>
                    <p>
                    June 23 - 25 
                  </p>
                  </p> */}
                  <p style={{borderWidth: 1, borderColor: 'black', borderStyle: 'solid', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}> 
                    <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/5320+Adams+Ave+Pkwy,+Ogden,+UT+84405/@41.1671001,-111.9699945,17z/data=!3m1!4b1!4m5!3m4!1s0x875305eedc7371f5:0x2f3acb04c50241b7!8m2!3d41.1670961!4d-111.9678058"  className="link" style={{
                        fontWeight: 400, fontStyle: "italic"
                      }}>
                      Weber School District <br></br>
                      5320 Adams Avenue Pkwy
                      Ogden, UT 84403
                    </a>
                    <p>
                    August 15 - 16 
                  </p>
                  </p>
                  <p style={{borderWidth: 1, borderColor: 'black', borderStyle: 'solid', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}> 
                    <a target='_blank' rel="noreferrer" href="http://maps.google.com/maps?q=6545+Combee+Rd,+Ogden,+UT+84403"  className="link" style={{
                        fontWeight: 400, fontStyle: "italic"
                      }}>
                      Crossroads Christian Fellowship <br></br>
                      6545 Combee Rd.
                      Ogden, UT 84403
                    </a>
                  {/* <p>
                    June 9 - 11 <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/dir/41.1140776,-111.9641728/451+E+400+N,+Price,+UT+84501/@40.3571789,-111.9508969,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874eb9542ccefdab:0x368b36a2c091208e!2m2!1d-110.8039829!2d39.607914"  className="link" style={{
                        fontWeight: 400, fontStyle: "italic"}}>
                      USU Campus, C.I.B. Building<br></br>
                      401 E 400 N
                      Price, UT 84403
                    </a> 
                  </p> */}
                  <p>
                    August 25 - 27 
                  </p>
                  {/* <p>
                    October 20 - 22 
                  </p> */}
                  <p>
                    November 17 - 19 
                  </p>
                  <p>
                    December 15 - 17 
                  </p>
                  </p>
                  {/* <h5>ART - Advanced and Enhanced</h5>
                  <p>
                  May 5 - 8  
                  Salt Lake City
                </p> */}


                  <p style={{borderWidth: 1, borderColor: 'black', borderStyle: 'solid', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}> 
                    <a target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/90+E+200+N,+Logan,+UT+84321/@41.7347988,-111.8349198,17z/data=!4m13!1m7!3m6!1s0x87547e732a3af5d7:0x56a912f87a9226b6!2s90+E+200+N,+Logan,+UT+84321!3b1!8m2!3d41.7347948!4d-111.8327311!3m4!1s0x87547e732a3af5d7:0x56a912f87a9226b6!8m2!3d41.7347948!4d-111.8327311"  className="link" style={{
                        fontWeight: 400, fontStyle: "italic"
                      }}>
                      Bear River Mental Health Services <br></br>
                      90 E 200 N.
                      Logan, UT 84321
                    </a>
                    <p>
                    October 20 - 22 
                  </p>
                  </p>

                </div>
              </Fade>
              <Fade right>
                <div className="national-trainings">
                  <h2>National Providers</h2>
                  <h5>
                    Visit the ART websites via the links below<br></br> to check for available
                    trainings
                  </h5>
                  <p>
                    <a
                      href="https://acceleratedresolutiontherapy.com/"
                      className="link"
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#8f2a2b",
                      }}
                    >
                      Accelerated Resolution Therapy
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://artherapyinternational.org/events/maps/ "
                      
                      className="link"
                      style={{
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: "#8f2a2b",
                      }}
                    >
                      ART International
                    </a>
                  </p>
                </div>
              </Fade>
            </div>
          </div>
          {/* <Fade left>
                <div className="monthly-clinicals">
                  <h2>Monthly Clinicals</h2>
                  <h5>These clinicals will include a 15 minute training led by Kent Allen,<br></br> followed by a Q&A collaboration session with the attendees.</h5>
            <div>
                  <p>
                     June 9th <br></br>  
                     6p - 7p Mountain Time<br></br>
                     <a
                      href="https://us02web.zoom.us/j/89430956818"
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
                     July 14th<br></br> 
                     6p - 7p Mountain Time<br></br>
                     <a
                      href="https://us02web.zoom.us/j/89430956818"
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
              </Fade> */}
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
