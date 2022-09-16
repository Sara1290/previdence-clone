import React from "react";

import markMarble2 from '../../images/markMarble2.png';
import StevieMarble2 from '../../images/StevieMarble2.png';
import johnMarble2 from '../../images/johnMarble2.png';
import johnnyMarble from '../../images/johnnyMarble.jpg';
import aaron3 from '../../images/aaron3.png';
import sara3 from '../../images/sara3.png';


const ExecutiveTeam = () => {
  return (
    <div className="team-inner">
      <h2>Business Management</h2>
      <div className="team-group">
        <div className="team-item">
          <img src={markMarble2} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Mark Kendell</h3>
            <h4>CEO</h4>
            <p>
              Mark is a purpose-driven serial entrepreneur and runs his family
              office focusing on direct investments and what he calls “true
              impact” opportunities. Very early in his career, he founded
              Kendell & Associates, LLC a venture banking firm, specializing in
              the creation, financing, and operation of a broad spectrum of
              companies, innovations, and investment opportunities. Since that
              time, he has provided leadership as an entrepreneur and investor
              in building new innovative companies and technologies.
            </p>
          </div>
        </div>
        
        <div className="team-item">
              <img src={StevieMarble2} alt="" className="team-img" />
                <div className="team-item-texts">
                  <h3>Stevie Rentmeister</h3>
                  <h4>Office Manager</h4>
                  <p>Stevie comes to Previdence with over 30 years in business management, accounting, and human resource experience.
                    She has worked in the business industry of profit and non-profit organizations. During this time, she has also supported her husband in these areas and managed their other four businesses. Stevie is committed to providing exceptional leadership, management, financial administration and staff development to achieve the vision, goals and priorities of Previdence.</p>
          </div>
        </div>

        <div className="team-item">
          <img src={aaron3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Aaron Burgin</h3>
            <h4>Director of Sales</h4>
            <p>
            After losing his younger brother to suicide at age 18, Aaron spent many years in the pursuit of a high-quality suicide prevention model that could “do more, sooner.” He is extremely excited to work with business leaders who are ready to invest in their people’s mental health and wellbeing. Aaron received his Bachelor’s in Business from Weber State and has a Master’s in Communication and Leadership from Gonzaga University. Combined with his passion for supporting people’s mental wellbeing, his experience working in the tech industry for brands such as Pinterest, Uber and Route give Aaron a perspective of fast-paced, service oriented leadership that make him uniquely qualified to do what he does in the battle for better mental health. 
            </p>
          </div>
        </div>

        <div className="team-item">
              <img src={johnMarble2} alt="" className="team-img" />
                <div className="team-item-texts">
                  <h3>John Wright</h3>
                  <h4>Director of IT</h4>
                  <p>John has over 25 years of IT experience, including professional development and management experience in a wide range of industries including manufacturing, medical, logistics, and payment processing. John has overseen projects with legacy systems, new systems design and development, moving programs into the cloud, and high availability systems that process millions of pieces of data daily all with a focus on creating software that is a useful tool to help people complete their job successfully. John is also an adjunct professor at Weber State University mentoring new students in IT.</p>
                </div>
          </div>

          <div className="team-item">
          <img src={sara3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Sara Reed</h3>
            <h4>Front End Developer</h4>
            <p>
              After getting a certification in web development, Sara knew she wanted to use her new skills to improve people's lives. Having had many mental health struggles herself, she's a firm believer in mental health in the work place, and in her personal life.  
            </p>
          </div>
        </div> 

        <div className="team-item">
          <img src={johnnyMarble} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>John O'Callaghan</h3>
            <h4>Corporate Development Officer</h4>
            <p>
              John has held significant leadership positions at Concordia
              Capital, a hedge fund and separate account manager, where he was
              co-founder and responsible for assets under management. Early in
              his career, at State Street Global Advisors, he helped create the
              advisor strategies division, which gained $1.6 billion in assets
              within two years. John serves as an advisor to Marron Energy, a
              Boston based solar energy development firm. He also serves on the
              advisory board for Celeris Media Group and is an advisor to the
              Chairman/Senior Partner of Taurus Investment Holdings and Mark
              Kendell Associates.
            </p>
          </div>
        </div>

      </div>
  </div>
     
  );
};
export default ExecutiveTeam;
