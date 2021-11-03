import React, {useCallback, useEffect} from 'react';


const TiaModal = ({showTiaModal, setShowTiaModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showTiaModal) {
      setShowTiaModal(false)
    }
  }, [setShowTiaModal, showTiaModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="tia-modal">
      {showTiaModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowTiaModal(prev => !prev)}>X</button>
        <p>This is the content about Tia!</p>
        </div>) : null }
    </div>
  )
}
export default TiaModal;