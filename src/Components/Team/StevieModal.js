import React, {useCallback, useEffect} from 'react';
import StevieMarble2 from '../../images/StevieMarble2.png';


const StevieModal = ({showStevieModal, setShowStevieModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showStevieModal) {
      setShowStevieModal(false)
    }
  }, [setShowStevieModal, showStevieModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="cody-modal">
      {showStevieModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={StevieMarble2} />
        </div>
        <div className="modal-text">
          <h3>Stevie Rentmeister</h3>
          <h4>Office Manager</h4>
          <p>Stevie comes to Previdence with over 30 years in business management, accounting, and human resource experience.<br></br>  She has worked in the business industry of profit and non-profit organizations.  During this time, she has also supported her husband in these areas and managed their other four businesses.  Stevie is committed to providing exceptional leadership, management, financial administration and staff development to achieve the vision, goals and priorities of Previdence.</p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowStevieModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default StevieModal;