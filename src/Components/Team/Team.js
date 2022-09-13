import React from 'react';
import NavBar from '../NavBar'
// import johnMarble2 from '../../images/johnMarble2.png';
// import kentMarble from '../../images/kentMarble.png';
// import markMarble2 from '../../images/markMarble2.png';
// import tiaMarble from '../../images/tiaMarble.png';
// import johnnyMarble from '../../images/johnnyMarble.jpg';
// import StevieMarble2 from '../../images/StevieMarble2.png';
import Under from '../../images/Under.png';
import '../../CSS/Pages.css';
import '../../CSS/App.css';
import UniFooter from '../UniFooter';
// import JohnModal from './JohnModal';
// import JohnOModal from './JohnOModal';
// import KentModal from './KentModal';
// import MarkModal from './MarkModal';
// import TiaModal from './TiaModal';
// import StevieModal from './StevieModal';
import ReactGA from 'react-ga';
// import ScrollToTop from '../ScrollToTop';



const Team = () => {
  ReactGA.pageview('src/Components/Team/Team.js');


  //one state hook for each team member's modal
  // const [showJohnModal, setShowJohnModal] = useState(false);
  // const [showJohnOModal, setShowJohnOModal] = useState(false);
  // const [showKentModal, setShowKentModal] = useState(false);
  // const [showMarkModal, setShowMarkModal] = useState(false);
  // const [showTiaModal, setShowTiaModal] = useState(false);
  // const [showStevieModal, setShowStevieModal] = useState(false);
  // const modalRef = useRef();

  //one function to open each team members modal .. we need a function with unique naming so that we don't open and close modals simultaneously.

  // const openJohnModal = () => {
  //   setShowJohnModal(prev => !prev)
  // };
  // const openJohnOModal = () => {
  //   setShowJohnOModal(prev => !prev)   
  // };
  // const openKentModal = () => {
  //   setShowKentModal(prev => !prev)
  // };
  // const openMarkModal = () => {
  //   setShowMarkModal(prev => !prev)
  // };
  // const openTiaModal = () => {
  //   setShowTiaModal(prev => !prev)
  // };
  // const openStevieModal = () => {
  //   setShowStevieModal(prev => !prev)
  // };
  
  
  //function will close all modals
  // const closeModal = e => {
  //   if(modalRef.current === e.target) {
  //     setShowJohnModal(false)
  //     setShowJohnOModal(false)
  //     setShowKentModal(false)
  //     setShowMarkModal(false)
  //     setShowTiaModal(false)
  //     setShowStevieModal(false)
  //   }
  //   console.log('clicked')
  // }

  

  return (
    <div>
      <NavBar />
      <img src={Under} className="under-construction" alt="page under contstruction" />
      {/* <div className='teams-outer'>
      <h1>Our Teams</h1>
      <div className='team-inner'>
        <div className="team-item">
             <img src={markMarble2} alt="" className="team-img" />
              <div className="team-item-texts">
                <h4>Mark Kendell</h4>
                <h6>CEO</h6>
                <p>Mark is a purpose-driven serial entrepreneur and runs his family office focusing on direct investments and what he calls “true impact” opportunities. Very early in his career, he founded Kendell & Associates, LLC a venture banking firm, specializing in the creation, financing, and operation of a broad spectrum of companies, innovations, and investment opportunities. Since that time, he has provided leadership as an entrepreneur and investor in building new innovative companies and technologies.</p>
              </div>
        </div>
        <div className="team-item">
            <img src={johnnyMarble} alt="" className="team-img" />
              <div className="overlay">
                <h4>John O'Callaghan</h4>
                <h6>Corporate Development Officer</h6>
                <p>John has held significant leadership positions at Concordia Capital, a hedge fund and separate account manager, where he was co-founder and responsible for assets under management. Early in his career, at State Street Global Advisors, he helped create the advisor strategies division, which gained $1.6 billion in assets within two years. John serves as an advisor to Marron Energy, a Boston based solar energy development firm. He also serves on the advisory board for Celeris Media Group and is an advisor to the Chairman/Senior Partner of Taurus Investment Holdings and Mark Kendell Associates.</p>
              </div>
        </div>
        <div className="team-item">
            <img src={kentMarble} alt="" className="team-img" />
              <div className="overlay">
                <h4>Kent Allen</h4>
                <h6>Founder</h6>
                <p>Kent is the founder of Previdence Corporation. He is a master clinician practicing therapy for over 30 years. He is a graduate of Auburn University and is a licensed Marriage and Family Therapist. Kent is the organizer of the Widow/Widower’s Grieving Group and is an accomplished speaker.</p>
              </div>
        </div>
        <div className="team-item">
            <img src={tiaMarble} alt="" className="team-img" />
              <div className="overlay">
                <h4>Tia White DSW, LCSW</h4>
                <h6>Director of Research and Development</h6>
                <p>Tia is a mental health and wellness consultant, researcher, program and curriculum developer, as well as a training instructor to first responders and public safety personnel. She is a Licensed Clinical Social Worker and has 20 years of experience working with a variety of populations and social systems. Additionally, she serves as an adjunct instructor for two local universities.</p>
              </div>
        </div>
        <div className="team-item">
            <img src={johnMarble2} alt="" className="team-img" />
              <div className="overlay">
                <h4>John Wright</h4>
                <h6>Director of IT</h6>
                <p>John has over 25 years of IT experience, including professional development and management experience in a wide range of industries including manufacturing, medical, logistics, and payment processing. John has overseen projects with legacy systems, new systems design and development, moving programs into the cloud, and high availability systems that process millions of pieces of data daily all with a focus on creating software that is a useful tool to help people complete their job successfully. John is also an adjunct professor at Weber State University mentoring new students in IT.</p>
              </div>
        </div>
        <div className="team-item">
            <img src={StevieMarble2} alt="" className="team-img" />
              <div className="overlay">
                <h4>Stevie Rentmeister</h4>
                <h6>Office Manager</h6>
                <p>Stevie comes to Previdence with over 30 years in business management, accounting, and human resource experience.
                   She has worked in the business industry of profit and non-profit organizations. During this time, she has also supported her husband in these areas and managed their other four businesses. Stevie is committed to providing exceptional leadership, management, financial administration and staff development to achieve the vision, goals and priorities of Previdence.</p>
              </div>
      </div>
</div>
</div>


      
      <ScrollToTop /> */}
      <UniFooter />
    </div>
  );
}
export default Team;