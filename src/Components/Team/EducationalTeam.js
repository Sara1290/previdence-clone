import React from "react";
import johnMarble2 from '../../images/johnMarble2.png';
import tiaMarble from '../../images/tiaMarble.png';
import StevieMarble2 from '../../images/StevieMarble2.png';

const EducationalTeam = () => {
  return (
    <div className="team-inner">
      <h2>Educational Team</h2>
      <div className="team-group">
      <div className="team-item">
              <img src={tiaMarble} alt="" className="team-img" />
                <div className="overlay">
                  <h3>Tia White DSW, LCSW</h3>
                  <h4>Director of Research and Development</h4>
                  <p>Tia is a mental health and wellness consultant, researcher, program and curriculum developer, as well as a training instructor to first responders and public safety personnel. She is a Licensed Clinical Social Worker and has 20 years of experience working with a variety of populations and social systems. Additionally, she serves as an adjunct instructor for two local universities.</p>
                </div>
          </div>
          <div className="team-item">
              <img src={johnMarble2} alt="" className="team-img" />
                <div className="overlay">
                  <h3>John Wright</h3>
                  <h4>Director of IT</h4>
                  <p>John has over 25 years of IT experience, including professional development and management experience in a wide range of industries including manufacturing, medical, logistics, and payment processing. John has overseen projects with legacy systems, new systems design and development, moving programs into the cloud, and high availability systems that process millions of pieces of data daily all with a focus on creating software that is a useful tool to help people complete their job successfully. John is also an adjunct professor at Weber State University mentoring new students in IT.</p>
                </div>
          </div>
          <div className="team-item">
              <img src={StevieMarble2} alt="" className="team-img" />
                <div className="overlay">
                  <h3>Stevie Rentmeister</h3>
                  <h4>Office Manager</h4>
                  <p>Stevie comes to Previdence with over 30 years in business management, accounting, and human resource experience.
                    She has worked in the business industry of profit and non-profit organizations. During this time, she has also supported her husband in these areas and managed their other four businesses. Stevie is committed to providing exceptional leadership, management, financial administration and staff development to achieve the vision, goals and priorities of Previdence.</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};
export default EducationalTeam;