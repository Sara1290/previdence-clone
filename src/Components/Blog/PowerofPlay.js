import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const PowerofPlay = () => {
  ReactGA.pageview('src/Components/Blog/PowerofPlay.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "The Power of Play" ?
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
        <h5>How about a recess for adults? Would you play like you did when you were a child?  
You’ve heard of play therapy and its benefits to treat emotional problems and behavioral disorders of children. Play therapy meets the unique developmental needs of children with evidence based research. Play helps identify specific behaviors and possible dysfunctions, how children communicate and interact with others (social skills), their understanding of the world and so much more. But did you know adults profit from play?
</h5> 
        <p>
        We work hard, take care of our family and responsibilities, but sometimes forget to reverse and think like a child, let our mind relax and the creativity flow. Play boosts our general well-being and can help us cope with stress, not to mention the physical aspect of play that can intrinsically motivate us when having fun. In other words, when exercise feels like play instead of daunting work, we are more likely to participate in it.
        </p>
        <p>
        Play helps sustain overall health in many ways; improved mood and brain function, reduced stress, improved sense of humor, help in healing emotional wounds, and gives us a feeling of hope. Play strengthens bones, muscles, lungs, heart, and can help reduce obesity.  It has also been shown to improve certain health conditions like type 1 diabetes and high cholesterol. 
        </p>
        <p>Play provides a fun way to communicate and cooperate with others, while building social skills and critical thinking skills. Interestingly, play at work has many benefits that adults typically don’t realize. The quality of our work depends on our well-being, not just how hard we work. Play engages the creative side of our brain and helps silence the “inner editor,” (the psychological barrier that censors our thoughts and ideas). Play helps us see problems in a new light and come up with fresh, creative solutions, which leads to increased productivity and innovation. As well, it helps build a positive work environment, because it encourages teamwork, refreshes our mind and body, and provides opportunities for social interaction. </p>
        <p>
        So, to invigorate our soul, our body, your brain, and feel that matchless childhood energy, go play, have fun, be silly, laugh hard, feel young, and above all, improve your physical and mental health. Laughter is THE best medicine. Have a good laugh every day, let the tears roll and your stomach ache…it’s similar to the positive effects of exercise with all those fabulous neurotransmitters contributing to our well-being.
        </p>
        <p>
        How will you play today?
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from PsychCentral and Mayo Clinic Health Systems.
        </p>
        <span>While the Mental Health Minute is geared toward first responders and health care providers, the next one will focus on support for families. Your job is diverse and with it comes a great deal of stress for you, as well as your relationships. Your loved ones need to know they are supported, as well. The MHMs can be beneficial for your family and friends, so please share as you see fit.</span>
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

export default PowerofPlay;
