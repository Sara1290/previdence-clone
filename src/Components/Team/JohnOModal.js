import React, {useCallback, useEffect} from 'react';
import johnnyMarble from '../../images/johnnyMarble.jpg';

const JohnOModal = ({showJohnOModal, setShowJohnOModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showJohnOModal) {
      setShowJohnOModal(false)
    }
  }, [setShowJohnOModal, showJohnOModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="cody-modal">
      {showJohnOModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={johnnyMarble} />
        </div>
        <div className="modal-text">
          <h3>John O'Callaghan</h3>
          <h4>Business Development</h4>
          <p>John has held significant leadership positions at Concordia Capital, a hedge fund and separate account manager, where he was co-founder and responsible for assets under management.  Early in his career, at State Street Global Advisors, he helped create the advisor strategies division, which gained $1.6 billion in assets within two years. John serves as an advisor to Marron Energy, a Boston based solar energy development firm. He also serves on the advisory board for Celeris Media Group and is an advisor to the Chairman/Senior Partner of Taurus Investment Holdings and Mark Kendell Associates.</p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJohnOModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default JohnOModal;