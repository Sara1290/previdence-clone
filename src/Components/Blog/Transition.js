import  React from "react";
import NavBar from '../NavBar.js';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter.js";
import ReactGA from 'react-ga';

const Transition = () => {
  ReactGA.pageview('src/Components/Blog/Transition');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Transition" ?
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
        Transitions…AKA, changes…can be intimidating, like transitioning from junior high to high school. What about that inevitable transition from childhood to adulthood? That’s a jolt into reality.  
        </h5> 
        <p>
        The transition to a new job or position holds excitement, yet an amount of trepidation, as the thought of failing makes us question our decision. Similar to transitioning from single life into marriage, then moving into parenthood, grandparenthood, and all things family! The list of transitions goes on and on, but they are certain in this crazy thing we call life.
        </p>
        <p>
        Change can be hard, but it is good.<br></br>
        Many of life’s transitions can be challenging, frightening, rewarding, enlightening, fun, and most of all fill us with gratitude and hope. They tend to make us stronger and more resilient. When a change in life presents us with things we would rather walk away from, that is when we stand strong with the support of family, co-workers, and other connections. It’s ok to feel anxiety and apprehension for the unknown. Just take it a step at a time and soon you’re right where you need to be…into the next phase of your journey. Acknowledge the power of your own will and courage. Move ahead with determination and strength.
        </p>
        <p>
        Now take your thoughts to the beautiful transitions of the seasons; winter to spring to summer to fall and into your favorite time of year, whatever that may be. See yourself there. Feel the energy. Feel your attitude change from doubtful to hopeful.
        </p>
        <p>
        As we transition from spooky season into the season of gratitude and finding our blessings, take a moment to recognize the good around you. See the people who are a light. Notice the little (and big) glimmers of hope. Though you witness the bad, the negative, you also see the miracles and the things that illuminate your journey.
        </p>
        <p>
        Make a gratitude list and fill it with all the things that bring a smile to your face, joy to your heart, and peace to your mind. From the small, unseen details to the obvious and monumental, your list will grow from day-to-day. Before long, you will find your gratitude list exceeds what you could have imagined. Share your list with those around you. Gratitude, hope and optimism are contagious, so expose others! Allow yourself to celebrate your happiness and cheer others on in their journey. 
        </p>
        <p>
        “Transition; the process or period of changing from one state or condition to another”
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you, for your reading enjoyment.
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

export default Transition;
