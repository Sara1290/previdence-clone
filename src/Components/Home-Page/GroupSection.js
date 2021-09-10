import React from 'react';
import parents from '../../images/parents.jpg';
import individuals from '../../images/individuals.jpg';
import specialtyGroups from '../../images/specialtyGroups.jpg';
import '../../CSS/App.css';
import '../../CSS/Responsive.css';

const GroupSection = () => {

  return(
    <div className=" group-parent">


      <h1>Mental Wellness</h1>
      <div className="group-wrapper">
        <div className="group-item">
        <img className="group-img" alt="" src={individuals}/>
          <h3 className="caption">Individuals</h3>
          <p>Whether you’re concerned about yourself or someone else, Previdence can help. When an individual takes our completely confidential mental health assessment, our risk assessment team will connect that individual with a qualified and vetted member of the Previdence Professional Network (PPN) to meet their specific needs. Individuals can also access comprehensive materials and information through the Previdence database.</p>
        </div>

        <div className="group-item">
        <img className="group-img" alt="" src={parents}/>
          <h3 className="caption">Parents</h3>
          <p>Using the Previdence specialized assessment tools, parents are guided and supported while easily assessing their children's mental health and wellness needs. The Previdence Professional Network (PPN) connects parents with vetted therapists. Parents can also access comprehensive materials and informational resources through the Previdence database to assist with their child’s needs.</p>
        </div>

        <div className="group-item">
        <img className="group-img" alt="" src={specialtyGroups}/>
          <h3 className="caption">Specialty Groups</h3>
          <p>Previdence helps your organization create a stronger, healthier workforce with our incomparable mental health assessments. Our assessments inform organizational leaders about the strengths and risks of their workforce, while keeping the employee’s information confidential. Additionally, the Previdence team provides customized mental health and wellness training, professional clinical support, and crisis response.</p>
        </div>
      </div>
    </div>
 

  
  )
}
export default GroupSection;