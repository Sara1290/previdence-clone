import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const SocialRelationships = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Social Relationships" ?
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
        This is a challenge. A challenge to meaningfully connect with a significant social relationship. It’s to get you thinking about your support system and how you interact with family, friends, and co-workers. 
        </h5> 
        <p>
        Connecting with others can be rewarding and bring you a great deal of happiness and relief, as well as reducing stress. Sometimes first responders avoid connecting with others, but when they do, they find that confiding in someone they trust, someone who cares, the weight on their shoulders gets a little lighter. 
        </p>
        <p>
        When you think about social support, what comes to mind? What does that term mean to you? The social support we all seek (even subconsciously) is the physical and emotional comfort given by our partner, family, friends, co-workers, and others who are in our network of relationships. The goal behind social support is to build you up in times of stress so you have the strength and desire to carry on and thrive, not just survive.
        </p>
        <p>
        Your stress response is kicked into overdrive at work, so utilize those connections you have, they are some of your most effective stress management tools. If you think you don’t have connections, try reaching out to someone you trust or spend alone time with your partner talking about something that is stressing you out. You don’t need to talk about the worst call or disclose the gory details. Sometimes the greatest stressors are the day-to-day things, the interactions with other people. 
        </p>
        <p>
        You see a lot at work, you’re around a lot of people and at the end of the day you just want to be left alone to decompress. You don’t want to share your experiences with those who don’t have the same profession, so you filter the details, you hold it in, you don’t want to be a burden.  
        </p>
        <p>
        You know what, though? We, by nature, are social creatures. We thrive on releasing our tensions and letting it all out. The act of venting is what
reduces stress and brings about a sense of calm. It may not solve the problem, but at least you’ve lightened your load. The incredible thing about unloading is that you will be ready to help somebody else lighten their load. 

        </p>
        <p>
        So instead of leaning toward avoidance of social connections, challenge yourself to build a foundation of strong social connections that can profoundly affect not only your family and friendships, but your work life, as well. 
        </p>
        <ul className="blog-post-ul">
          <h5>We can’t have a Mental Health Minute without bringing up the inevitable…the brain. Three things I want to bring up: oxytocin, dopamine, and serotonin. Research confirms that social support and connectedness are good for both the receiver and giver of social support. Giving and receiving social support impacts our brain chemistry and neurological response (NIH):</h5>
            <li><b>Activation of our social care-giving system:</b> Oxytocin is released which is associated with empathy, connection and trust. Oxytocin is often referred to as bonding hormone. </li>
            <li><b>Activation of our reward system:</b> The released Dopamine increases our motivation while reducing our fear. When dopamine is released while we are doing something pleasurable, we feel more optimistic, and our brains are primed for physical action. We seek more of that feeling.</li>
            <li><b>Activation of our attunement system:</b> The released Serotonin enhances our perception, intuition and self-control. This helps us to understand what actions are needed to overcome the challenge. </li>
        </ul>
        <p>
        Finally, social support helps alleviate PTS (post traumatic stress) related to critical incident exposure and enhances wellbeing. Healthy relationships act as protective factors and help build resilience for first responders and help you bounce back from stressful situations. So, find your connection, your trusted friend, and share what’s on your mind. By doing this, you can become somebody else’s support system and a trusted shoulder to lean on.  
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with the help of EMS1 and National Institutes of Health.  
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

export default SocialRelationships;
