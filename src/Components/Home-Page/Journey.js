import React from 'react';
import redfrown from '../../images/redfrown.png';
import redsmile from '../../images/redsmile.png';
import redheartbrain from '../../images/redheartbrain.png';
import redgraph from '../../images/redgraph.png';

const Journey = () => {

  return (
    <div className='journey-outer'>

      <h1>Empowering Lives One Mind at a Time</h1>
    <div className='journey-container'>
        <div className='journey-item'>
            <img src={redfrown} alt="frown" className='journey-icon'/>
          <div className='journey-texts'>
            <h3>Is your organization struggling with:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Sleep Issues</li>
              <li>Absenteeism</li>
              <li>Decreased performance</li>
            </ul>
          </div>
        </div>

        <div className='journey-item-dark'>
          <div className='journey-texts-dark padright' >
            <h3>Previdence can help with:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Identifying mental health needs</li>
              <li>Creating a confidential path to support</li>
              <li>Consulting leadership using anonymized mental health data</li>
              <li>Training teams and leadership on effective MH practices</li>
              <li>Personalized Care</li>
            </ul>
          </div>
          <img src={redheartbrain} alt="brain" className='journey-icon-dark'/>
        </div>


        <div className='journey-item'>
        <img src={redsmile} alt="smile" className='journey-icon'/>
          <div className='journey-texts'>
            <h3>So your people can start experiencing:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Greater Quality of Life</li>
              <li>Increased Performance</li>
              <li>Improved Mindfullness</li>
              <li>Improved Home and Family Life</li>
              <li>Increased satisfaction of their role</li>
            </ul>
          </div>
        </div>

        <div className='journey-item-dark'>
          <div className='journey-texts-dark'>
            <h3>Your organization will <br></br> see:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Happier Attitudes</li>
              <li>Fewer Mishaps and Outbursts</li>
              <li>Better Performance</li>
              <li>Increased Presence and Mindfullness</li>
              <li>Increased Awareness and Positivity</li>
            </ul>
          </div>
          <img src={redgraph} alt="brain" className='journey-icon-dark'/>
        </div>

    </div>
    </div>
  )
}
export default Journey;