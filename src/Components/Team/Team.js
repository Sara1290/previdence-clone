import React, {useState, useRef} from 'react';
import NavBar from '../NavBar'
import johnMarble from '../../images/johnMarble.png';
import kentMarble from '../../images/kentMarble.png';
import markMarble from '../../images/markMarble.png';
import tiaMarble from '../../images/tiaMarble.png';
import saraMarble from '../../images/saraMarble.png';
import codyMarble from '../../images/codyMarble.jpg';
import JeffMarble from '../../images/JeffMarble.png';
import johnnyMarble from '../../images/johnnyMarble.jpg'
import '../../CSS/Pages.css';
import '../../CSS/App.css';
import UniFooter from '../UniFooter';
import CodyModal from './CodyModal';
import JeffModal from './JeffModal';
import JohnModal from './JohnModal';
import JohnOModal from './JohnOModal';
import KentModal from './KentModal';
import MarkModal from './MarkModal';
import SaraModal from './SaraModal';
import TiaModal from './TiaModal';

const Team = () => {

  //one state hook for each team member's modal
  const [showCodyModal, setShowCodyModal] = useState(false);
  const [showJeffModal, setShowJeffModal] = useState(false);
  const [showJohnModal, setShowJohnModal] = useState(false);
  const [showJohnOModal, setShowJohnOModal] = useState(false);
  const [showKentModal, setShowKentModal] = useState(false);
  const [showMarkModal, setShowMarkModal] = useState(false);
  const [showSaraModal, setShowSaraModal] = useState(false);
  const [showTiaModal, setShowTiaModal] = useState(false);
  const modalRef = useRef();

  //one function to open each team members modal .. we need a function with unique naming so that we don't open and close modals simultaneously.
  const openCodyModal = () => {
    setShowCodyModal(prev => !prev)
  };
  const openJeffModal = () => {
    setShowJeffModal(prev => !prev)
  };
  const openJohnModal = () => {
    setShowJohnModal(prev => !prev)
  };
  const openJohnOModal = () => {
    setShowJohnOModal(prev => !prev)
  };
  const openKentModal = () => {
    setShowKentModal(prev => !prev)
  };
  const openMarkModal = () => {
    setShowMarkModal(prev => !prev)
  };
  const openSaraModal = () => {
    setShowSaraModal(prev => !prev)
  };
  const openTiaModal = () => {
    setShowTiaModal(prev => !prev)
  };


  //we will come back to this funciton and setShowMEMBERModal(false) for each one that exists
  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowCodyModal(false)
      setShowJeffModal(false)
      setShowJohnModal(false)
      setShowJohnOModal(false)
      setShowKentModal(false)
      setShowMarkModal(false)
      setShowSaraModal(false)
      setShowTiaModal(false)
    }
  }

  return (
    <div>
      <NavBar />
      <section class="section novi-bg novi-bg-img section-xl bg-default text-center team-background" ref={modalRef} onClick={closeModal}>
        <div class="container team-spacing">
          <div class="row row-fix row-30 justify-content-lg-center">
            <div class="col-lg-11 col-xl-9 team-inner">
              {/* <h2 class="even-section">Executive Team</h2> */}
            </div>
          </div>

      <div class="row row-50 offset-top-1 team-flex">

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openMarkModal}>
                    <img src={markMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Mark Kendell</p>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
              <MarkModal
                showMarkModal={showMarkModal}
                setShowMarkModal={setShowMarkModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openKentModal}>
                    <img src={kentMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Kent Allen, LMFT</p>
                    <p>Founder / Clinical Director</p>
                  </div>
                </div>
              </div>
              <KentModal
                showKentModal={showKentModal}
                setShowKentModal={setShowKentModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openSaraModal}>
                    <img src={saraMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Sara Allen, ME</p>
                    <p>Public Safety Liaison Manager</p>
                  </div>
                </div>
              </div>
              <SaraModal
                showSaraModal={showSaraModal}
                setShowSaraModal={setShowSaraModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openTiaModal}>
                    <img src={tiaMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Tia White, LCSW</p>
                    <p>Director of Research and Development</p>
                  </div>
                </div>
                <div class="thumb-corporate__caption">

                </div>
              </div>
              <TiaModal
                showTiaModal={showTiaModal}
                setShowTiaModal={setShowTiaModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openJohnModal}>
                    <img src={johnMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>John Wright</p>
                    <p>IT Director</p>
                  </div>
                </div>
              </div>
              <JohnModal
                showJohnModal={showJohnModal}
                setShowJohnModal={setShowJohnModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openCodyModal}>
                    <img src={codyMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Cody Wilson</p>
                    <p>PPN Advocate Manager</p>
                  </div>
                </div>
              </div>
              <CodyModal
                showCodyModal={showCodyModal}
                setShowCodyModal={setShowCodyModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openJeffModal}>
                    <img src={JeffMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>Jeffrey Denning</p>
                    <p>Sales Director</p>
                  </div>
                </div>
              </div>
              <JeffModal
                showJeffModal={showJeffModal}
                setShowJeffModal={setShowJeffModal}
              />
            </div>

            <div className="col-md-6 col-lg-4 ">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openJohnOModal}>
                    <img src={johnnyMarble} alt="" className="team-img " />
                  </button>
                  <div className="overlay">
                    <p>John O'Callaghan</p>
                    <p>Business Development</p>
                  </div>
                </div>
              </div>
              <JohnOModal
                showJohnOModal={showJohnOModal}
                setShowJohnOModal={setShowJohnOModal}
              />
            </div>


          </div>
        </div>
      </section>
      <UniFooter />
    </div>
  );
}
export default Team;