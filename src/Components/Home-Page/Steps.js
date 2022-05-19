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
          <h3>Assess</h3>
          <p>Previdence provides a panel of data-based assessments, which are scored by a trained clinician to determine an appropriate mode of care.</p>
        </div>
      </div>
      <div className='step-item'>
        <FaBrain className='step-icon' />
        <div className='step-texts'>
          <h3>Connect</h3>
          <p>A member of our Liaison Team will reach out to you personally, when necessary, to connect you to a vetted, trauma-trained therapist. </p>
        </div>
      </div>
      <div className='step-item'>
        <FaUserFriends className='step-icon' />
        <div className='step-texts'>
          <h3>Educate</h3>
          <p>Previdence provides education and trainings specific to each agency to strengthen mental health and well-being within the organization. </p>
        </div>
      </div>
      <div className='step-item'>
        <FaChartArea className='step-icon' />
        <div className='step-texts'>
          <h3>Monitor</h3>
          <p>Organizational and individual health and well-being are monitored through quarterly reports, collaboration with administration, and individual follow-up procedures.</p>
        </div>
</div>
      </div>

    </div>
  )
}
export default Steps;