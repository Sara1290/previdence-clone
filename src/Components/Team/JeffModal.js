import React, {useCallback, useEffect} from 'react';
import jeffMarble2 from '../../images/jeffMarble2.png';


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
    <div className="cody-modal">
      {showJeffModal ? (<div className="team-modal"> 
        <div className="modal-img-container">
          <img alt="Team Member" className="modal-img" src={jeffMarble2} />
        </div>
        <div className="modal-text">
          <h3>Jeffery Denning</h3>
          <h4>Sales Director</h4>
          <p>Jeff has experience as a noncommissioned and commissioned military officer with service in Iraq. He is a recently retired public safety professional where he specialized in a variety of areas, including negotiations, crisis intervention, and peer support. He is finishing a second master’s degree in clinical mental health counseling and is currently serving as an executive board member of the Utah CISM (Critical Incident Stress Management) Team.  Jeff is a published author and accomplished speaker and instructor. </p>
        </div>
        <button aria-label="CloseModal" className="exit-btn" onClick={() => setShowJeffModal(prev => !prev)}>X</button>
        </div>) : null }
    </div>
  )
}
export default JeffModal;