import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const WorstDay = () => {
  ReactGA.pageview('src/Components/Blog/WorstDay.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Worst Day" ?
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
      <div className="blog-content worst-day-content">
        <h5>
        Today was the absolute worst day ever<br></br>
      And don’t try to convince me that<br></br>
      There’s something good in every day<br></br>
      Because, when you take a closer look,<br></br>
      This world is a pretty evil place.<br></br>
      Even if<br></br>
      Some goodness does shine through once in a while<br></br>
      Satisfaction and happiness don’t last.<br></br>
      And it’s not true that <br></br>
      It’s all in the mind and heart<br></br>
      Because<br></br>
      True happiness can be obtained<br></br>
      Only if one’s surroundings are good<br></br>	
      It’s not true that good exists<br></br>
      I’m sure  you can agree that<br></br>
      The reality<br></br>
      Creates<br></br>
      My attitude<br></br>
      It’s all beyond my control<br></br>
      And you’ll never in a million years hear me say that<br></br>
      Today was a good day<br></br>
      Now read from the bottom to the top

        </h5> 
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with the contribution from Chanie Gorkin, who created this poem in 2015 when she was just 17 years old
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

export default WorstDay;
