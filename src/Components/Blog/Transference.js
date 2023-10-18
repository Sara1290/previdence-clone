import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Transference = () => {
  ReactGA.pageview('src/Components/Blog/Transference.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Transference" ?
    <div className="blog-post-container">
    <div className="blog-post-inner">
      <h1>{blogdata.title}</h1>
      <div className="blog-line"></div>
      <br></br>
      <p>{blogdata.description} </p>
        <div className="blog-post-attributes">
          <p>{blogdata.author}</p>
          <p>{blogdata.date}</p>
        </div>
      <img src={blogdata.img} alt="tired person" className="blog-post-img" />
      <div className="blog-content">
        <h5>Do you ever instantly experience a memory just from sights, sounds, smells, or emotions?  Think of it this way, the good feelings flooding back when you smell freshly baked bread reminding you of your childhood home or a song that takes you back to that high school dance.…you feel warm, happy. </h5> 
          <p>
          Sometimes, though, the experiences are not so good. Maybe they happened in adulthood, on the job, or at home, or on personal time. Maybe those events created trauma because of what you personally experienced or were witness to. You still have the same reactions as if you were back in that place, that time. You are triggered by the smells, sounds, sights, feelings, and emotions that can be intense and vivid. What is this thing you are facing?  
          </p>
          <p>
          Transference!  A return of old feelings you had in a specific moment that linger in your subconscious. Transference has its roots in trauma, commonly in childhood, but also from secondary trauma. It reflects what you experienced due to a disturbing situation and can result in a distorted perception of another person, place, or event. It is fear of the same event, or one similar, happening over and over again. Additionally, transference is a symptom of anxiety.
          </p>
          <p>
          As a first responder, you regularly experience devastating scenarios. The fear you have that others may be in a similar danger is real, because your brain is accustomed to the “rescue.” This is not a life sentence
          </p>
        <ul className="blog-post-ul">
          <h5>Here are some ideas to alleviate the stress. </h5>
          <li>Be aware of your surroudings</li>
          <li>Listen to music you love</li>
          <li>Think of things that make you happy</li>
          <li>Decompress with a walk, a pet</li>
          <li>Exercise consistently</li>
          <li>Do something you love</li>
          <li>Get back into an old hobby</li>
          <li>Talk to Peer Support</li>
          <li>Consider seeing a therapist</li>
          <li>Read more at Healthline</li>
        </ul>
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

export default Transference;
