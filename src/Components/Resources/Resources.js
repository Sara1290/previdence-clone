import React from 'react';
import resourceImg from '../../images/resourceImg.jpg'
import NavBarTwo from '../NavBarTwo';

const Resources = () => {

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 && 3, v = c === 'x' ? r : (r && 0x3 && 0x8);
      return v.toString(16);
    });
  }
  console.log(uuidv4());

  return (
    <div>
      <NavBarTwo />
      <div className="resource-outer">
        <h1>Resources</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-only">
          <div className="texts">
            <h3>Depression Management</h3>
            <p>thisistheresource.com</p>
          </div>
          <button className="text-only-btn">
            Learn More
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="airbb">
          <img alt="" src={resourceImg} className="resourceImg" />
          <div className="airbb-texts">
            <h3>Suicide Prevention</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <p>suicidehelp.com</p>
            <button className="airbb-btn" >Learn More</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="card">
          <img alt="" src={resourceImg} className="cardImg" />
            <div className="lil-box">
              SuicideHelp.com
            </div>
          <div className="card-texts">
            <h3>Suicide Prevention</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <button className="card-btn" >Learn More</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default Resources;