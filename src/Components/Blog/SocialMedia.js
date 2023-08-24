import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const SocialMedia = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Social Media" ?
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
        Ok, ok, we hear a lot about how social media negatively affects young people…what about adults? Are adults as likely to get caught up in the snare? Think about it for a minute…you’re sitting there, tired from a loooong day, nothing going on around you, nobody nearby. What do you do?        
        </h5> 
        <p>
        Whip out a book? It’s actually nice to sit in the library, your car, or a quiet room in your home for a few minutes reading. <br></br> Listen to music? It literally moves you. <br></br>Journal the events of the day? Writing your thoughts helps build resilience. You get to “see” your day from another perspective. This is recall. <br></br>Close your eyes and relax? Just let your brain rest and be mindfully present in the moment, or completely absent. <br></br>Get on TikTok, Facebook, Instagram and the like? This is good, in moderation. <br></br>
        What’s your go-to when you have a few, unspoken-for minutes?
        </p>
        <p>
        Here’s a small look at the effects of social media and technology on your brain. How do tech devices interfere with the brain’s ability to function, to send messages to your body that say, “life is good,” “I feel happy and energized”?  
        </p>
        <p>
        The four main brain chemicals that make you happy are dopamine, serotonin, oxytocin, and endorphins. A good way to release these is to do what you love, get up, move, rest, take a bath, and take time for yourself. Using your phone for social media isn’t a bad thing, it can help you stay connected to family and friends. 
        </p>
        <p>
        However, there’s a drawback to using our modern, hypnotic, convenient technology. It interferes with the brain’s ability to produce and sustain the good chemicals that make you happy and calm. Unaware of the time, you realize you’re caught up, surprisingly it’s been 20-30 minutes, or more and you feel like a zombie. Where did the time go? You might be addicted. That’s not good.
        </p>
        <p>
        The negative side of social media is that people find themselves sitting for too long wasting time scrolling, learning nothing new, and losing sleep. Put the phone and other technology away at a specific time each evening (unless you’re on call, of course).  
        </p>
        <p>
        Develop a healthy bedtime routine that does not involve a screen. Your sleep will improve, along with your mood and overall health and daily function.  
        </p>
        <p>
        How do you feel about social media, about technology and how they influence your thoughts, behavior, and your life?
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

export default SocialMedia;
