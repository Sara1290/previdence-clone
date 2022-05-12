import React from 'react';
// import steps from '../../images/steps.png';
import {FaBrain, FaUserFriends, FaChartArea, FaUsers} from 'react-icons/fa';

const Steps = () => {



  return (
    <div className='steps-outer'>
      <h1>Getting Care Through the Previdence Platform <br></br> Step by Step</h1>
      <div className='steps-inner'>

      <div className='step-item'>
        <FaUsers className='step-icon'/>
        <div className='step-texts'>
          <h3>Introduce</h3>
          <p>We’ll introduce your department or organization to our platform. A deep dive into what Previdence is, and what we can offer your department or organization.</p>
        </div>
      </div>
      <div className='step-item'>
        <FaBrain className='step-icon' />
        <div className='step-texts'>
          <h3>Assess</h3>
          <p>Take our panel of data-driven, outcome-based assessments. They will be scored by a clinician to determine an appropriate level of care.</p>
        </div>
      </div>
      <div className='step-item'>
        <FaUserFriends className='step-icon' />
        <div className='step-texts'>
          <h3>Connect</h3>
          <p>A member of our liaison team will reach out to you to connect you to a therapist. 
          We partner with trauma trained therapists who practive evidence based modalities.</p>
        </div>
      </div>
      <div className='step-item'>
        <FaChartArea className='step-icon' />
        <div className='step-texts'>
          <h3>Monitor</h3>
          <p>Attend therapy appointments and track your progess</p>
        </div>
</div>
      </div>

    </div>
  )
}
export default Steps;