import React from 'react';
import {FaUsers} from 'react-icons/fa';


const Blurbs = () => {

  return (
    <div className='blurb-container' style={{backgroundColor: 'white'}}>

      <div className='blurb'>
        <FaUsers />
        <p style={{width: 150, margin: 10}}>
        Served Over 10,000 First Responders
          </p>
      </div>

      <div className='blurb'>
        <FaUsers />
        <p style={{width: 150, margin: 10}}>
        Peer Support Team Set Up and Specialized Training
          </p>      
      </div>

      <div className='blurb'>
        <FaUsers />
        <p style={{width: 150, margin: 10}}>
        Saves Lives!
          </p>     
      </div>

      <div className='blurb'>
        <FaUsers />
        <p style={{width: 150, margin: 10}}>
        92% Decrease in PTSD Symptoms After 4 Sessions
          </p>     
      </div>

      <div className='blurb'>
        <FaUsers />
        <p style={{width: 150, margin: 10}}>
        Critical Incident and Crisis Response Services
          </p>     
      </div>

    </div>
  )
}
export default Blurbs;