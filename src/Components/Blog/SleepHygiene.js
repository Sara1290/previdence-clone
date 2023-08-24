import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const SleepHygiene = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Sleep Hygiene" ?
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
        <h5>We can all relate to the person above. Sleep hygiene describes a series of healthy sleep habits that can improve your ability to fall asleep and stay asleep. It’s not just about brushing your teeth and going to bed</h5> 
        <ul className="blog-post-ul">
          <h5>Sleep Tips</h5>
          <li>Keep a consistent sleep schedule, even on weekends…shift work makes this a bit tricky, so practice some of the others below.</li>
          <li>Keep a consistent sleep schedule, even on weekends…shift work makes this a bit tricky, so practice some of the others below.</li>
          <li>Establish a bedtime routine and schedule. Yes, this is possible</li>
          <li>Turn off electronic devices at least 30 minutes before bedtime. Might want to get rid of that good ol’ TV and replace it with a good book, or meditation</li>
          <li>Don’t eat a large meal before bedtime. Hide those sugary snacks, too, they want to keep you awake</li>
          <li>Keep caffeine at a minimum and not in the evening</li>
          <li>Keep alcohol at a minimum and not right before bedtime</li>
          <li>Exercise regularly and maintain a healthy diet. As little as 20 minutes/day</li>
          <li>Use your bed for sleep and “private moments” only. Ok, this one shouldn’t be too hard </li>
          <li>Keep your bedroom quiet and at a cool, comfortable temperature</li>
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

export default SleepHygiene;
