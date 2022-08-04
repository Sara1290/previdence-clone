// import React, {useCallback, useEffect} from 'react';
// import codyNew from '../../images/codyNew.png';

// const CodyModal = ({showCodyModal, setShowCodyModal}) => {

//   const keyPress = useCallback(e => {
//     if(e.key === 'Escape' && showCodyModal) {
//       setShowCodyModal(false)
//     }
//   }, [setShowCodyModal, showCodyModal]);

//   useEffect(() => {
//     document.addEventListener('keydown', keyPress)
//   }, [keyPress])

//   return (
//     <div className="cody-modal">
//       {showCodyModal ? (<div className="team-modal"> 
//         <div className="modal-img-container">
//           <img alt="Team Member" className="modal-img" src={codyNew} />
//         </div>
//         <div className="modal-text">
//           <h3>Cody Wilson</h3>
//           <h4>PPN & CCS Manager</h4>
//           <p>Cody has 30 years of experience in organizational management roles. She has a degree in Marriage and Family Studies and is a certified specialist in youth and child education. Cody has significant experience in customer relations and advocacy.  She is a leading volunteer in her community in various capacities.   </p>
//         </div>
//         <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowCodyModal(prev => !prev)}>X</button>
//         </div>) : null }
//     </div>
//   )
// }
// export default CodyModal;