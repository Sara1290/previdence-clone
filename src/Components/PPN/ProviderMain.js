import React from 'react';
import ppnTherapist2Small from "../../images/ppnTherapist2Small.jpg";
import ppnTherapist1Small from "../../images/ppnTherapist1Small.jpg";
import './ppn.css'

const ProviderMain = () => {
  return (
    <div className='provmain-container'>
      <h1> Previdence Professional Network </h1>
      <div className='prov-sidebyside'>
        <p className='prov-text'>
        As a Previdence Professional Network (PPN) provider, your combined expertise and experience will enable us to serve individuals who are seeking qualified therapists, focused on trauma-informed care and other relevant therapy modalities to help guide them on their path to healing and enhanced quality of life.  
        </p>
        <div className='provmain-imgs'>
        <img className='prov-main-img' alt='therapists' src={ppnTherapist1Small} />
      <img className='prov-main-img display-none' alt='therapists' src={ppnTherapist2Small} />
      </div>
      <p className='prov-text'>
      Many of our clients are first responders and medical professionals. We're searching for therapists who are trained in highly effective evidence-based modalities, preferably EMDR and/or ART (Accelerated Resolution Therapy). Additional specialties are also welcomed.  
        </p>
    </div>
      {/* <div className='prov-sidebyside'>
      <p className='prov-text'>who need qualified, specialized therapists to assist in guiding them on their path to healing and enhanced quality of life.
        </p>
      </div> */}
    </div>
  )
}
export default ProviderMain;