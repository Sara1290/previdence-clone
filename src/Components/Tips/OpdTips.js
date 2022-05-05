import React from 'react';
import OPDTips from '../../images/OPDTips.png';
import safeUT from '../../images/safeUT.jpg';
import reactionsToTrauma from '../../images/reactionsToTrauma.png';
import NavbarTwo from '../NavBar';
import LiaisonFooter from '../LiaisonFooter';
import ReactGA from 'react-ga';

const OpdTips = () => {
  ReactGA.pageview('src/Components/Tips/opdTips.js');


  return (
    <div className="tips-outer">
      <NavbarTwo />
      <div className="tips-container">
        <div className="CIT">
        <img src={OPDTips} alt="odgen city police dept logo" />
        <h1>Crisis Intervention Tips</h1>
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
          <li>Professional Support <br></br> <a className='link' href='tel:+1-801-273-8255'> 800-273-TALK(8255)</a> </li>
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
        <img className='rtt' alt='reactions to trauma handout' src={reactionsToTrauma} />
        <img alt="safeUT" src={safeUT} />
      </div>
      <LiaisonFooter />
    </div>
  )

};
export default OpdTips;