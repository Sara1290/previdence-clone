import React from "react";
import ppnTherapist3Small from "../../images/ppnTherapist3Small.jpg";
import './ppn.css'

const ProviderHeader = () => {
  return (
      <div className="provheader-container">
        <h1>Join our mission to facilitate healing for individuals and families</h1>
      <img className="provider-header-img" alt="therapist and client animation" src={ppnTherapist3Small}/>
      </div>
  )
}
export default ProviderHeader;