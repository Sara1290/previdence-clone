import React from "react";
// import tiaMarble from '../../images/tiaMarble.png';
// import codyFinal from '../../images/codyFinal.png';
import bobbi3 from '../../images/bobbi3.png';
import cindee3 from '../../images/cindee3.png';


const ClinicalTeam = () => {
  return (
    <div className="team-inner">
      <h2>Clinical Operations</h2>
      <div className="team-group">

        <div className="team-item">
          <img src={bobbi3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Bobbi McGraw</h3>
            <h4>Member Care Specialist</h4>
            <p>
            Bobbi has more than 25 years of experience working with youth and victims of crime. She has degrees in Special Education, English, and Psychology, and is trained in forensic interviewing. Bobbi has substantial experience in the field of advocacy in sexual assault, domestic violence, and human trafficking and crisis response. She has extensive knowledge in Human Resources development and management. Bobbi owns a non-profit organization with independent advocates on call 24/7 in response to crime. She volunteers her time in numerous positions and presents to students and community members on understanding and preventing sexual assault; child abuse; bystander intervention, among other topics.
            </p>
          </div>
        </div>

        <div className="team-item team-item2">
          <img src={cindee3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Cindee Paulsen</h3>
            <h4>Customer Care Specialist</h4>
            <p>
            Cindee has been involved with police work and recently retired after 30 years. She spent the first 15 years as a 911 dispatcher and shift lead, working with police, fire, and EMS, and was a member of a negotiations team.  The last 15 years was spent as an evidence technician, detective secretary and records specialist.  Cindee has been married for 37 years; her husband was a police officer for 10 of those years. She has 2 grown children, 4 grandchildren, and several extended family members, whom she enjoys spending family time with, camping, fishing, and being outdoors. 
            </p>
          </div>
        </div>

    </div>
      </div>

  );
};
export default ClinicalTeam;