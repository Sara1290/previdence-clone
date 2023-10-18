import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Sleep = () => {
  ReactGA.pageview('src/Components/Blog/Sleep.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Sleep" ?
    <div className="blog-post-container">
    <div className="blog-post-inner">
      <h1>{blogdata.title}</h1>
      <div className="blog-line"></div>
      <br></br>
      <p>Here we are again.. SLEEP.. pretty important. {blogdata.description}</p>
        <div className="blog-post-attributes">
          <p>{blogdata.author}</p>
          <p>{blogdata.date}</p>
        </div>
      <img src={blogdata.img} alt="tired person" className="blog-post-img" />
      <div className="blog-content">
        <h5>Sleep is an elusive, mysterious activity, it’s also an essential biological function. Sleep quite literally consolidates memories, resets the immune system, restores hormonal balance, or clears metabolic waste and neurotoxins. One thing we know for sure is that sleep is vital to every living creature…but you already know that.</h5> 
        <ul className="blog-post-ul">
          <h5>Why is good sleep important? Remember, you know HOW to get it, we addressed that a few weeks ago, now to discuss the “why”</h5>
        <li>Helps you make good emotional judgements and decrease impulsive actions</li>
        <li>Helps you organize multiple pieces of information into a solid, safe decision</li>
        <li>Increases problem-solving skills</li>
        <li>Improves coping skills</li>
        <li>Enhances physical and mental resiliency</li>
        <li>You’re less likely to be agitated, fatigued, and restless. Do you really want to be angry and tired all the time?</li>
        <li>This one’s biological…good sleep helps the immune system, detoxification, cell repair…and a lot more</li>
        <li>Another biological fact…sleep and gut issues go hand in hand. In case you’re bored, microbiome is a fascinating topic…Google that one</li>
        <li>Sleep affects your physical and mental health; consolidates memories, resets the immune system, restores hormonal balance, clears metabolic waste and neurotoxins. Whew! That was a mouthful!</li>
        <li>Last, but not least, good sleep alleviates those sour moods and makes you easier to work with and get along with. Don’t be a monster!</li>
        </ul>
        <p>Who knew sleep affected so much? Good sleep is a game-changer! And it feels so good!</p>
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

export default Sleep;
