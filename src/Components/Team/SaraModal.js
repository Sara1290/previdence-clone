// import React, {useCallback, useEffect} from 'react';
// import saraMarble2 from '../../images/saraMarble2.png';

// const SaraModal = ({showSaraModal, setShowSaraModal}) => {

//   const keyPress = useCallback(e => {
//     if(e.key === 'Escape' && showSaraModal) {
//       setShowSaraModal(false)
//     }
//   }, [setShowSaraModal, showSaraModal]);

//   useEffect(() => {
//     document.addEventListener('keydown', keyPress)
//   }, [keyPress])

//   return (
//     <div className="cody-modal">
//       {showSaraModal ? (<div className="team-modal"> 
//         <div className="modal-img-container">
//           <img alt="Team Member" className="modal-img" src={saraMarble2} />
//         </div>
//         <div className="modal-text">
//           <h3>Sara Allen, ME</h3>
//           <h4>Public Safety Liaison Manager</h4>
//           <p>Sara has experience as an EMT, 911 dispatcher, and mental health professional. She is a retired school counselor and volunteers as a law enforcement chaplain. She currently serves as the mental health chair on the executive board of the Utah CISM (Critical Incident Stress Management) Team where she has led hundreds of critical incident stress debriefings for first responders since first getting on the team in 1995.</p>
//         </div>
//         <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowSaraModal(prev => !prev)}>X</button>
//         </div>) : null }
//     </div>
//   )
// }
// export default SaraModal;