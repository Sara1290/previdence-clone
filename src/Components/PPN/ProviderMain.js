import React from 'react';
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
import './ppn.css'

const ProviderMain = () => {
  return (
    <div className='provmain-container'>
      <h1> Join our Previdence Professional Network </h1>
      <div className='prov-sidebyside'>
        <span className='prov-text'>As a PPN provider, you have the opportunity to assist us in the great work of connecting members in need to qualified therapists (that’s you!)
        </span>
        <img className='prov-img' alt='therapists' src={ppnTherapist3Small} />
      </div>
      <div className='prov-sidebyside'>
        <img className='prov-img' alt='therapists' src={ppnTherapist3Small} />
      <span className='prov-text'>who utilize appropriate therapy modalities to treat these individuals when you become a referral source for Previdence.
        </span>
      </div>
    </div>
  )
}
export default ProviderMain;