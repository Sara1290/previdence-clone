import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const Questions = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Questions" ?
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
        Why is mental health an essential part of your complete health and well-being? 
        </h5> 
        <p>
          <strong>What IS mental health? </strong>
        </p>
        <p>
        We’ve discussed this before, but… Mental health is your emotional, psychological, and social well-being. It affects how you think, feel, and act, and helps determine how you handle stress, relate to others, and make healthy choices. Mental health is important at every stage of life, from
childhood and adolescence through adulthood. Over the course of your life,
regardless of what you experience, the way you think, your mood, and your behavior can be affected. During your lifetime, you will experience mental health struggles, but they don’t have to be a punishment, or something to be ashamed of. They are a normal part of life and can be dealt with in a healthy way so we can be fully functional. 
        </p>
        <p>
        <strong>Why is mental health an essential part of your complete health and well-being? </strong>
        </p>
        <p>
        Mental and physical health are equally important components of overall health. They run in tandem and when one is unhealthy, the other will soon follow. Look at it like this; depression increases the risk for many types of physical health problems, long-lasting conditions like diabetes, heart disease, and stroke. Know why? If you are chronically depressed, your energy decreases, which in turn, reduces your motivation to get up and move. Similarly, the presence of chronic conditions can increase your risk for mental illness. If you suffer physical pain, you will likely experience depression when the pain becomes too much to sustain. Do you see how mental and physical health run on a continuum? 
        </p>
        <p>
        <strong>Does your mental health change with age?  </strong>
        </p>
        <p>
        Absolutely! Just remember your mental health can change over time, depending on many factors. Look at what you do for a living. You have a lot of stressors, long working hours, caring for your community, responding to difficult calls. What about economic hardship, caring for family, poor physical or mental health? These are just a few things that contribute to
changes in your mental health. Again, change is normal throughout the life
span, that’s why it is vital to your daily function to take care of your mental
health just like you do your physical health.

        </p>
        <p>
        <strong>Does your profession affect your mental health? </strong>
        </p>
        <p>
        Let me ask you this, HOW does your profession affect your mental health, your physical health, your spirituality, your relationships, your behavior? You see, all of these are your mental health rolled up into one nice little package. You precariously balance each of these and you do it with precision and care. However, realize you need to focus on each in order to
maintain your complete health and function, to run at peak performance. Your profession puts you at an increased risk of challenges like depression,
anxiety, PTS (post traumatic stress), lack of sleep, even addiction. 

        </p>
        <p>
        <strong>How do you talk about mental health? </strong>
        </p>
        <p>
        Start by normalizing the conversation. Make it as normal as talking about your last visit to the dentist, the gym, or the mechanic to have your vehicle tuned up.  
        Put a stop to language that degrades or mystifies mental health. Focus on the person, not the condition.  
        Educate yourself. Gather information and share with others. Learn what mental health is and what it is not, so you can have conversations that educate others, as well. 
        Practicing these steps will not only empower you, but will empower those you talk to, because you will inevitably be speaking to somebody in need of help and understanding.
        </p>
        <p>
        Consider a world where there is no stigma surrounding mental health, no labels that declare a person crazy, unfit, or dangerous if they see a therapist. Remove the label that says mental health is taboo and should not be discussed, as if it is something vile, or something to be ashamed of. We all have it, let’s talk about it.  
        </p>
        <br></br>
        <h4>
        RESOURCES AND SUPPORT 
        </h4>
        <p>
        Previdence has many resources for you on our website, as well as people you can talk to. Please reach out if you, a co-worker, or loved one is in need of assistance. <br></br>
        <a href='tel:+1-988'>988</a> Suicide & Crisis LifeLine <br></br>
        CrisisLine & Mobile Outreach Team <a href='tel:+1-801-587-3000'>801-587-3000</a>
        </p>
       <p>
       Give us a call to chat or find a vetted therapist, Bobbi's contact info is at the bottom of this page.
       </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from the American Psychological Association and the Centers for Disease Cpntrol. I hope you enjoyed your reading.  
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

export default Questions;
