import React, {useCallback, useEffect} from 'react';
import kentMarble from '../../images/kentMarble.png';


const KentModal = ({showKentModal, setShowKentModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showKentModal) {
      setShowKentModal(false)
    }
  }, [setShowKentModal, showKentModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="cody-modal">
      {showKentModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={kentMarble} />
        </div>
        <div className="modal-text">
          <h3>Kent Allen, MS, LMFT</h3>
          <h4>Founder</h4>
          <p>Kent is the founder of Previdence Corporation. He is a master clinician practicing therapy for over 30 years. He is a graduate of Auburn University and is a licensed Marriage and Family Therapist.  Kent is the organizer of the Widow/Widower’s Grieving Group and is an accomplished speaker.</p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowKentModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default KentModal;