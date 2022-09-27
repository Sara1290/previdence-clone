import React from "react";
import kentMarble from '../../images/kentMarble.png';
import david from '../../images/david.png';

const ClinicalAdvisoryTeam = () => {
  return (
    <div className="team-inner">
      <h2>Clinical Advisors</h2>
      <div className="team-group">

      <div className="team-item">
          <img src={david} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Dr. David Norton</h3>
            <h4>...</h4>
            <p>
            Dr. Norton has 48 years of industrial experience in high-tech companies. His industrial career began with IBM where he began as a Junior Engineer and advanced to that of a Senior Engineer and Program Manager. He was involved in manufacturing before moving into research and product development. 
            After 16 years with IBM, Norton left to become a co-founder of IOMEGA where he served as vice president for Research and Development, Manufacturing, Product Management, Administration and Communications. He then founded and served as Director of Utah Research Institute, a division of Utah State University Research Foundation.

            Dave received his Bachelor and Master of Science degrees in Mechanical Engineering from Utah State University and his PhD in Mechanical Engineering, with an emphasis on applied mechanics and optics, from the University of Colorado. He has served on and as Chairman for several Boards of for-profit and non-profit corporations. Norton has had five patents and ten technical disclosures in the IBM Technical Disclosures Bulletin.

            </p>
          </div>
        </div>

        
      <div className="team-item">
          <img src={kentMarble} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Kent Allen</h3>
            <h4>Founder</h4>
            <p>
              Kent is the founder of Previdence Corporation. He is a master
              clinician practicing therapy for over 30 years. He is a graduate
              of Auburn University and is a licensed Marriage and Family
              Therapist. Kent is the organizer of the Widow/Widower’s Grieving
              Group and is an accomplished speaker.
            </p>
          </div>
        </div>


      </div>
     
    </div>
  );
};
export default ClinicalAdvisoryTeam;