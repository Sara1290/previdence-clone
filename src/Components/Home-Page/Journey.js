import React from 'react';
import frown from '../../images/frown.png';
import smile from '../../images/smile.png';
import heartbrain from '../../images/heartbrain.png';
import company1 from '../../images/company1.png';

const Journey = () => {

  return (
    <div className='journey-outer'>

      <h1>Empowering Lives One Mind at a Time</h1>
    <div className='journey-container'>
        <div className='journey-item'>
            <img src={frown} alt="frown" className='journey-icon'/>
          <div className='journey-texts'>
            <h3>Is your organization struggling with:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Sleep Issues</li>
              <li>Absenteeism</li>
              <li>Decreased work and school performance</li>
            </ul>
          </div>
        </div>

        <div className='journey-item-dark'>
          <div className='journey-texts-dark padright' >
            <h3>Previdence can help with:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Vetted Therapists</li>
              <li>Best Therapy Treatments</li>
              <li>Data</li>
              <li>Tech</li>
              <li>Personalized Care</li>
            </ul>
          </div>
          <img src={heartbrain} alt="brain" className='journey-icon-dark'/>
        </div>


        <div className='journey-item'>
        <img src={smile} alt="smile" className='journey-icon'/>
          <div className='journey-texts'>
            <h3>So your people can start experiencing:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Greater Quality of Life</li>
              <li>Increased Work and School Performance</li>
              <li>Improved Mindfullness</li>
              <li>Improved Home and Family Life</li>
              <li>Increased Unity</li>
            </ul>
          </div>
        </div>

        <div className='journey-item-dark'>
          <div className='journey-texts-dark'>
            <h3>Your organization will see:</h3>
            <ul style={{lineHeight:1.5}}>
              <li>Happier Attitudes</li>
              <li>Fewer Mishaps and Outbursts</li>
              <li>Better Performance</li>
              <li>Increased Presence and Mindfullness</li>
              <li>Increased Awareness and Positivity</li>
            </ul>
          </div>
          <img src={company1} alt="brain" className='journey-icon-dark'/>
        </div>

    </div>
    </div>
  )
}
export default Journey;