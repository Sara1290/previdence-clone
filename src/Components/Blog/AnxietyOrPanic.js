import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const AnxietyOrPanic = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Anxiety or Panic" ?
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
        Ever wonder what the difference is between a panic attack and an anxiety attack? Have you experienced either of these? 
        </h5> 
        <p>
        Some panic attacks come on unexpectedly and with abrupt and intense rushes of fear or dread, usually with no real danger or apparent cause. Accompanying these episodes are challenging physical symptoms, like a racing heartbeat, shortness of breath, or nausea. Those that are unexpected typically do not have clear external triggers.
        </p>
        <p>
        Contrary to the unexpected panic attack, an expected panic attack can be prompted by external stressors, like phobias; spiders, snakes, water, bats, crowds, driving, etc. Panic attacks can have both physical and emotional symptoms that include apprehension and worry, distress, fear of dying or losing control, chest pain, shaking, headache, dizziness, among other similar symptoms.
        </p>
        <p>
        Risk factors for panic attacks can be experiencing trauma or witnessing traumatic events, like domestic violence, accidents, death of a loved one, divorce. Other factors include chronic health conditions, ongoing stress and worries, family conflicts, mental health conditions like depression, close family members with anxiety and panic disorders, and using substances. Though these risk factors increase the potential for panic and anxiety attacks, they are not a guarantee that an individual will experience them.
        </p>
        <p>
        Anxiety attacks. They are not the same as panic attacks. They seem the same, as they have similar symptoms, causes, and risk factors. However, a panic attack tends to be more intense and is likely accompanied by more severe physical symptoms. Anxiety leaves you with a feeling of pins and needles, restlessness, sweating, churning in your stomach, aches and pains. Though these symptoms also accompany a panic attack, they are less severe and will normally not incapacitate a person. 
        </p>
        <p>
        Panic and anxiety can disrupt your life if left untreated. They have profound effects on all aspects of daily life. Things like avoiding social situations, physical illness, problems at work or school, depression and anxiety disorders and the like, increased risk of suicide or thoughts of, substance misuse, financial problems. Some people experience anxiety to a degree that they feel unable to escape a situation, so they avoid them altogether, or they become dependent on others to constantly accompany them.
        </p>
        <p>
        Now that you understand the minor, but significant differences, there are means to cope and remedy a panic and/or anxiety attack and prevent anxiety from turning to a full-blown panic attack.
        </p>
        <ul className="blog-post-ul">
          <h5>The following are taken from Healthline:</h5>
            <li><b>Take slow deep breaths:</b> When you feel your breath quickening, focus your attention on each inhale and exhale. Feel your stomach fill with air as you inhale. Count down from four as you exhale. Repeat until your breathing slows. </li>
            <li><b>Recognize and accept what you’re experiencing:</b> If you’ve already experienced an anxiety or panic attack, you know that it can be incredibly challenging. Remind yourself that the symptoms will pass, and you’ll be alright. </li>
            <li><b>Practice mindfulness:</b> Mindfulness is a technique that can help you ground your thoughts in the present. You can practice mindfulness by actively observing thoughts and sensations without reacting to them. </li>
            <li><b>Use relaxation techniques:</b> Relaxation techniques include guided imagery, aromatherapy, and muscle relaxation. If you’re experiencing symptoms of anxiety or panic attack, try doing things that you find relaxing. Close your eyes, take a bath, or use lavender, which has relaxing effects. </li>
        </ul>
        <ul className="blog-post-ul">
          <h5>Some lifestyle changes to consider to prevent anxiety and panic attacks, as well as reduce the severity of symptoms when an attack occurs:</h5>
            <li>Reduce and manage sources of stress in your life. </li>
            <li>Learn how to identify and stop negative thoughts. </li>
            <li>Get regular, moderate exercise. </li>
            <li>Practice meditation or yoga. </li>
            <li>Eat a balanced diet. </li>
            <li>Join a support group for people with anxiety or panic attacks. </li>
            <li>Limit your consumption of alcohol and caffeine as well as the use of drugs.</li>
        </ul>
        <p>
        If you find yourself in a situation that brings on some, or all, of these symptoms, take a moment to focus on the now, the reality, and what you can do to decrease the severity of what you are feeling. If anxiety and/or panic become too much to bare, reach out to your support system, or a professional for help to cope and get through those moments.  
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute was created for you with contributions from Mayo Clinic
and Healthline.   
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

export default AnxietyOrPanic;
