import React, {useCallback, useEffect} from 'react';


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
    <div className="john-modal">
      {showJohnModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJohnModal(prev => !prev)}>X</button>
        <p>This is the content about John!</p>
        </div>) : null }
    </div>
  )
}
export default JohnModal;