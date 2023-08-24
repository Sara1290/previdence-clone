import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Microbiome = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Microbiome" ?
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
        <h5>Sleep is an elusive, mysterious activity, it’s also an essential biological function. Sleep quite literally consolidates memories, resets the immune system, restores hormonal balance, or clears metabolic waste and neurotoxins. One thing we know for sure is that sleep is vital to every living creature…but you already know that.</h5> 
        <p>
        Sleep isn’t often thought to treat mental health conditions, whether they are chronic or occasional. Yet studies show that if a person exhibits both insomnia and anxiety or insomnia and depression, and just the insomnia is treated, the anxiety and the depression get better. Sleep is an essential biological function, and with proper treatment, a potentially adjustable way to address mental health conditions and reduce suicidal behavior.
        </p>
        <p>
        Ya know the gut microbiome we mentioned last time? Sounds disgusting, but what’s in your gut has a lot to do with your overall health and sleep. It is composed of viruses, bacteria and fungi. When it is unhealthy, your chances for irritable bowel syndrome, dermatitis and neurological imbalance increase…that’s the small list<br></br>
        Stay tuned for further discussion about your gut health and sleep. We’re talkin’  about good foods for a healthy microbiome next time. I know you can’t wait.
        </p>
        <p>Get your boots on, we’re takin’ a walk through transference next week! </p>
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

export default Microbiome;
