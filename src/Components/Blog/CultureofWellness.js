import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const CultureofWellness = () => {
  ReactGA.pageview('src/Components/Blog/CultureofWellness.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Culture of Wellness" ?
    <div className="blog-post-container">
    <div className="blog-post-inner">
      <h1>{blogdata.title}</h1>
      <div className="blog-line"></div>
      <br></br>
      <p>{blogdata.description}</p>
        <div className="blog-post-attributes">
          <p>{blogdata.author}</p>
          <p>{blogdata.date}</p>
        </div>
      <img src={blogdata.img} alt="tired person" className="blog-post-img" />
      <div className="blog-content">
        <h5>The most important part of my job is to make sure each first responder and health care provider knows s/he has great worth, that each will feel a sense of human connection and trust. It is my goal to help create a culture of wellness among the courageous, selfless responders we serve.</h5> 
        <p>
        This Mental Health Minute focuses on creating a “Culture of Wellness” in the first responder world. How do we do that? It takes not only those in the mental health field, but the first responder, him/herself, along with their employers. Once the culture is created, healthy habits form and facing the trauma in the field will have less of a negative impact on the lives of those who serve. 
        </p>
        <p>
        The conversation around mental health must be open, positive, and supportive by the employer. With programs created, peer support at the ready, and resources for all employees, a solution-focused environment is established. Employees will feel secure knowing they have support, in turn, helping to sustain familial relationships. These two things run in tandem, because when work life is less stressful, so will family life be and vice versa.
        </p>
        <p> 
        The stigma around seeking assistance has led millions to suffer in silence, but with the right programs, such as Critical Incident Stress Management (CISM), Critical Incident Stress Debriefings, or assistance programs readily available, it helps bring about more awareness in and around the workplace.
        </p>
        <p>
        When police chief, Neil Gang, had one of his officers commit suicide, he wondered how it could have happened, why he missed the warning signs and what he could have done to prevent it. What he realized was significant change needed to be made, so he created a model that would bring the tough conversations out of the shadows and into the open to promote officer wellness.
        </p>
        <ul className="blog-post-ul">
          <h5>Gang created a seven point approach that is action-focused and centers on solutions, not just awareness. The following builds a culture of wellness among law enforcement, fire, emergency medical services, and health care providers (FRW site):</h5>
          <li>Awareness – Create an environment where “It’s okay not to be okay.” Having open and honest discussions with employees about wellness will forge camaraderie and comfort. </li>
          <li>Solution Focused Approach – Focus on creating solutions and not the problems. </li>
          <li>Peer Support – Create a proactive, trained peer support team along with CISM and a therapy dog program. </li>
          <li>Resiliency – Educate employees on resiliency, mindfulness, PTS, emotional intelligence, and simple daily wellness exercises like yoga, deep breathing, and mindful meditation.</li>
          <li>Healthy Habits – Encourage physical fitness and healthy eating habits in the workplace. Allocate budget funds to build a fitness facility and remove unhealthy options from vending machines and substitute with healthier items.</li>
          <li>Spirituality- Develop a police/clergy coalition, chaplain program, and community outreach programming, like “Pray with the Police.”</li>
          <li>Family- Involve first responder families from the orientation process forward. Providing access to digital wellness resources, relationship support, financial literacy, and retirement preparation tools, from rookie to retirement.</li>
        </ul>
        <p>
        Though mental health and wellness programs and conversations continue to develop, it is imperative to note that inspiration for new approaches, models, and standards are invited in order to care for those who protect and serve our communities. As stated, it is a circle of wellness among family, work, and social life.
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute was created for you with contributions from the CDC and First Responder Wellness.
        </p>
      </div>
    </div>
  </div>
  : null
  )
})

  return (
    <div>
      <NavBar />
      <div className="BlogPost">
      {mappedBlogPost}
      </div>
      <UniFooter />
    </div>
  )
  
}

export default CultureofWellness;
