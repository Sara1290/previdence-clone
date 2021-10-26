import React from 'react';
import TheClip from '../../images/TheClip.mp4';
import PrevLogo from '../../images/PrevLogo.png';


const TheClipComponent = () => {

  return (
    <div className="background-video">
    <video autoPlay loop muted className="prev-clip">
       <source src={TheClip} type="video/mp4" />
    </video>
  <div className="logo-wrapper">
    <img alt="previdence logo" src={PrevLogo} className="prev-logo" />
  </div>
  </div>
  )
}
export default TheClipComponent;