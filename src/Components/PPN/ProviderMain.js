import React from 'react';
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
import './ppn.css'

const ProviderMain = () => {
  return (
    <div className='provmain-container'>
      <h1> Join our Previdence Professional Network </h1>
      <div className='prov-sidebyside'>
        <p className='prov-text'>
        As a Previdence Professional Network (PPN) provider, you have the opportunity to assist us in the great work of providing services for our client referrals who need qualified, specialized therapists to assist in guiding them on their path to healing and enhanced quality of life.
        </p>
        <div className='provmain-imgs'>
        <img className='prov-main-img' alt='therapists' src={ppnTherapist3Small} />
      <img className='prov-main-img display-none' alt='therapists' src={ppnTherapist3Small} />
      </div>
    </div>
      {/* <div className='prov-sidebyside'>
      <p className='prov-text'>who need qualified, specialized therapists to assist in guiding them on their path to healing and enhanced quality of life.
        </p>
      </div> */}
    </div>
  )
}
export default ProviderMain;