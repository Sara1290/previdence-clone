import React from 'react';
import OPDTips from '../../images/OPDTips.png'
import reactionsToTrauma from '../../images/reactionsToTrauma.png';
import safeUT from '../../images/safeUT.jpg'
// import medic from '../../images/medic.jpg';
import NavbarTwo from '../NavBar';
import ReactGA from 'react-ga';
import LiaisonFooter from '../LiaisonFooter';

const OpdTipsTest = () => {
  ReactGA.pageview('src/Components/Tips/opdTipsTest.js');


  return (
    <div className="tips-outer">
      <NavbarTwo />
      <div className="tips-container">
        <div className='tips-header red-dec-border background'>
            <h3>If you are in crisis please reach out to the crisis outreach hotline</h3>
            <h3><a className='red-link' href='tel:+1-801-273-8255'>800-273-TALK(8255)</a></h3>
            <h3>Or contact SafeUT by using the app</h3>
            <a href='https://safeut.org/frontline' target="_blank" rel="noreferrer">
            <img alt="safeUT" src={safeUT} className="safeUt"/>
            </a>
            <h3>or calling </h3>
            <h3 ><a className='red-link' href='tel:+1-833-372-3335'>833-372-3335</a></h3>
        </div>


        <div className="CIT">
            <img src={OPDTips} alt="odgen city police dept logo" />
            <h1>Crisis Intervention Tips</h1>

          <div className='tips-header-container'>           
            <div className='tips-header2 red-dec-borde background'>
                <h4>A Message From Bob</h4>
                <p style={{fontWeight: 400, padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>

            <div className='tips-header3 red-dec-borde background'>
                <h4>Mental Health Message</h4>
                <p style={{fontWeight: 400, padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>        

            <h5>Keep it simple. What do they need?</h5>
            <p> - Safe space, new environment</p>
            <p> - Water, snack, blanket</p>
            <p> - Walk, if they need to</p>
            <p> - Be present, listen, and validate</p>
            <p> - Focus on right now</p>
              <h5>ASK</h5>
              <p>- What's going on?</p>
              <p>- What triggered this?</p>
              <p>- When was the last time you ate and slept?</p>
              <p>- Directly ask about suicidal or homicidal intent. </p>
                  - if yes, get them to the hospital. If immediate danger, get police help.
              <p>- What has helped you calm down in the past?</p>
              <p>- Are you alone? Is there anyone you can be with?</p>
              <p>- Complete Crisis Response Plan</p>
              <p>- What is their plan for the next 24-48 hours?</p>

        </div>
        <div className="CRP">  
        <h2>Crisis Response Plan</h2>
        <ol>
          <li>Warning Signs</li>
          <li>Distraction and Coping Skills</li>
          <li>Reason for Living, Motivation to Keep Thinking Forward</li>
          <li>Social Support</li>
          <li>Professional Support <br></br> <a className='link' href='tel:+1-800-273-8255'>800-273-TALK(8255) </a></li>
        </ol>
        </div>
        {/* <div className="phones">
          <h2>PFFU Firefighter Crisis Support Line</h2>
          <h3>801-587-1800</h3>
          <h4>Peer Support Team</h4>
          
          <ul>
          <li className="LI">Targee Williams</li>
          <li>801-726-6860</li>

          <li className="LI">Amanda King</li>
          <li>801-690-6473</li>

          <li className="LI">Darrell Young</li>
          <li>801-725-9575</li>

          <li className="LI">Nick Roberts</li>
          <li>801-230-3759</li>

          <li className="LI">Jesse Speth</li>
          <li>801-540-2335</li>

          <li className="LI">Lex Proudfit</li>
          <li>801-603-7588</li>

          <li className="LI">Andrew Snarr</li>
          <li>801-864-3538</li>

          <li className="LI">Jarod Barto</li>
          <li>702-882-1143</li>
          </ul>
        </div> */}
        {/* <img alt="safeUT" src={safeUT} /> */}
        <img className='rtt' alt='reactions to trauma handout' src={reactionsToTrauma} />
      </div>
      <LiaisonFooter />
    </div>
  )

};
export default OpdTipsTest;