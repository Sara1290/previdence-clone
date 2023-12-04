import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Gratitude = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Gratitude" ?
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
        Traits, or the “distinguishing qualities or characteristics belonging to a person” (Oxford). We all possess traits that are unique to us as individuals, they make us unique. But they also make us part of the human race, the part that separates us from other living beings. We have principles, or ethics that we live by. 
        </h5> 
        <p>
        Are people with ethics, or strong moral principles trusted people? By nature, they are considered trustworthy, and seen as grateful, honest, accountable, hard-working, and they have integrity.
        </p>
        <p>
          But what are these traits, and are they the same for all people? Are they innate? Let’s go ahead and throw compassion and empathy in there. What about self-control and humility? I’ve always assumed these went hand-in-hand. My dad said that “if a person has integrity, they will also have gratitude, and then all the other values fall into place and you have yourself a pretty dang good person, someone you can trust with your horse or your dog, maybe your kid. And you know what, Bob, that makes a for a humble man/woman.” 
        </p>
        <p>
        It’s like the “moral code” so many people live by; the code that guides our choices and behaviors throughout our life, determines what is right and wrong, good and bad. We determine this by our own values and what is expected of us, of our community, and of society as a whole. But does every person possess these qualities? Do we all have the same moral compass? What you find moral and correct, another person may see as
prudish and boring. 

        </p>
        <p>
        What we do when nobody is watching speaks to our character, to our integrity, and, yes, to our sense of gratitude. How could we make a wrong choice when we know what is good and right? Imagine for a moment how gratitude and integrity affect our mental, physical, social, and career health. There are benefits to these two significant values. 
        </p>
        <p>
        By practicing gratitude, we develop a sense of thankfulness, which can lower levels of stress, depression and anxiety. Focusing on what we do have shifts our perspective, which can make us more resilient against stress and emotional setbacks. 
        </p>
        <p>
        The physical rewards, believe it or not, are also proven to support us in a better life. Those who practice gratitude experience less aches and pains and typically feel healthier. Thoughts of gratitude before bedtime can improve sleep with a more restful night’s sleep. 
        </p>
        <p>
        Consider our relationships…partner, family, friends, work…gratitude and integrity just make us feel good, which has such a positive effect on those around us. We tend to be more satisfied because we focus on what we are thankful for. This helps foster a sense of mutual respect and understanding, strengthening the bond between us and the people around us.
        </p>
        <p>
        Last, but not least, work life. When we are shown, or show, gratitude for our coworkers there is a foundation of cohesion and more positive performance and productivity. So, let’s celebrate the small victories and accomplishments, as well as the big ones. Listen with empathy and understanding. Go ahead and thoughtfully surprise your coworker(s), just out of the blue.
        </p>
        <p>
        If we really want to be happy and content, gratitude and integrity can do a lot for us, a lot for our family, friends, career, and society. Life is good and gratitude and integrity bring resilience and peace to our mind. They can lift us to a place where we move mountains and feel strength and confidence. 
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you.  I hope you enjoyed your reading
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

export default Gratitude;
