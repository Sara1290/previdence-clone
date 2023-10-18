import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Hope = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Hope" ?
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
        <h5>“I hope we get a snow day!” or “I hope we go to Lagoon this weekend.” Aw, the thoughts of our youth? As we got older, “I hope I get an A on my test” or “I hope s/he asks me to the dance.” Those simple, innocent HOPEs we had before we turned into responsible adults.</h5> 
        <p>
        Now, we have hopes of a much different caliber, “I hope I have enough money to get me through to the next payday,” or “I hope the next call we respond to is just a simple _____” (fill in the word you just said in your mind).
        </p>
        <p>
        Trauma is heavy, but it’s real and it’s pervasive, and we need to talk about it. We also need to talk about HOPE. What is HOPE? How do you define it? 
        </p>
        <p>
        HOPE, according to Oxford and Merriam-Webster, “a feeling of expectation and desire for a certain thing to happen; a feeling of trust; to expect with confidence.” HOPE is a genuine sense of faith that life, along with its messy trials, truly is good…it feels good to be alive. HOPE is knowing things will get better.
        </p>
        <p>
        When there is little or lost HOPE, it is important to consider how to manage life’s trials and the trauma you face on the job. Use your support network, social and/or family; they are vital components of coping skills and contribute to becoming more resilient and mentally fit. Nurturing your mind is just as important as nurturing your body and helps create resilience. Reaching out to a therapist is also essential in maintaining optimum mental health. Most of us see a physician to maintain our health, but few take time to seek a therapist to keep our minds in top performance. Why is that? 
        </p>
        <p>
        I’m sure most visualize therapy as lying on a couch, a therapist with notepad in hand, reliving the worst days. Therapy has changed dramatically over the years with new, profoundly effective methods of treating trauma. ART (Accelerated Resolution Therapy) and EMDR ( Eye Movement Desensitization Reprocessing) are two approaches proven to help alleviate symptoms of PTSD, anxiety, depression, and other mental health issues. These modalities don’t merely mask the symptoms, they treat the cause. 
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

export default Hope;
