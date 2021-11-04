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
          <p>Here is a very good bio about Mark! It’s a paragraph, so about 5-8 sentences. Good things to include are qualifiers for the position, background (not a job history but a background of you) and maybe a hobby or something important to you.</p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowMarkModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default MarkModal;