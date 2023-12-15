import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const MakeHappy = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "If I Could Make You Happy" ?
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
          If I could make you happy, that’s something I would do <br></br>
          Take the sadness from your heavy heart, so you’re no longer blue <br></br>
          I’d take the bad, the sorrows, the fears, and put them in a box <br></br>
          Then, when night draws near, you’d feel peaceful sleep unlocked <br></br>
          Your slumber filled with happy dreams and times of bygone days <br></br>
          With a million stars aligned and all the bad erased <br></br>
          But the work is yours, not mine, you see <br></br>
          You have strength to endure, to set yourself free <br></br> 
          You are a hero without a cape, keeping your eyes to the sky <br></br>
          You face each day with courage and wit, a person who can cry <br></br> 
          You may struggle, you may fall, you may fear the work you do <br></br>
          But know this, you courageous soul, this journey is just for you <br></br>
          You’re on the right path, you’ll conquer and overcome <br></br>
          So, step with pride and valor as the warrior you’ve become <br></br> 
          You’ve fought the battle, defeated the beast with only but a scar <br></br> 
          With courage as your guide, you’ll make it through this war <br></br>
          So, remember, brave one, when you’re feeling down and out <br></br>
          You’ll conquer this battle, I know without a shadow of a doubt <br></br> 
          Lean when you feel weak, carry when you feel strong <br></br>
          But most of all, remember, you’ve been OUR hero all along. <br></br> 
        </h5> 

        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you. I hope you enjoyed your reading.  
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

export default MakeHappy;
