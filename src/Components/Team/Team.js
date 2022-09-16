import React from 'react';
// import { HashLink as Links } from 'react-router-hash-link';
import NavBar from '../NavBar'
// import Under from '../../images/Under.png';
import '../../CSS/Pages.css';
import '../../CSS/App.css';
import UniFooter from '../UniFooter';
import ReactGA from 'react-ga';
import ScrollToTop from '../ScrollToTop';
import ExecutiveTeam from './ExecutiveTeam';
import ClinicalTeam from './ClinicalTeam';
import ClinicalAdvisoryTeam from './ClinicalAdvisoryTeam';




const Team = () => {
  ReactGA.pageview('src/Components/Team/Team.js');


  

  return (
    <div>
      <NavBar />
      {/* <img src={Under} className="under-construction" alt="page under contstruction" /> */}
      <div className='teams-outer'>
      <h1>Our Teams</h1>
      {/* <div className='team-nav'>
      <Links smooth to="/clinicalteam" className="link t-link">Clincal Team</Links>
        <p>Clinical</p>
        <p>Educational</p>
        <p>Scientific Advisors</p>
      </div> */}
      <ExecutiveTeam />
      <ClinicalTeam id="clinicalteam"/>
      <ClinicalAdvisoryTeam /> 
</div>
      <ScrollToTop />
      <UniFooter />
    </div>
  );
}
export default Team;