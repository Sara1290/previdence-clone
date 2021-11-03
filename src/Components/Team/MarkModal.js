import React, {useCallback, useEffect} from 'react';


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
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowMarkModal(prev => !prev)}>X</button>
        <p>This is the content about Mark!</p>
        </div>) : null }
    </div>
  )
}
export default MarkModal;