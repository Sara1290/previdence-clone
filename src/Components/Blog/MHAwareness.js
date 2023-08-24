import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const MHAwareness = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Mental Health Awareness" ?
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
        "I’ve been having a hard time lately. I just don’t feel like myself."
"I can’t get that scene out of my head and it’s really getting to me…" "I can’t sleep, the nightmares are terrible."
"This crap’s not worth it anymore."
"I feel so anxious and depressed."
"Hey, can we talk?"
I think I need help.
Could I get the number for your therapist?"
"I gotta tell ya, best thing happened yesterday!
I had a better day! Therapy went so well!"
"I’ve been going to therapy and feel a lot better."
"Therapy has been a great experience. I wish I would’ve gone sooner."
          </h5> 
        <p>
        When we look at the big picture and understand mental health, we realize it affects how we think, feel, and behave. It is our emotional, psychological, and social well-being. It helps determine how we handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood. Refer to the CDC for more information about mental health and how important awareness is. 
        </p>
        <p>
        May is Mental Health Awareness Month, and having these intentional conversations helps to remove the stigma. Making it a normal part of life by talking about mental health and therapy does just that. It shouldn’t be a secret, or something we try to hide for fear of “a look” or being rejected. We readily talk about our time at the gym, the dentist, or going to the doctor. Taking care of our mental health is as important to our function as physical (the body itself) and physiological (the body’s functions) care. 
        </p>
        <p>
          In the last few Mental Health Minutes, we’ve discussed stigma, hope, and resilience, among other topics. One way to remove the label placed on mental health is to openly talk about it. Discuss it in a way that normalizes it, brings it out of the darkness and into the light of recognition and acceptance. Are you reluctant to discuss your mental health because of the response you might get?
          </p>
        <p>
        Please consider talking about your mental health with a loved one, a friend, or, if available, somebody on your peer support team. Casually bring it up. By opening your door, you may be opening a door for someone else in need of support.  
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

export default MHAwareness;
