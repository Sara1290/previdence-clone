import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Thanksgiving = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Thanksgiving" ?
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
        To all of our first responders and your families this Thanksgiving season and always, we wish you the most peaceful, content Thanksgiving. Enjoy the food, family, friends, and love that surrounds you. 
        </h5> 
        <p>
        For those who will be working to keep us safe and secure, thank you. Thank you for the sacrifices you selflessly make and for your passion to protect our communities. Gratitude and respect are felt each day for you and your families. Be safe, and most of all, know how grateful we all are for you and your service. 
        </p>
        <p>
        To EVERY First Responder <br></br>
Across our troubled land <br></br>
God has blessed you in this hour <br></br>
To help your fellow man! <br></br>
You sacrifice for others <br></br>
Every day you do your part <br></br>
To make the world a better place <br></br>
Because you have a heart! <br></br>
Mere words cannot repay you <br></br>
For the good deeds you have done <br></br>
Your dedication moves us all <br></br>
Our hearts you’ve clearly won! <br></br>
You’re in the frontline battle  <br></br>
While some stay home to pray <br></br>
To thank our God for what He’s done <br></br>
By using YOU today. <br></br>
        </p>
        <p style={{fontStyle: "italic"}}>
        L.A. Rummel
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

export default Thanksgiving;
