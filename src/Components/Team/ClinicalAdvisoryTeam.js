import React from "react";
import kentMarble from '../../images/kentMarble.png';

const ClinicalAdvisoryTeam = () => {
  return (
    <div className="team-inner">
      <h2>Clinical Advisors</h2>
      <div className="team-group">
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