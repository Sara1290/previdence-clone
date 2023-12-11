import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Wonderful = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "The Most Wonderful Time of the Year" ?
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
        As we continue our efforts to bring mental health awareness, humor, and support for first responders with the weekly Mental Health Minute, we hope you are enjoying the read, as well as finding value in the resources. Please reach out when you feel the need, or for
a moment to talk about what’s on your mind.  
Thank you, our respected first responders, for your selfless service, for your courage and determination to keep our communities safe. We have immense gratitude for you.
        </h5> 
        <p>
        Memories act the same. When we recall our best memories, the times we were the happiest, our brain and body behave in a way that can actually influence behavior, decision-making, and mood. Did you know that emotional memories have significant impact on shaping self-concept and life narrative? Yeah, they do that. 

        </p>
        <p>
        Now it’s your turn to provide the music. The list below is some of the all-time favorite Christmas songs. Not only will you find yourself singing the following titles, but you’ll feel a little spark of anticipation and joy. Music has the ability to charge us emotionally, then take us to a level of physical energy that is profoundly effective in decreasing depression, reducing stress and blood pressure, stabilizing heart rate, and can help in managing pain. I know, we’ve already talked about the positive effects of music, but I want to remind you, so you can sing your heart out and enjoy the season. 
        </p>

        <ul className="blog-post-ul">
            <li>White Christmas</li>
            <li>I'll Be Home for Christmas</li>
            <li>Frosty the Snowman</li>
            <li>Have Yourself a Merry Little Christmas</li>
            <li>Jingle Bells</li>
            <li>The Christmas Song (Chestnuts Roasting on an Open Fire) </li>
            <li>Silent Night </li>
            <li>Little Drummer Boy </li>
            <li>O Holy Night </li>
            <li>Hark the Herald Angels Sing  </li>
            <li>Deck the Halls  </li>
            <li>The Most Wonderful Time of the Year</li>
            <li>Rudolph the Red Nosed Reindeer </li>
            <li>Do You Hear What I Hear?</li>
            <li>Santa Claus is Coming to Town</li>
            <li>It’s Beginning to Look a Like Christmas</li>
            <li>Let It Snow</li>
            <li>The Twelve Days of Christmas</li>
            <li>The First Noel</li>
            <li>Here Comes Santa Claus</li>
            <li>Oh, Come All Ye Faithful</li>
            <li>Holly Jolly Christmas</li>
        </ul>
        <p>Keep adding to this list and while you do, allow your mind to feel the peace and happiness of the season and then let that carry over to the new year and into your life, as a whole.
</p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from APA and the many talented artists who provide beautiful Christmas music. Enjoy the memories.  

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

export default Wonderful;
