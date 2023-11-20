import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Sad = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Seasonal Affective Disorder" ?
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
        What are your thoughts about the winter blues? What do you know about Seasonal Affective Disorder, or Seasonal Depression?
        </h5> 
        <p>
        Sometimes depression is triggered by the change of seasons, generally late fall into winter. Though there are no clear signs of SAD, there are definite symptoms. Some symptoms include feeling sad most of the day and nearly every day, lack of energy and/or fatigue, anxiety, feeling hopeless or worthless, problems concentrating, arms and legs feel heavy, you’re easily irritated, sleep problems (oversleeping), loss of interest in things you enjoy, thoughts of death or suicide.
        </p>
        <p>
        When there are more dark hours than light, feeling like you’re not yourself, can be normal, but when it is persistent and pervasive, it may indicate a problem. SAD affects how you feel and think, ultimately affecting, even controlling your daily life.
        </p>
        <p>
        Research has shown that less sunlight and shorter days could be linked to chemical changes in the brain and may contribute to the cause of seasonal affective disorder. But don’t lose hope. Even though you cannot change the seasons, there are things you can do to help lessen the effects of the cold, dark season of winter.
        </p>
        <p>
        </p>
        <p>
        </p>
        <ul className="blog-post-ul">
          <h5>Some causes of SAD include the following:  </h5>
            <li><b>Biological</b> clock change: When there’s less sunlight, your biological clock shifts. This internal clock regulates your mood, sleep and <a className="blog-link" href="https://my.clevelandclinic.org/health/articles/22464-hormones">hormones.</a> When it shifts, you’re out of step with the daily schedule you’ve been used to and can’t adjust to changes in daylight length. </li>
            <li><b>Brain chemical imbalance:</b> Brain chemicals called <a className="blog-link" href="https://my.clevelandclinic.org/health/articles/22513-neurotransmitters">neurotransmitters</a> send communications between <a className="blog-link" href="https://my.clevelandclinic.org/health/body/22584-nerves">nerves.</a> These chemicals include serotonin, which contributes to feelings of happiness. If you’re at risk of SAD, you may already have less serotonin activity. Since sunlight helps regulate serotonin, a lack of sunlight in the winter can make the situation worse. Serotonin levels can fall further, leading to depression.</li>
            <li><b>Vitamin D deficiency:</b> Your serotonin level also gets a boost from vitamin D. Since sunlight helps produce vitamin D, less sun in the winter can lead to a <a className="blog-link" href="https://my.clevelandclinic.org/health/body/22584-nerves">vitamin D deficiency.</a> That change can affect     your serotonin level and your mood. </li>
            <li><b>Melatonin boost:</b> <a className="blog-link" href="https://my.clevelandclinic.org/health/articles/23411-melatonin">Melatonin</a>  is a chemical that affects your sleep patterns and mood. The lack of sunlight may stimulate an     overproduction of melatonin in some people. You may feel sluggish and sleepy during the winter. </li>
            <li><b>Negative thoughts:</b> People with SAD often have stress, anxiety and negative thoughts about the winter. Researchers aren’t sure if these negative thoughts are a cause or effect of seasonal depression (Cleveland Clinic, 2022).</li>
        </ul>
        <p>
        Do you like winter activities, like snowmobiling, skiing, snowboarding, ice skating? Maybe a little ice fishing? If so, being active is ideal in decreasing the onset of SAD and helping keep away the winter blues. However, if you really aren’t into winter activities, you might need something else to keep your mind busy and your mental health in tip-top shape.
        </p>
        <p>
        There are some great alternatives to outdoor activities like getting outside in the sunlight, being nutritionally aware, exercise, maintaining your social circle, and possibly considering professional help. There are many indoor activities that can help sustain your health during the cold months. The gym is a good place to start, or a treadmill in your own home. What about those fun centers…they’re not just for kids, ya know. Go have fun with family, friends, or just soak in that sunlight on your own.
        </p>
        <p>
        Above all, take care of you. Here’s what you already know; eat well-balanced meals, get enough sleep, exercise, manage your stress, remain close to your social supports, and when these seem out of reach or overwhelming, reach out for help. We are a phone call away, an email, a text.  
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from Johns Hopkins Medicine and the Cleveland Clinic.  
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

export default Sad;
