import React, {useCallback, useEffect} from 'react';


const JeffModal = ({showJeffModal, setShowJeffModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showJeffModal) {
      setShowJeffModal(false)
    }
  }, [setShowJeffModal, showJeffModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="jeff-modal">
      {showJeffModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJeffModal(prev => !prev)}>X</button>
        <p>This is the content about Jeff!</p>
        </div>) : null }
    </div>
  )
}
export default JeffModal;