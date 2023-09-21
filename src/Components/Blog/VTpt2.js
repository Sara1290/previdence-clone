import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const VTpt2 = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Vicarious Trauma, Part 2" ?
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
        <h5>Traumatic events overwhelm an individual's ability to cope with the emotions, sensations, and other information connected with an experience. Trauma may involve a single brief event, an event that lasts for hours or days, a series of events, or a situation that is ongoing, such as domestic violence. </h5> 
        <p>
        Although traumatic experiences often involve a threat to life or safety, any situation that leaves you feeling overwhelmed and alone can be traumatic, even if it doesn’t involve physical harm. Traumatizing events can be directly experienced, witnessed, learned about from others, or seen/read in news reports. The more severe an event is and the longer it lasts the more likely it is to be traumatizing.
        </p>
        <p>
        The facts of a distressing event don’t determine whether it is traumatic, rather, it is how a person experiences it emotionally. What is traumatic for you might not be for someone else. People’s responses to trauma vary considerably and are influenced by multiple factors, but most influential are how frightened, helpless, and alone the individual feels. However, anybody can be traumatized.
        </p>
        <p>Traumatic experiences change the brain and alter certain physiological / bodily responses. Experiencing trauma changes a person’s life and how they perceive the world, interfering with the ability to trust and feel safe. It can be strongly and clearly felt, in more subtle ways, such as feeling numb, a vague sense of discomfort, or that something is “off”. It changes how information and emotions are processed and can cause lasting harm to a person’s emotional and social development by dramatically altering their beliefs about safety—both physical and emotional. Behavior, outlook on the future, attitude and beliefs about people are all impacted by the experience of trauma. There is no “right” or “wrong” way to think or feel in response to trauma. </p>
        <p>
        Following a traumatic event, most people experience a wide range of physical and emotional reactions. It's important to know that developing trauma symptoms is never a sign of weakness. These are normal reactions to abnormal events.
        </p>
        <ul>
          <h5>The physical symptoms of trauma include:</h5>
          <li>Being startled easily</li>
          <li>Hyper-vigilance (contantly being on gaurd)</li>
          <li>Racing heartbeat</li>
          <li>Aches and pains</li>
          <li>Fatigue</li>
          <li>Difficulty concentrating</li>
          <li>Edginess and agitation</li>
          <li>Muscle tension</li>
          <li>Insomnia or nightmares</li>
          <h5>The emotional and psychological symptoms of trauma include:</h5>
          <li>Shock, denial or disbelief</li>
          <li>Feeling generally unsafe</li>
          <li>Anger and irritability</li>
          <li>Mood swings</li>
          <li>Guilt, shame, and self blame</li>
          <li>Sadness, depression, feelings of hopelessness</li>
          <li>Distressing memories or thoughts about the event(s)</li>
          <li>Confusion, difficulty concentrating</li>
          <li>Difficulty trusting</li>
          <li>Anxiety and fear</li>
          <li>Withdrawing from others</li>
          <li>Feeling disconnected, detached, or numb</li>
        </ul>
        <p>
        These symptoms typically last from a few weeks to a few months, and gradually subside. However, the effects of trauma can remain with survivors for much longer—often years, or a lifetime. Even when feeling better or “back to normal,” from time to time these symptoms can re-occur. Triggers such as an anniversary of the event, images, sounds, or smells, can be a reminder of the traumatic experience.
        </p>
        <p>
        Like people who have lost a loved one or gone through a divorce, trauma survivors go through a grieving process. Grieving is a natural and normal reaction following trauma. Whether or not a traumatic event involves permanent injury or death, coping with the loss of a sense of safety and security is imminent—at least temporarily. It does not have to be a life sentence.
        </p>
        <p>
        As you are well aware, secondary/vicarious trauma is real, it is pervasive, and it requires attention and, often, professional help. Reach out when you are in need, attend to your well-being and live to function at full capacity.
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you, with contributions from National Institutes of Health and American Psychological Association.
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

export default VTpt2;
