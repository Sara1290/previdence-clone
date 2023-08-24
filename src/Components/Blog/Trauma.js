import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Trauma = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Trauma" ?
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
        <h5>TRAUMA!! A subject we know so much, yet so little about. Decades of research have shown trauma to be one of the leading causes of mental health concerns and suicide. Also evident, trauma can be residual. That is, it sticks around, even when it feels “healed” or the traumatic incident is over, and the individual is now safe.</h5> 
        <p>
        Trauma is an emotional response to a critical event like an accident, physical violence, sexual assault, natural disaster, military combat, or any devastating incident that threatens or causes harm and disrupts our sense of safety and security, leading to feelings of vulnerability and helplessness. These events are typically sudden and unpredictable. Often, the result is overwhelming amounts of stress that exceed our ability to cope. Shock and denial are normal reactions directly after an incident but can persist for a long period.
        </p>
        <p>
        Long-term reactions include erratic emotions, flashbacks, strained relationships, and possibly physical symptoms like headaches, nausea, or body aches. These experiences are typical, but some have a hard time moving on with their lives. They struggle to find the “normal” they once knew.
        </p>
        <p>
        It's not always one specific incident that causes trauma. It can be the result of recurring events and feeling overwhelmed. It can be precipitated over weeks, years, or even decades. Situations a person cannot control, or their perceived lack of control, also cause trauma.
        </p>
        <p>
          As we dive deeper into the topic of trauma, you’ll realize how often you experience it as a first responder. That is considered secondary, or vicarious trauma. 
        </p>
        <p>
        Please reach out with questions, suggestions, or concerns you may have. Contribute to this conversation as you see fit. You are in a position to bring awareness to what you do and how it affects you. We value your input, your mental health, and your ability to function on a healthy level. 
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

export default Trauma;
