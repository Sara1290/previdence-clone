import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Mindfullness = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "A Mindfullness Journey" ?
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
        <h5>
        Here’s a challenge for you; take two minutes to practice mindfulness. In your car, while you’re eating, walking, showering, just about anywhere. No matter where you are, you can set aside a small amount of time and be present. 
        </h5> 
        <p>
        Wait just one second! What is mindfulness? It’s the moment-to-moment awareness of yourself, the primitive human capacity to be completely present, aware of where you are and what you are doing, not overly reactive or overwhelmed by what is going on around you. You do this by thoughtfully bringing your attention to the present moment. 
        </p>
        <p>
        We have a tendency to get lost in our thoughts. What happened at work? The to-do list that just keeps growing. What’s making us anxious and stressed? 
        </p>
        <p>
        Ok, let’s take this apart.
        </p>
        <p>
        What’s happening around you? What do you see, what do you feel? What do you taste, or smell, or hear? Recognize your senses, let yourself really focus on each one. This allows you to “check in” with the immediate moment. You might find your thoughts trailing off to work, what you need to get done, what your family is doing; let that happen, notice it, and then bring your thoughts back to the moment, back to the breath.
        </p>
        <p>
        The goal is to achieve a state of alert, focused relaxation. Do this by purposely paying attention to emotions, thoughts, and sensations which will enable your mind to refocus on the present moment. To achieve this goal, you have to let go of judgments…let go of the automatic negative thoughts that arise in your mind about yourself and develop an attitude of acceptance. Mindfulness helps promote a sense of calm…who doesn’t need more of that? 
        </p>
        <p>
        The more you practice, the better you get at tuning out the chaos, managing stress,  and reducing anxiety and depression. Mindfulness can also help lower blood pressure and improve sleep. We call that grounding yourself. Practice mindfulness for just 2 minutes a day and feel more focused, less stressed and anxious. It’s the positive change you’ve been looking for. 
        </p>       
        <p>
        For more information about mindfulness and some techniques, visit Radias Health, Self, and Positive Psychology (I won’t add the .org or .com part, so you don’t have to worry about “clicking the link”). 
        </p>       

        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from Positive Psychology and Self.
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

export default Mindfullness;
