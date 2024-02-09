import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const SelfLove = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Self Love" ?
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
        Is loving yourself as simple as looking in the mirror each morning and speaking affirmations? Is it as easy as telling yourself  you are worthy, lovable, and all the good things others see in you? It could be. 
        </h5> 
        <p>
        February is a month of love, relationships, and devoting ourselves to that deep sense of acceptance and adoration…for others. It is a month to show others they are special, and they are loved. What about you? Are you special, are you loved, are you worthy of good things? Of course, you are, but how do you get to the level of self-love that nets a happy, healthy life? Your relationship with yourself is the most important one you will ever have. To truly love and understand others, you need to start with yourself.
        </p>
        <p>
        There’s a science behind this self-love thing…like everything else…and it begins in the prefrontal cortex (PFC), the part of the brain in the forehead, which makes up over 10% of the volume of your brain. The PFC plays a vital role in executive functions like decision-making and stress control. This part of the brain intelligently regulates our thoughts, actions and emotions as it interacts with other parts of the brain. It obviously goes a lot deeper than this, but for the sake of time and interest, this sums it up, and it relates directly to our emotions.
        </p>
        <p>
        Do you know that self-compassion activates the self-soothing system in the PFC? It actually stimulates feelings of safety, connection and security. The brain’s “threat-system” located in the amygdala, is associated with feeling insecure and defensive, can be deactivated by self-love and feelings of self-esteem. It’s profoundly important to show yourself some grace and acceptance, to know your worth and love who you are. As you develop self-love, you also create a space for self-respect.
        </p>
        <p>
        Maybe it’s corny to talk to yourself about your worth, but it really works in lifting your spirits and motivating you to genuinely accept that life is not the same without you, that you make a significant difference. The fact that you protect others, run to their aid, and do it all selflessly is indicative of your absolute worth and essential place here.
        </p>
        <ul className="blog-post-ul">
          <h5>To develop self-love and a healthy relationship with yourself, start here: </h5>
            <li>Stop comparing yourself to others</li>
            <li>Don’t fret over others’ opinions of you </li>
            <li>Give yourself some grace; it’s ok to make mistakes </li>
            <li>Remember, your value isn’t in the way your body/face looks </li>
            <li>It’s ok to walk away from toxic people </li>
            <li>Let yourself feel fear…The Gift of Fear by Gavin De Becker (good book</li>
            <li>Trust that you make good decisions </li>
            <li>Grab life’s opportunities and create some of your own </li>
            <li>Put yourself first; it’s ok to focus on your needs, too  </li>
            <li>Let yourself feel pain and joy without limiting your feelings; this helps you understand yourself and that you are not your feelings  </li>
            <li>Be bold! Express yourself, join the conversation and contribute.  </li>
            <li>See beauty and worth in the small things. </li>
            <li>Be grateful, humble, and have integrity </li>
            <li>Be kind to yourself. You hear the harsh words from your critics, don’t add yours to the mix. Celebrate you! You’ve worked hard and grown along the way. You’ve earned this! </li>
            <li>It’s ok to ask for help. You are strong, but you have needs, as well. Call, text, go visit a friend, lean on somebody you trust. </li>
        </ul>
        <p>
        The bottom line: self-love may not happen overnight, but it will with time, patience, persistence, and effort. You may struggle along the way but will look at these moments as steppingstones on your journey to being the best version of YOU. So, look in the mirror and speak clearly and boldly that you are wanted, needed, respected, loved, and worthy of good.  
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from NIH and the Brain & Behavior Research Foundation. I hope you enjoyed your reading.  
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

export default SelfLove;
