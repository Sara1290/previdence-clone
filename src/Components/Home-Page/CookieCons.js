// import React, { useState } from "react";
// import CookieConsent from "react-cookie-consent";

// const App = () => {
//   const [cookiesAccepted, setCookiesAccepted] = useState(false);
//   const [cookieConsentVisible, setCookieConsentVisible] = useState(true);

//   const handleAccept = () => {
//     // Your logic for accepting cookies
//     console.log("Cookies accepted");
//     setCookiesAccepted(true);
//     setCookieConsentVisible(false); // Hide the CookieConsent component
//   };

//   const handleOptOut = () => {
//     // Your logic for opting out of cookies
//     console.log("Opting out of cookies");

//     // Calculate expiration date 30 days into the future
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 30);

//     // Set the cookie with the calculated expiration date
//     document.cookie = `myCookieConsent=optedOut; expires=${expirationDate.toUTCString()}; path=/;`;

//     setCookiesAccepted(false);
//     setCookieConsentVisible(false); // Hide the CookieConsent component
//   };

//   const LearnMore = () => {
//     // Your logic for handling the custom button click
//     console.log("Custom button clicked");
//     // Specify the link you want to navigate to
//     const customLink = "http://localhost:3000/#/cookies";
//     // Navigate to the specified link
//     window.location.href = customLink;
//   };

//   return (
//     <div>
//       {/* Your App Content */}
//       {cookieConsentVisible && (
//         <CookieConsent
//           location="bottom"
//           buttonText="Accept"
//           cookieName="myCookieConsent"
//           style={{ background: "#2B373B" }}
//           buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
//           expires={365}
//           onAccept={handleAccept}
//           disableButton={!cookiesAccepted}
//         >
//           This website uses cookies to enhance the user experience.

//           <button
//           className="cookie-btn"
//           onClick={LearnMore}
//           href="https://previdence.com/#/cookies"
//           >
//             Learn More
//         </button>
        
//           <button
//             className="cookie-btn"
//             type="button"
//             onClick={handleOptOut}
//             style={{ marginLeft: "10px", cursor: "pointer" }}
//           >
//             Opt Out
//           </button>
//         </CookieConsent>
//       )}
//     </div>
//   );
// };

// export default App;
