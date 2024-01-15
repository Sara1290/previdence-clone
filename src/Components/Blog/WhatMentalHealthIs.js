import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import isisnt from '../../images/isisnt.jpg'
import MemberCareFooter from "../MemberCareFooter";

const WhatMentalHealthIs = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "What Mental Health Is" ?
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
      {/* <img src={blogdata.img} alt="tired person" className="blog-post-img" /> */}
      <br></br>
      <img src={isisnt} alt="what mental health is and isn't" className="blog-img" />
      <div className="blog-content">
        <h5>
        You and I are alike. We have mental health, just like we have physical health, and we want to be our best. Literally everything we do and experience in life either involves or affects our mental health to some extent. So why not take care of it, be proud of it, and maintain it the way we do our physical health? 
        </h5> 
        <p>
        Remember, a common myth about mental health is that one is either mentally healthy or mentally ill. The reality is that one’s state of being exists on a continuum. A person that is generally mentally healthy may experience emotional problems, changes in behavior, or have strained and unhealthy relationships with others. A person that is diagnosed with a mental illness may experience moments of clarity and be highly functional. The presence of illness does not always impede one’s ability to live a meaningful and fulfilling life (The Arc, 2023).
        </p>
        <p>Like so many people, you and I want to remove the stigma, the label that mental health means something is wrong, that we must be crazy or incapable of living a full life, or that we are somehow a danger. We want to make mental health a normal part of conversation, a normal part of life, just like check-ups with the medical professional. 
        </p>
        <p>
        The comments below are from people who understand mental health and its important role in day-to-day function. You have an opinion, as well, about mental health and what it is or is not. Be careful of the myths, they abound! Too often people are led to believe that mental health is something taboo, something to be avoided, a topic not to be discussed. However, the more we discuss mental health, the more we realize it is a normal part of life, something we all have, and that it is a fundamental aspect to our health and welfare.
        </p>
        <p style={{fontStyle: "bold"}}>
          Aaron
        </p>
        <p>
        Mental health is not a flag to be waived around. It is not a stumbling block to trip over on the ground. It's not a centerpiece for every table it's not for victims to wear a large label, not to have it doesn't mean you're not able.
        </p>
        <p style={{fontStyle: "bold"}}>
          Dave
        </p>
        <p>
        This might be an "is" definition: "state of well-being in which the individual realizes their abilities, can cope with the normal stresses of life, can work productively and fruitfully, and can contribute to their community"
        Not just the absence of well-being?
        </p>
        <p>
          Cindee
        </p>
        <p>
        To me, mental health is the ability to have a healthy balance between emotions, thoughts, feelings. It's ok to have all of those as long as they are balanced. And the ability to handle stresses of everyday life.
        </p>
        <p>
          Sara
        </p>
        <p>
        I would define mental health as the current state and strength of our mental, emotional, and spiritual wellbeing.It might be in a good place, or in a place where we're struggling but that's still our mental health. Just like our physical health it's on a spectrum of unwell to well.
        </p>
        <p>
          Rob
        </p>
        <p>
        Our mental health is the current state of our mind, body, spirit and personality that determines how we interact with our internal and external world. It regulates how we interact with the challenges in and around us contributing to resilience and meaning.<br></br>

        Mental health is not mental illness. It is our overall health and well-being. It can be excellent, poor, or somewhere in the middle. We all experience ups and downs in our mental health, but it doesn’t mean we have mental illness. Mental health is a vital part of our daily function and when we do not take care of it, there can be a malfunction, just like a car that has never been serviced.<br></br>

        Think of mental health as a partner to physical health. They both run on fuel and proper maintenance, and when well maintained, function properly. However, there are times when even a well-oiled machine needs extra care or may have a breakdown. In those times, it is crucial to attend to those needs and get our “machine” back up and running smoothly.
        So, you well-oiled machine, take care of yourself and maintain your mental health the way you do your physical health, or the way you set up those yearly check-ups with the doc. We want you to be here for a long time. 
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
      <MemberCareFooter />
    </div>
  )
  
}

export default WhatMentalHealthIs;
