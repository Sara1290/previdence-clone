import React from 'react';
import ofd5 from '../../images/ofd5.png'
import safeUT from '../../images/safeUT.jpg'
import NavbarTwo from '../NavBar';
import ReactGA from 'react-ga';
import LiaisonFooter from '../LiaisonFooter';


const OfdTips = () => {
  ReactGA.pageview('src/Components/Tips/ofdTips.js');
  

  return (
    <div className="tips-outer">
      <NavbarTwo />
      <div className="tips-container">
        <div className="CIT">
        <img src={ofd5} alt="odgen city fire dept logo" />
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
          <li>Professional Support <br></br> 800-273-TALK(8255) </li>
        </ol>
        </div>
        <div className="phones">
          <h2>PFFU Firefighter Crisis Support Line</h2>
          <h3>
          <a className='link' href='tel:+1-801-587-1800'> 801-587-1800 </a>
            </h3>
          <h4>Peer Support Team</h4>
          
          <ul>
          <li className="LI">Targee Williams</li>
          <li className='li-phone'>
           <a className='link' href='tel:+1-801-726-6860'> 801-726-6860 </a> 
          </li>

          <li className="LI">Amanda King</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-726-6860'> 801-690-6473 </a>
            </li>

          <li className="LI">Darrell Young</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-725-9575'> 801-725-9575 </a>
            </li>

          <li className="LI">Nick Roberts</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-230-3759'> 801-230-3759 </a>
            </li>

          <li className="LI">Jesse Speth</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-540-2335'> 801-540-2335 </a>
            </li>

          <li className="LI">Lex Proudfit</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-603-7588'> 801-603-7588 </a>
            </li>

          <li className="LI">Andrew Snarr</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-864-3538'> 801-864-3538 </a>
            </li>

          <li className="LI">Jarod Barto</li>
          <li className='li-phone'>
          <a className='link' href='tel:+1-801-882-1143'> 702-882-1143 </a>
            </li>
          </ul>
        </div>
        <a href='https://safeut.org/frontline'>
        <img alt="safeUT" src={safeUT} />
        </a>
      </div>
      <LiaisonFooter />
    </div>
  )

};
export default OfdTips;