import React, {useCallback, useEffect} from 'react';
import tiaMarble from '../../images/tiaMarble.png';

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
    <div>
      {showTiaModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={tiaMarble} />
        </div>
        <div className="modal-text">
          <h3>Tia White, DSW (ABD), MSW, LCSW</h3>
          <h4>Director of Research and Development</h4>
          <p>Tia is a mental health and wellness consultant, researcher, program and curriculum developer, as well as a training instructor to first responders and public safety personnel. She is a Licensed Clinical Social Worker and has 20 years of experience working with a variety of populations and social systems. Additionally, she serves as an adjunct instructor for two local universities.</p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowTiaModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default TiaModal;