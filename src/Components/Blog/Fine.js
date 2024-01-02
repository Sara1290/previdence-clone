import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const Fine = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Goodbye to the old, hello to the new." ?
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
        Yep, that’s what I feel like. Flat out on the road with less energy than my shoe. I’m tired and left feeling like I have no more to give, no motivation to move forward. My well is dry, and I have no reason to celebrate 2023. Why would I want to celebrate a year that was filled with trials and struggles, tears and emotions that are boiling over the top? An inevitable explosion! And the new year? Really? I’m supposed to be happy about a “new chapter” and start talking about resolutions and goals for how I want to do and be better? Get real! I didn’t even finish out this year’s goals. 
        </h5> 
        <p>
        I’ve done this for decades, but the last few years have proven to be too much to endure. I thought life got easier with age, that we somehow become more proficient at dealing with the BS. But no, that’s a fallacy. Life doesn’t get easier, it becomes more challenging. And those challenges? Why didn’t somebody tell me, let me know that life’s jokes are nothing to laugh at?
        </p>
        <p>
        Did you feel that? Did you feel the emotions, the sense of wanting to give up and lose hope, because life isn't always fair? You probably did, but I hope you read that with a sense of humor, maybe a laugh. I feel good about life and my worth, but I gotta admit, there are “those” days. However, like you, hope and resilience keep us going, forging new paths, because we have a passion to live. We love what we do and who we get to spend life with, but for people who struggle to feel their worth and find hope, I speak profound words, “hang on, keep going, call and talk, you are worth living.”  
        </p>
        <p>
        We extend our hand and best wishes for a year filled with hope, peace, happiness, success, growth, and for you to feel healthy and complete. On the days you’re lying on the pavement with no desire to get up, GET UP! Be inspired by something you find hopeful and motivating. Take care of yourself physically, mentally, and spiritually.
        </p>
        <p>
        What was your 2023 like? Will you celebrate it with joy and pride, or kick it to the curb with a sigh of relief that it’s over? The end of a year brings such hope for the new, the eagerness of writing a new chapter and moving forward with determination and vigor. Life rejuvenated!
        </p>
        <p>
        In 2024 be ready for Mental Health Minutes that will inspire you, give you hope, and educate about why mental health is just as vital to your well-being as your physical health. We welcome your feedback, your questions, and your suggestions.
        </p>
        <p>
        Cheers to you! 
        </p>
        This Mental Health Minute has been created for you. I hope you enjoyed your reading.  
        <p style={{fontStyle: "italic"}}>

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
      <MemberCareFooter />
    </div>
  )
  
}

export default Fine;
