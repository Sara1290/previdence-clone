import React, {useCallback, useEffect} from 'react';


const CodyModal = ({showCodyModal, setShowCodyModal}) => {

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showCodyModal) {
      setShowCodyModal(false)
    }
  }, [setShowCodyModal, showCodyModal]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <div className="cody-modal">
      {showCodyModal ? (<div className="team-modal"> 
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowCodyModal(prev => !prev)}>X</button>
        <p>This is the content about Cody!</p>
        </div>) : null }
    </div>
  )
}
export default CodyModal;