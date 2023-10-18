import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Connection = () => {
  ReactGA.pageview('src/Components/Blog/Connection.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Connection" ?
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
        Be connected<br></br>
        Though you see more than enough trauma, tragedy, and sadness, you also see the good. You see the positive. You experience happiness and joy, peace and comfort just as others do. 
        </h5> 
        <p>
        This isn’t some sappy attempt at making you see your worth. It’s a sincere effort to bring awareness to the courageous and gallant person you are. Let this small message give you hope and shed light on your gifts and help you identify YOUR value. Let it help you stay connected.
        </p>
        <p>
        Your job is filled with experiences that help you grow and become a better person. You have the opportunity to teach, develop friendships, and share with the community your expertise, wisdom, courage, and humanity. You’re the one we look to for protection and help. We see you as the hero, the one we call in our time of need. Yeah, that’s a pretty heavy cross to bear, but it’s also commendable and rewarding, and only you can fulfill that role. You do your job well, nobody can do it like you. You bring a uniqueness to the first responder occupation that makes it rewarding, that’s why you keep coming back and doing it day after day
        </p>
        <p>
          Be passionate about what you do to make a difference. Be proud that you are seen as the one strong and brave enough to carry the net. And, be assured you are appreciated, respected, cared for, and above all celebrated for your selflessness and bravery. What sets you apart is your willingness to run TO danger, not away from it.
        </p>
        <p>
        The world is better with you in it. 
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

export default Connection;
