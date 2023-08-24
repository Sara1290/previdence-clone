import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const PositiveLight = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Mental Health in a Positive Light" ?
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
        <h5>Society’s negative view of mental health has been detrimental and generated harmful labels. How do we raise awareness about the importance of mental health? How do we inspire people to receive mental health care the way they do regular physical checkups, or go to the gym to be fit? How do we remove the label? That’s a big mountain to climb, but we’re getting to the top. .</h5> 
        <p>
        It starts with you, with me, with all of us talking honestly, and without shame, about our own experiences with mental health. Not necessarily disclose our most personal circumstances, or traumas, but how we focus on our mental fitness, and then not be afraid to share with others. 
        </p>
        <p>
        Stigma – public, self, and institutional -  reduces the likelihood we will reach out for support and has negative effects on recovery. This leads to reduced hope, lower self-esteem and self-worth, as well as adverse effects on families, social circles, and work life. 
        </p>
        <ul className="blog-post-ul">
          <h5>A few ideas to see mental health in a positive light:</h5>
          <li>Adjust your own thinking</li>
          <li>Talk openly about mental health</li>
          <li>Educate yourself and others</li>
          <li>Be cognizant of language – what we say matters </li>
          <li>Encourage equality between physical and mental illness</li>
          <li>Show compassion and dignity for those with mental illness</li>
          <li>Choose empowerment over shame</li>
          <li>Be honest about treatment</li>
          <li>Don’t isolate yourself</li>
          <li>Join a support group, or talk to a peer support</li>
          <li>Don’t harbor self-stigma</li>
          <li>Get treatment</li>
        </ul>
        <p>We are not a diagnosis - instead of “I’m bipolar,” say, “I have bipolar disorder.” We are not a mental health condition, just as we are not cancer, or other physiological condition. How we respond to our own mental health can influence others to feel secure in accepting their own. We all have mental health, we are just at different levels of need. Imagine a world where we could be ourselves and discuss our mental health journey knowing we will be seen in the same positive way</p>
      <ul className="blog-post-ul">
        <h5>When somebody reaches out to you, your response sets the stage for future attitudes. Here are some do’s and don’ts:</h5>
        <li>“Thanks for opening up to me,” not “It could be worse”</li>
        <li>“Is there anything I can do to help?” not “Just deal with it, it’ll go away in time”</li>
        <li>“I’m sorry to hear that, it must be tough” not “Snap out of it and move on”</li>
        <li>“I’m here for you when you need me” not “Everyone feels that way sometimes” </li>
        <li>“I can’t imagine what you’re going through” not “You may have brought this on yourself”</li>
        <li>“People do get better” not “We’ve all been there”</li>
        <li>“How are you dealing with this?” not “Try thinking happier thoughts” or “Look at all you have to be thankful for”</li>
      </ul>
      <p>
      Keeping our thoughts positive leads to our words and conversations being positive. Though mental health has been seen as a dark place, it is time to enlighten our minds and spread the word that it is a normal part of our being and talking about it should also be normal. 
      </p>
      <p>
      For some positive mental health reading/listening, here are a few organizations and campaigns that focus on addressing the issue of mental health stigma and removing the negative labels; bring change to mind; STAMP OUT STIGMA; Make it OK; This is My Brave; How Are You Really?; Safe Space Radio; stigma free; Healthy Minds with Dr. Jeffrey Borenstein. 
      </p>
      <p>
      This Mental Health Minute has been created for you. Contributions from American Psychiatric Association, National Institute of Health, and NAMI. 
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

export default PositiveLight;
