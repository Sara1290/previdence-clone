import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Hustle = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Hustle and Bustle" ?
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
        What an exhilarating time of year! The music, lights, the excitement of children, the food, family get-togethers, and the love surrounding us during one of the happiest of holidays.
        </h5> 
        <p>
        Though this is a happy time, for some, it is difficult. If you are one who is struggling, let me help lighten your load, give you something to smile about, maybe even a laugh or two. Share my journey back through time and memories and recall a few of your own. 
        </p>
        <p>
        Holidays hold a special place in my heart. They’ve always been exciting, happy, warm times filled with examples of compassion and charity from my parents who selflessly gave so others wouldn’t go without. They represent what a happy life looks like. It’s not a destination, it is a way of living, a state of mind, it’s how you treat other people and how you THINK. Even through trials, happiness does exist for those who are selfless and have charity in their heart…those who hold hope. 
        </p>
        <p>
        We grew up working and appreciating what we had. We watched our parents give tirelessly and never speak a word of it…there was no gloating, just service to others. We had chores; mucking stalls, feeding horses, sheep, lambs, cows, helping birth these livestock in the freezing early morning hours and rescuing some on the brink of freezing to death. We actually gave a tiny shot of whisky to warm their little bodies. You see, sometimes people wanted to hunt on my dad’s property, so they brought “gifts” as a token of their gratitude. You can’t even believe the cases of wine and whisky my dad was so generously gifted. Though he has never been one to drink, he showed his gratitude for their efforts and graciously accepted. Who would’ve thought that spirits could save the life of a tiny animal?
        </p>
        <p>
        To me, October through December felt different, the work was cheerful and easier somehow. Even the old ram, who loved nothing more than to charge me and the old mare who wanted to bite me, didn’t seem to rub that raw nerve of mine. Did they not know I was the bringer of good things? Apparently not, because they persisted with their violence leaving me bruised and frustrated. I had better things to do than be subjected to abuse from willful, cranky animals. But wait, it’s that special time of year where anger dissipates and patience and understanding override every temptation to be done with their malicious behavior and go back to the warmth of our home.
        </p>
        <p>
        Let’s talk about the happiness the holidays bring. Think about your warmest, most peaceful memories of the glad season and hold on to those. Hold them close and welcome them when you confront trials. Use those special memories as a means to get through, as a way to bring light to the present and for the future. You will find yourself smiling, feeling more positive and recognizing that hope remains in your heart. Hope for all things good, hope for humanity, for your own sense of stability and strength. This is what gets you through, what lifts you when you feel like
you’ve fallen. 
        </p>
        <p>
        The holiday hustle and bustle. We miss it when it’s over. Now on to the new year, a new chapter. Let’s see what good it will bring. Always welcome change, it helps you grow and become braver and stronger. 
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from my
        childhood. I hope you enjoyed your reading. 
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

export default Hustle;
