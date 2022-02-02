import React from 'react'
import NavBar from '../NavBar';
import UniFooter from '../UniFooter';
import AssessmentCarousel from './AssessmentCarousel';
import CultureCarousel from './CultureCarousel';

const AdditionalResources = () => {

  return (
  <div>
    <NavBar />
    <div className='addl-outer' >
      <h1> Additional Resources</h1>

      <div className='slides-container'>
        <h3>Assessment Training Slides</h3>
        <AssessmentCarousel />
      </div>

      <div className='slides-container'>
        <h3>Culture Training Slides</h3>
        <CultureCarousel />
      </div>

    </div>
    <UniFooter />
  </div>
  )
}
export default AdditionalResources;