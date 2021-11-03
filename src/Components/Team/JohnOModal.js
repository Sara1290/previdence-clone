import React, {useCallback, useEffect} from 'react';


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
    <div className="johno-modal">
      {showJohnOModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJohnOModal(prev => !prev)}>X</button>
        <p>This is the content about JohnO!</p>
        </div>) : null }
    </div>
  )
}
export default JohnOModal;