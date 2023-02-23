import React from "react";

import markMarble2 from '../../images/markMarble2.png';
import clark from '../../images/clark.png';
import dan from '../../images/dan.png';
import StevieMarble2 from '../../images/StevieMarble2.png';
// import johnMarble2 from '../../images/johnMarble2.png';
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
            <h4>Chief Executive Officer</h4>
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

        <div className="team-item">
          <img src={clark} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Jeff Clark</h3>
            <h4>Chief Financial Officer</h4>
            <p>
            Jeff Clark started J. D. Clark & Company and the Praesideo Funds in January of 1991. Mr. Clark's companies are headquartered in Utah with offices in New York and Grand Cayman.
            After earning a bachelor's in accounting at Utah State in 1982, Mr. Clark began his career at KPMG in Seattle. He later served for several years as the vice president of finance for the Cascade Funds and Rainier Partners as well as the CFO of the Genesee Funds.
            Mr. Clark is also active in community service as a board member of the Weber Foundation where he chairs its Business Development Committee. Mr. and Mrs. Clark fund a Jon M. Huntsman School of Business scholarship.
 
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
          <img src={sara3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Sara Reed</h3>
            <h4>Front End Developer</h4>
            <p>
              After getting a certification in web development, Sara knew she wanted to use her new skills to improve people's lives. She's a firm believer in mental health in the work place, and in her personal life.  
            </p>
          </div>
        </div> 

        <div className="team-item">
          <img src={dan} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Dan Mcooey</h3>
            <h4>Director</h4>
            <p>
            Dan began his career in 1991 as an assistant Nasdaq market maker at Nash Weiss, later moving to Citigroup where he spent the next ten years as a Nasdaq market maker covering technology stocks.
            In 2002 he became Head of the Nasdaq trading department and a senior partner at Weeden & Co.
            Dan co-founded Adit Ventures in 2014, a venture firm focused on investing in private growth equity.  Dan also co-founded a broker dealer Third Seven Capital in 2017.  
            Today Dan resides in Park City Utah with his wife Suzanne and his three children Dan Jr, Jack and Quinn.
            </p>
          </div>
        </div> 
    </div>

      </div>
     
  );
};
export default ExecutiveTeam;
