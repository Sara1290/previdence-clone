import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const VTpt1 = () => {
  ReactGA.pageview('src/Components/Blog/VTp1.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Vicarious Trauma, Part 1" ?
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
        <h5>“Mental trauma is NOT a sign of weakness. It’s a sign of compassion for your fellow man”</h5> 
        <p>
        You’re acquainted with trauma, unfortunately, but what about secondary or vicarious trauma? Though it seems responding to disturbing incidents wouldn’t cause trauma, it can be as detrimental to the first responder as experiencing it firsthand. You have a big heart, you’re prepared to help others and with that comes a cost.
        </p>
        <p>
        We first addressed trauma on May 5, but you address it every day. Here’s a bit of information to keep you sharp and recognize the type of trauma you are exposed to, how you may experience it, and what you can do to alleviate the effects (more on this later).
        </p>
        <p>You approach your job each day prepared for the worst. You see the sad, gruesome, depressing, unjust, and you can’t get it out of your head. It’s in your thoughts, your dreams, and now you find yourself obsessing about the potential danger to you and your loved ones. It’s a bit confusing, though, because you weren’t the one in the accident, the victim of the crime, or the natural disaster. What are these feelings you are experiencing? Why does it seem like your brain is rattled and you’re unable to clear your head or erase the event? Why do you feel angry and isolated, fearful and anxious?
        </p>
        <p>
        Vicarious/secondary trauma is described as: the emotional residue of exposure to traumatic stories and experiences of others through work; witnessing fear, pain, and terror that others have experienced; a pre-occupation with horrific stories told to the first responder. The chronic stress of taking in others’ trauma, which leads to symptoms similar to PTSD.
        </p>
        <p>
        Signs you may be experiencing vicarious trauma could be: bystander guilt; shame; feelings of self-doubt; preoccupation with thoughts of the situation; loss of hope; pessimism; cynicism…the list goes on. These reactions can be threatening to the one feeling them and need to be addressed. Reach out to a trusted friend/family member, peer support, the Previdence Liaison, or a therapist.
        </p>
        <p>We invite you to watch this short video. <br></br>
        “I wish my head could forget what my eyes have seen” 
        <a href="https://www.youtube.com/watch?v=Zn6wKAuXIH8 "> Behind The Shield</a>
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute contributors are National Institute of Health and Psychology Today.
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

export default VTpt1;
