import React, {useEffect} from "react";
import NavBar from '../NavBar';

const PpnApplication = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
        // @TS-ignore
        if (window.hbspt) {
            // @TS-ignore
            window.hbspt.forms.create({
                portalId: '19949818',
                formId: 'd3c0909c-bb9f-43d5-af95-705c16e64ee0',
                target: '#hubspotForm'
            })
        }
    });
}, []);


return (
  <div>
    <NavBar />
      <div className="hubspot-outer">
      <h1>Fill out application</h1>
     <div id="hubspotForm"></div>
   </div>
  </div>
);

}
export default PpnApplication;