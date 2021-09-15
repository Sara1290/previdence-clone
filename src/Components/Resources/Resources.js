import React from 'react';
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
        <div className="text-only">
          <div className="texts">
            <h3>Depression Management</h3>
            <p>thisistheresource.com</p>
          </div>
          <button className="text-only-btn">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
export default Resources;