import React from 'react';
import OPDTips from '../../images/OPDTips.png'
// import reactionsToTrauma from '../../images/reactionsToTrauma.png';
// import reaction2Trauma from '../../images/reaction2Trauma.png';
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
            <h3>If you are in crisis please reach out to the Ogden Police Department Peer Support line</h3>
            <h3><a className='red-link' href='tel:+1-385-264-2177'>(385)-264-2177</a></h3>
            <h3>Or contact SafeUT by using the app</h3>
            <a href='https://safeut.org/frontline' target="_blank" rel="noreferrer">
            <img alt="safeUT" src={safeUT} className="safeUt"/>
            </a>
            <h3>or by calling </h3>
            <h3 ><a className='red-link' href='tel:+1-833-372-3335'>(833)-372-3335</a></h3>
            <h3>Contact the Crisis Outreach Hotline by calling</h3><h3 ><a className='red-link' href='tel:+1-800-273-8255'>(800)-273-TALK(8255)</a></h3>
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
        {/* <img className='rtt' alt='reactions to trauma handout' src={reactionsToTrauma} />
        <img className='rtt' alt='reactions to trauma handout' src={reaction2Trauma} /> */}

        <div className='reactions-to-trauma'>
          <h2>Reactions to Trauma</h2>
          <h5>During the incidident, the body/mind may experience: </h5>
          <ul>
            <li>Visual Illusions</li>
            <li>Fast Motion</li>
            <li>Heightened Visual Clarity</li>
            <li>Mute/Diminished Sound</li>
            <li>Automatic Pilot</li>
            <li>Amplified Sound</li>
            <li>Memory Loss for Part of the Event</li>
            <li>Slow Motion</li>
            <li>Slowing / Accelerated Time</li>
            <li>Vivid Images</li>
            <li>Dissociation</li>
            <li>Temporary Paralysis</li>
            <li>Tunnel Vision</li>
          </ul>
          <h5>Following a critical incidident, a first responder may experience: </h5>
          <table>
            <thead className='table-columns'>
              <th>BODY</th>
              <th>MIND</th>
              <th>EMOTIONS</th>
              <th>RELATIONSHIPS/<br></br>BEHAVIORAL</th>
            </thead>
            <tbody className='table-rows-container'>
              <tr className='table-row'>
                <td>Sleep Problems</td>
                <td>Confusion</td>
                <td>Shock</td>
                <td>Suspiciousness</td>
              </tr>
              <tr>
                <td>Appetite Changes</td>
                <td>Disorientation</td>
                <td>Guilt</td>
                <td>Distrust</td>
              </tr>
              <tr>
                <td>Nausea</td>
                <td>Indecisivness</td>
                <td>Fear</td>
                <td>Irritability</td>
              </tr>
              <tr>
                <td>Headaches</td>
                <td>Worry</td>
                <td>Emotional Numbing</td>
                <td>Conflict</td>
              </tr>
              <tr>
                <td>Fatigue/Exhaustion</td>
                <td>Memory Loss</td>
                <td>Grief</td>
                <td>Withdrawal</td>
              </tr>
              <tr>
                <td>Wired/Jumpy</td>
                <td>Shortened Attention Span</td>
                <td>Resentment</td>
                <td>Isolation</td>
              </tr>
              <tr>
                <td>Bodily Aches/Pains</td>
                <td>Difficulty Concentrating</td>
                <td>Shame</td>
                <td>Criticalness</td>
              </tr>
              <tr>
                <td>Racing Heartbeat</td>
                <td>Unwanted Memories</td>
                <td>Sadness</td>
                <td>Feelings of Rejection / Abandonment</td>
              </tr>
              <tr>
                <td>Digestive Problems</td>
                <td>Intrusive Thoughts</td>
                <td>Anger</td>
                <td>Increased Controlling Type Behavior</td>
              </tr>
              <tr>
                <td>Change in Libido</td>
                <td>Self-Blame</td>
                <td>Over Sensitivity</td>
                <td>Change in Activity</td>
              </tr>
              <tr>
                <td>Nightmares</td>
                <td>Poor Abstract Thinking</td>
                <td>Helplessness</td>
                <td>Emotional Outbursts</td>
              </tr>
              <tr>
                <td></td>
                <td>Amnesia</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p>Individuals may experience changes in their spirituality, such as questioning their meaning or loss in faith as well</p>
          <h5>Self Care after a critical incidident:</h5>
          <ul>
            <li>Within the first 24-48 hours, alternate periods of strenuous physical exercise with relaxation</li>
            <li>Structure your time, maintain your routine</li>
            <li>Keep busy</li>
            <li>Spend time with others</li>
            <li>Talk to people</li>
            <li>Keep your life as normal as possible</li>
            <li>Don't make any big life changes</li>
            <li>Keep a journal - write your way through the sleepless hours</li>
            <li>Give yourself permission to feel bad</li>
            <li>Accept offered help</li>
            <li>Avoid Numbing the emotions with drugs or alcohol</li>
            <li>Eat nutritous, well-balanced meals</li>
            <li>Avoid excessive use of caffiene</li>
          </ul>
          <h5>When To Get Help</h5>
          <p>Contact a Trauma-trained Mental Health Professional Anytime</p>
          <ul>
            <li>New reactions last longer than a month</li>
            <li>When your trauma reactions are affecting your desired quality of life</li>
            <li>When your trauma reactions are affecting those around you</li>
          </ul>
        </div>

            <h5>If you're talking to an officer in need, consider the following:</h5>
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
      </div>
      <LiaisonFooter />
    </div>
  )

};
export default OpdTipsTest;