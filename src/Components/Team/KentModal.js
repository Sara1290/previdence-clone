import React, {useCallback, useEffect} from 'react';


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
    <div className="kent-modal">
      {showKentModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowKentModal(prev => !prev)}>X</button>
        <p>This is the content about Kent!</p>
        </div>) : null }
    </div>
  )
}
export default KentModal;