import React, {useState, useRef} from 'react';
import NavBar from '../NavBar'
import johnMarble2 from '../../images/johnMarble2.png';
import kentMarble from '../../images/kentMarble.png';
import markMarble2 from '../../images/markMarble2.png';
import tiaMarble from '../../images/tiaMarble.png';
import saraMarble2 from '../../images/saraMarble2.png';
import codyNew from '../../images/codyNew.png';
import jeffMarble2 from '../../images/jeffMarble2.png';
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
import ReactGA from 'react-ga';



const Team = () => {
  // ReactGA.pageview('src/Components/Team/Team.js');


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
  
  
  //function will close all modals
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
    console.log('clicked')
  }

  

  return (
    <div >
      <div className={(showCodyModal ? "dark-background " : "hide")} ref={modalRef} onClick={() => setShowCodyModal(prev => !prev)} >
      </div>
      <div className={(showJeffModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowJeffModal(prev => !prev)} >
      </div>
      <div className={(showJohnModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowJohnModal(prev => !prev)} >
      </div>
      <div className={(showJohnOModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowJohnOModal(prev => !prev)} >
      </div>
      <div className={(showKentModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowKentModal(prev => !prev)} >
      </div>
      <div className={(showMarkModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowMarkModal(prev => !prev)} >
      </div>
      <div className={(showSaraModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowSaraModal(prev => !prev)} >
      </div>
      <div className={(showTiaModal ? "dark-background" : "hide")} ref={modalRef} onClick={() => setShowTiaModal(prev => !prev)} >
      </div>

      <NavBar />
      <section className="section novi-bg novi-bg-img section-xl bg-default text-center team-background" ref={modalRef} onClick={closeModal}  >
        <div className="container team-spacing">
          <div className="row row-fix row-30 justify-content-lg-center">
            <div className="col-lg-11 col-xl-9 team-inner">
              <h2 className="even-section">Meet the Team</h2>
            </div>
          </div>

      <div className="row row-50 offset-top-1 team-flex" ref={modalRef} onClick={closeModal} >

            <div className="col-md-6 col-lg-4">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openMarkModal}>
                    <img src={markMarble2} alt="" className="team-img " />
                  <div className="overlay">
                    <p>Mark Kendell</p>
                    <p>CEO</p>
                  </div>
                  </button>
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
                  <div className="overlay">
                    <p>Kent Allen, LMFT</p>
                    <p>Founder / Clinical Director</p>
                  </div>
                  </button>
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
                    <img src={saraMarble2} alt="" className="team-img " />
                  <div className="overlay">
                    <p>Sara Allen, ME</p>
                    <p>Public Safety Liaison</p>
                  </div>
                  </button>
                </div>
              </div>
              <SaraModal
                showSaraModal={showSaraModal}
                setShowSaraModal={setShowSaraModal}
                />
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main team-member-container">
                  <button className="open-button" onClick={openTiaModal}>
                    <img src={tiaMarble} alt="" className="team-img " />
                  <div className="overlay">
                    <p>Tia White, LCSW</p>
                    <p>Director of Research</p>
                  </div>
                  </button>
                </div>
                <div className="thumb-corporate__caption">

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
                    <img src={johnMarble2} alt="" className="team-img " />
                  <div className="overlay">
                    <p>John Wright</p>
                    <p>IT Director</p>
                  </div>
                  </button>
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
                    {/* <img src={codynewMarble} alt="" className="team-img " /> */}
                    {/* <img src={codynewMarble2} alt="" className="team-img " /> */}
                    <img src={codyNew} alt="" className="team-img " />
                  <div className="overlay">
                    <p>Cody Wilson</p>
                    <p>PPN Manager</p>
                  </div>
                  </button>
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
                    <img src={jeffMarble2} alt="" className="team-img " />
                    {/* <img src={jeffSuit} alt="" className="team-img " /> */}
                  <div className="overlay">
                    <p>Jeffrey Denning</p>
                    <p>Sales Director</p>
                  </div>
                  </button>
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
                  <div className="overlay">
                    <p>John O'Callaghan</p>
                    <p>Business Development</p>
                  </div>
                  </button>
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