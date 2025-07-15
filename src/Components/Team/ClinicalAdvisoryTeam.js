import React from "react";
import RickHawksEdit from '../../images/RickHawksEdit.jpg';
import david from '../../images/david.png';

const ClinicalAdvisoryTeam = () => {
  return (
    <div className="team-inner">
      <h2>Clinical Advisors</h2>
      <div className="team-group">

        {/* add Rick - Chief Psychology Officer */}

      <div className="team-item">
          <img src={david} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Dr. David Norton</h3>
            <h4>Advisor</h4>
            <p>
            Dr. Norton has 48 years of industrial experience in high-tech companies. His industrial career began with IBM where he began as a Junior Engineer and advanced to that of a Senior Engineer and Program Manager. He was involved in manufacturing before moving into research and product development. 
            After 16 years with IBM, Norton left to become a co-founder of IOMEGA where he served as vice president for Research and Development, Manufacturing, Product Management, Administration and Communications. He then founded and served as Director of Utah Research Institute, a division of Utah State University Research Foundation.

            Dave received his Bachelor and Master of Science degrees in Mechanical Engineering from Utah State University and his PhD in Mechanical Engineering, with an emphasis on applied mechanics and optics, from the University of Colorado. He has served on and as Chairman for several Boards of for-profit and non-profit corporations. Norton has had five patents and ten technical disclosures in the IBM Technical Disclosures Bulletin.

            </p>
          </div>
        </div>

        
      <div className="team-item">
          <img src={RickHawksEdit} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Dr. Rick Hawks</h3>
            <h4>Advisor</h4>
            <p>
            Dr. Rick Hawks earned both his Master’s and Doctorate degrees from Brigham Young University. Over the past 40 years, he has been a licensed psychologist, working in a local community mental health center and maintaining a private practice.<br></br>

Dr. Hawks specializes in assessment and testing, having developed extensive software systems designed to assess risk in high-stress occupations, such as the military. These systems have been implemented in over 330 military installations worldwide. He has served as the Clinical Director for an innovative mental health and wellness technology platform company.<br></br>

His expertise has earned him the reputation as one of the best forensic phycologists in the United States. He is a sought-after expert witness on very complex legal cases in the Western United States, involving serial rapists and murderers.<br></br>

An accomplished author, Dr. Hawks has written books on suicide, addiction, and mental illness. Additionally, he has shared his expertise as an adjunct faculty member at Utah State University, Brigham Young University and Weber State University.<br></br>

Beyond his professional achievements, Dr. Hawks and his wife, Karla, have three children. The Hawks family pursues a variety of interests, including horseback riding, skiing, running half-marathons, and engaging in family activities. Dr. Hawks is also a master gardener, raising dozens of varieties of chili peppers, fruits, and vegetables, which he shares with his community.<br></br>

Dr. Hawks is deeply committed to community service, serving as a board member for the Upward Reach Foundation and supporting other community programs.
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};
export default ClinicalAdvisoryTeam;