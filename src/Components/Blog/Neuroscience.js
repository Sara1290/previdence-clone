import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Neuroscience = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Neuroscience" ?
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
        <h5>Mental health is a global issue, as it should be. However, there is still a stigma attached and until that is removed, those in need of mental health services will likely reject the thought. That is due in part to fear of repercussions at work, with family and social life, or how the community will perceive them. </h5> 
        <p>
        The focus of this neuroscience “minute” is sleep and how vital it is to our overall function and quality of life. We’ve discussed sleep before, but it is such a fundamental aspect of a healthy life that addressing it again is necessary.
        </p>
        <p>
        It's easy to understand how quantity and quality of sleep affect us. It’s a completely different concept to actually GET the quantity and quality of sleep required. What do we do? We take what we can get and hope to get a few zzzz’s on the side once in a while (right, like that’s gonna happen).
        </p>
        <p>Sleep is crucial to brain health. Research shows a correlation between sleep disturbances and multiple neurological diseases like stroke, cognitive aging, dementia, Parkinson’s disease, among others. </p>
        <p>
        Circadian rhythm is the rhythmic activity patterns of rest and activity, the body’s internal clock located in the brain…in the hypothalamus…that coordinate mental and physical systems. They are related to environmental cues like light. Our brain and body regulate our sleep and circadian rhythms and, equally, our circadian rhythms affect our brain and body. Now add sleep disturbances to those patterns and they’re thrown off, which creates a multitude of health issues. 
        </p>
        <p>
        As we age, the deep sleep we need decreases, which contributes to an increase in beta amyloid, a protein found to accumulate in people with Alzheimer’s (this is the science part, cuz it’s about neurons and molecules and toxic buildup through a process called the glymphatic flow). Geez!
        </p>
        <p>
        See, it’s as easy as getting better sleep, 7-8 hours/night of deep, uninterrupted, peaceful sleep…I’ll pause while we laugh. Kidding! There are effective ways to get the sleep we need, but it starts with knowing what you, the individual, need that will sustain your circadian rhythms and allow your brain and body to function at full capacity. 
        </p>
        <p>
        Get plenty of sunlight
        </p>
        <p>
        Limit exposure to light/electronics in bed
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

export default Neuroscience;
