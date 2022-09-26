import React from "react";
import tiaMarble from '../../images/tiaMarble.png';
import kim3 from '../../images/kim3.png';
import bobbi3 from '../../images/bobbi3.png';
import cindee3 from '../../images/cindee3.png';
import sabrina3 from '../../images/sabrina3.png';

const ClinicalTeam = () => {
  return (
    <div className="team-inner">
      <h2>Clinical Operations</h2>
      <div className="team-group">
     
      <div className="team-item">
              <img src={tiaMarble} alt="" className="team-img" />
                <div className="team-item-texts">
                  <h3>Tia White DSW, LCSW</h3>
                  <h4>Director of R&D</h4>
                  <p>Tia is a mental health and wellness consultant, researcher, program and curriculum developer, as well as a training instructor to first responders and public safety personnel. She is a Licensed Clinical Social Worker and has 20 years of experience working with a variety of populations and social systems. Additionally, she serves as an adjunct instructor for two local universities.</p>
                </div>
          </div>
          <div className="team-item">
          <img src={kim3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Kimberly Clark</h3>
            <h4>PPN Manager</h4>
            <p>
            Kimberly came to Previdence as a licensed educator with an English degree from Weber State University.  She has 18+ years of experience teaching young children, youth in custody, and adult learners. She regularly volunteers as a member of the Nomad Alliance serving Salt Lake’s unhoused communities, and with a number of local nonprofits.  
            She lives with her partner and two sons in Ogden, where they can be found outdoors most of the time, either in the mountains - hiking, backpacking, camping, skiing, and fishing, or around 25th street - enjoying a Twilight concert, the farmer’s market, or the First Friday Art Stroll.   
            Kimberly is passionate about destigmatizing and increasing access to mental healthcare for persons of all backgrounds and circumstances. She particularly enjoy working with underserved populations, connecting people with each other and to community resources. 
            </p>
          </div>
        </div>
        <div className="team-item">
          <img src={bobbi3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Bobbi McGraw</h3>
            <h4>Liaison</h4>
            <p>
            Bobbi has more than 25 years of experience working with youth and victims of crime. She has degrees in Special Education, English, and Psychology, and is trained in forensic interviewing. Bobbi has substantial experience in the field of advocacy in sexual assault, domestic violence, and human trafficking and crisis response. She has extensive knowledge in Human Resources development and management. Bobbi owns a non-profit organization with independent advocates on call 24/7 in response to crime. She volunteers her time in numerous positions and presents to students and community members on understanding and preventing sexual assault; child abuse; bystander intervention, among other topics.
            </p>
          </div>
        </div>
    <div className="team-group2">

        <div className="team-item team-item2">
          <img src={cindee3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Cindee Paulsen</h3>
            <h4>Liaison</h4>
            <p>
            Cindee has been involved with police work and recently retired after 30 years. She spent the first 15 years as a 911 dispatcher and shift lead, working with police, fire, and EMS, and was a member of a negotiations team.  The last 15 years was spent as an evidence technician, detective secretary and records specialist.  Cindee has been married for 37 years; her husband was a police officer for 10 of those years. She has 2 grown children, 4 grandchildren, and several extended family members, whom she enjoys spending family time with, camping, fishing, and being outdoors. 
            </p>
          </div>
        </div>

        <div className="team-item team-item2">
          <img src={sabrina3} alt="" className="team-img" />
          <div className="team-item-texts">
            <h3>Sabrina Woodrick</h3>
            <h4>Administrative Assistant</h4>
            <p>
            Since being here with my fellow teammates at Previdence; I have not only been able to help others on their healing journey, but I have also been able to start my own healing process with the help and resources provided by Previdence. Being here has not only been uplifting, but it has also instilled good habits for my everyday life. 
            </p>
          </div>
        </div>
    </div>
      </div>
     
    </div>
  );
};
export default ClinicalTeam;