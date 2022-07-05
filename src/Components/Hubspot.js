import React, {useEffect} from "react";

const Hubspot = () => {
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
                    formId: '64affa20-9dc1-4341-adf1-8eaa24b4d6f6',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div className="hubspot-outer">
          <h1>Request A Demo</h1>
          <br></br>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default Hubspot;
