import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Music = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Music" ?
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
        The Power of Music <br></br>
Aw, the sweet sounds of music. It’s the best feeling to turn on your favorite tunes while driving, working, exercising, hiking, or relaxing and doing absolutely nothing. It just sets the mood. Music takes us back, takes us to a time not forgotten, but remembered with vivid replay in our mind and heart. Déjà vu has the power to literally give our body a boost and our mind a lift.
        </h5> 
        <p>
        Whether you like hard rock, country, classical, blues, pop, jazz, or any genre of music, we feel happy with our tunes. They energize us, move us to dance, smile, and actually feel positive..
        </p>
        <p>
        Think of movies with music, now think of them without the music. It makes a huge difference how we perceive the scene, how we feel about the characters and events. We are brought to excitement, happiness, fear, anxiety, and sit-on-the-edge-of-your-seat anticipation when we hear the notes and crescendo
        </p>
        <p>I always picture the movie Jaws without  that all-too-familiar theme, do, do, do, do…how would I know to start anticipating his arrival and feel fear for the one with a foot dangling from the surfboard or hanging precariously over the edge of the boat…yikes! Music cues my innate sense of danger and prompts me to utter, “He’s on his way, get your foot out of the water! Get out of there!”
        </p>
        <p>
        How about the holidays? The carols and happy jingles playing, getting us excited for the long anticipated day to arrive. Shopping seems less daunting when, in our subconscious mind, we sing along with the voices on the loudspeaker.
        </p>
        <p>
        Did you know music can enhance mental clarity? On the side of science, research shows music can repair damaged cells and spark brain activity in dementia and Alzheimer’s patients. When music therapy was introduced as part of the standard rehabilitation in patients with COPD, there were improvements in symptoms, psychological well-being, and quality of life, compared to those who received rehabilitation alone.
        </p>
        <p>
        Music has the ability to distract us from daily stress and can lessen the impact of depression and anxiety. It affects our brain in a positive way increasing energy and stamina. Music can actually lower or raise blood pressure, help process emotions, calm aggressive behavior, prepare us for sleep, even increase learning rates. 
        </p>
        <p>
        Wow! The power of music! Who would’ve thought a little ditty could raise our spirits, move our feet and hearts, and motivate us to FEEL good, and at the same time, improve our overall health? So, listen to your favorite music to clear your mind and hit the reset button.
        </p>
        <p>
        This Mental Health Minute has been created for you. Contributions from National Institute of Health, Listen for Life, and Mayo Clinic. 
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

export default Music;
