import React, {useCallback, useEffect} from 'react';


const SaraModal = ({showSaraModal, setShowSaraModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showSaraModal) {
      setShowSaraModal(false)
    }
  }, [setShowSaraModal, showSaraModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="sara-modal">
      {showSaraModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowSaraModal(prev => !prev)}>X</button>
        <p>This is the content about Sara!</p>
        </div>) : null }
    </div>
  )
}
export default SaraModal;