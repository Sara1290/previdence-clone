import React, {useCallback, useEffect} from 'react';
import markMarble2 from '../../images/markMarble2.png';


const MarkModal = ({showMarkModal, setShowMarkModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showMarkModal) {
      setShowMarkModal(false)
    }
  }, [setShowMarkModal, showMarkModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="mark-modal">
      {showMarkModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={markMarble2} />
        </div>
        <div className="modal-text">
          <h3>Mark Kendell</h3>
          <h4>CEO</h4>
          <p>Mark is a purpose-driven serial entrepreneur and runs his family office focusing on direct investments and what he calls “true impact” opportunities. Very early in his career, he founded Kendell & Associates, LLC a venture banking firm, specializing in the creation, financing, and operation of a broad spectrum of companies, innovations, and investment opportunities. Since that time, he has provided leadership as an entrepreneur and investor in building new innovative companies and technologies. 
  
          </p>
        </div>
        <button aria-label="CloseModal" className="exit-btn " onClick={() => setShowMarkModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default MarkModal;