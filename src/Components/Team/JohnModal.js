import React, {useCallback, useEffect} from 'react';
import johnMarble from '../../images/johnMarble.png'

const JohnModal = ({showJohnModal, setShowJohnModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showJohnModal) {
      setShowJohnModal(false)
    }
  }, [setShowJohnModal, showJohnModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="cody-modal">
      {showJohnModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={johnMarble} />
        </div>
        <div className="modal-text">
          <h3>John Wright</h3>
          <h4>IT Director</h4>
          <p>John has over 25 years of IT experience, including professional development and management experience in a wide range of industries including manufacturing, medical, logistics, and payment processing.  John has overseen projects with legacy systems, new systems design and development, moving programs into the cloud, and high availability systems that process millions of pieces of data daily all with a focus on creating software that is a useful tool to help people complete their job successfully.  John is also an adjunct professor at Weber State University mentoring new students in IT. </p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJohnModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default JohnModal;