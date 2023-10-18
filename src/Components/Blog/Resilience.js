import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Resilience = () => {
  ReactGA.pageview('src/Components/Blog/Resilience.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Resilience" ?
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
          If you’ve ever felt like life wants to keep kicking you down, like you can’t seem to catch a break, how do you handle it? What do you do when something goes wrong? Do you tend to get back up or fall apart?
        </h5> 
        <p>
        Resilience is our inner strength to rebound from adversity. When we harness that inner strength, we typically recover, sometimes even stronger than before. Though resilience doesn’t make our problems go away, it empowers us to see beyond them, to see the light in a dark place, to be fulfilled and enjoy life. Resilience equips us with the skills to manage stress in a healthy way.
        </p>
        <p>
        The Mayo Clinic states that, “resilience is the ability to adapt to difficult situations.” You may still become angry, frustrated, or feel grief and pain, but you keep functioning…physically and psychologically. It’s not about putting up with something difficult, enduring the struggle, or figuring it out on your own. As a matter of fact, a key element in resilience is being able to reach out to others for support. 
        </p>
        <p>
          Resilience, coping skills, and protective experiences (stability) go hand-in-hand. These positive outcomes help outweigh the negative outcomes. Similar to a scale…protective outcomes on one side, negative outcomes on the other. Life has to balance out somehow and when we struggle to find the positive, there are acquired skills that bring balance back. 
        </p>
        <ul className="blog-post-ul">
          <h5>The following six skills, suggested by Mayo Clinic, can help us endure hardship and build resilience:</h5>
          <li>Get and stay connected - strong, positive relationships with loved ones and friends. Volunteer, join a faith group, further your education, find your niche.</li>
          <li>Make each day meaningful – do something that brings a sense of accomplishment and purpose. Set clear, achievable goals to help look toward the future.</li>
          <li>Learn from experience – how have you coped in the past? What skills did you use to get through difficult times? Keep a journal about your experiences and how you made it through those difficult times.</li>
          <li>Remain hopeful – the past won’t change, but the future is ahead and accepting change, as difficult as it can be, makes it easier to adapt.</li>
          <li>Take care of YOU – hobbies, physical fitness, sleep, and a healthy diet are rewards for your busy life. Stress management and self-compassion are two components of resilience.</li>
          <li>Be proactive – don’t ignore your problems, figure out how to take care of them, make a plan and take action. Trauma and major setbacks can be hard to recover from, you have to work at it. Sometimes professional help is necessary to strengthen your resilience.</li>
        </ul>
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

export default Resilience;
