import React from 'react';
import NavBarTwo from '../NavBarTwo'
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


const Team = () => {

  return (
    <div>
      <NavBarTwo />
      <section class="section novi-bg novi-bg-img section-xl bg-default text-center team-background">
      <div class="container team-spacing">
        <div class="row row-fix row-30 justify-content-lg-center">
          <div class="col-lg-11 col-xl-9 team-inner">
            {/* <h2 class="even-section">Executive Team</h2> */}
          </div>
        </div>
        <div class="row row-50 offset-top-1 team-flex" >
          <div class="col-md-6 col-lg-4 even-section">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main">
                <img src={markMarble} alt="" className="team-img"/>
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Mark Kendell</p>
                <p class="thumb__subtitle">CEO</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={kentMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Kent Allen, LMFT</p>
                <p class="thumb__subtitle even-section">Founder/ Clinical Director</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={saraMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Sara Allen, ME</p>
                <p class="thumb__subtitle even-section">Public Safety Liaison Manager</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={tiaMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Tia White, LCSW</p>
                <p class="thumb__subtitle even-section">Director of Research and Development</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={johnMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">John Wright</p>
                <p class="thumb__subtitle even-section">IT Director</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={codyMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Cody Wilson</p>
                <p class="thumb__subtitle even-section">PPN Advocate Manager</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={JeffMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">Jeffrey Denning</p>
                <p class="thumb__subtitle even-section">Sales Director</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="thumb thumb-corporate">
              <div class="thumb-corporate__main"><img src={johnnyMarble} alt="" className="team-img" />
              </div>
              <div class="thumb-corporate__caption">
                <p class="thumb__title even-section">John O'Callaghan</p>
                <p class="thumb__subtitle even-section">Business Development</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <UniFooter />
    </div>
  )
}
export default Team;