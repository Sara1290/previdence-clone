import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Breathing = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Breathing" ?
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
        <h5>Let’s talk about breathing…as a matter of fact, you’re probably doing it right now. At least I hope you are.</h5> 
        <p>
        Did you know there is science that backs the positive effects of controlled breathing? Though breathing is autonomous we can control it, unlike many other bodily functions. It is an essential act that literally requires no thought because it is governed by the autonomic nervous system. However, thinking about it can alter your physical and mental health.
        </p>
        <ul className="blog-post-ul">
          <h5>Here are some important facts about controlled breathing:</h5>
          <li>Controlled breathing doesn’t just alter the amount of oxygen intake but impacts how much blood is ejected from the heart, affecting cardiovascular health. </li>
          <li>Techniques like inspiratory muscle strength training (IMST) can lead to significant health improvements, such as a reduction in systolic (upper number) blood pressure</li>
          <li>Controlled breathing can help manage mental health by reducing feelings of stress, anxiety, and depression and can be used as a tool for pain control. </li>
        </ul>
        <p>
        You see, breathing isn’t just about the lungs. It affects the nervous and cardiovascular systems and more. By changing how much we inhale, we actually impact how much blood is ejected from our heart. As well, breath is closely tied to cognition (how the brain functions). There are several ways breathing can affect the brain, and it generally comes down to the type of breathing exercise used, such as nasal breathing. Nasal breathing synchronizes activity in the piriform cortex (odor acuity and perception), amygdala (experiencing emotions), and hippocampus (memory formation and retrieval), which has a positive effect on cognition. Interestingly, this synchrony is not achieved with mouth breathing.
        </p>
        <p>It’s helpful to know how breathing both affects and is affected by the nervous system. Breathing and heart rate are regulated by the same parts of the brain, and each “talks” to the other to work in sync. When we inhale, our lungs expand, and pressure on the heart and blood vessels changes. That stimulates sensory nerves that, in return, affect how hard we breathe.</p>
        <p>
        I’m sure you understand how important controlled breathing is to physical and emotional health. No, it’s not a cure-all for severe mental health challenges, or acute medical conditions. Just keep in mind that you do have some control over your breathing and that control leads to improved mental and physical health. It only takes a few minutes to practice some breathing techniques that positively impact your day. 
        </p>
        <p>
        Are you breathing?
        </p>
        <p>
        This Mental Health Minute was created for you with contributions from the American Heart Association and Neuroscience News. 
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

export default Breathing;
