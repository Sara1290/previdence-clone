import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const SelfCare = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Self Care Isn't Selfish" ?
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
        Self-care is at the heart of preserving our whole health, whether scheduling that yearly dental/medical check-up, going to the gym, or taking time to mindfully create a space of safety and calm. However, practicing self-care isn’t as easy as it sounds. We say we are taking care of ourselves, but are we actually doing it? 
        </h5> 
        <p>
        Life is busy with family, work, community, and trying to stay afloat. That “me-time” we all covet is likely the last item on our agenda. What’s even worse is that we sometimes feel guilty about taking time out for “me” and really considering what “my” own needs are in the moment and in daily life.
        </p>
        <p>
        There is the myth that self-care is synonymous with selfishness or self-indulgence, but nothing is further from the truth. We feel selfish or needy or that spending time on ourselves is unnecessary. Why is that? Do we truly believe we don’t need or deserve self-compassion, or does society dictate that belief? 
        </p>
        <p>
        It is essential to take time for YOU. Take the long, hot bath listening to your favorite music or podcast; take a walk or a drive alone; go out to eat on your own; go shopping for you. Put your energy into your happiness, your needs, and how to create a few moments of complete attention to yourself. It does wonders for your focus, confidence and your energy and motivation. 
        </p>
        <p>
        You feel like you are taking care of yourself because you stay fit, eat right, sleep well, go to the doctor/dentist. But how about that other part of you? How about the part that keeps your mental state in check? It’s time to tune in to your needs and meet them. It’s time to nourish your whole self. Ask yourself how you’re feeling physically, mentally, emotionally. Are you dealing with the everyday stresses of life? Do you feel resilient and strong enough to jump the hurdles, take the next call? Engaging in self-care will help you put your best foot forward and sustain your mental health. 
        </p>
        <p>
        Self-care looks different for each of us, so compile a list of what you feel your routine should look like. Give this some thought, “One huge part of self-care is learning to stop self-sabotaging. Self-care is to hold ourselves accountable to the goals we set, to remember what we want most and not give it up for what we want now. But also, being patient with ourselves and not holding ourselves to unreasonable standards. It’s such a balance.” 
        </p>
        <ul className="blog-post-ul">
          <h5>To get you started, think about the things that make you smile and bring contentment…I mean true tranquility and joy. Here are a few ideas to get you started:  </h5>
            <li>Decide which activities make you happy, replenish your energy, and restore your balance. </li>
            <li>Choose a new, positive habit you’d like to incorporate into your routine. Practice this new habit every day. </li>
            <li>Reflect on how you genuinely feel. </li>
            <li>Get support from loved ones, peer support, a licensed professional, community, or your workplace.  </li>
            <li>Share your journey and experiences with others. You’ll inspire change. </li>
            <li>Give yourself some grace! </li>
        </ul>
        <ul className="blog-post-ul">
          <h5>Practicing self-care doesn’t need to be a heavy burden or done all at once. Here are a few ideas to ease you into your self-care journey     </h5>
            <li>Journal your experience in just a few words  </li>
            <li>Start each day with awareness of your breathing for five minutes and  setting intentions for the day.  </li>
            <li>Eat breakfast. </li>
            <li>Reflect on what you’re grateful for each night. </li>
            <li>When you are able, put your phone away a half hour before bed each night to be free of the flurry of notifications.  </li>
            <li>Call a friend just to say hello. </li>
            <li>Pick a bed-time and stick to it. </li>
        </ul>
        <p>As you traverse the journey to self-care, be sure to focus on you, on your needs, and what can help you maintain, or obtain, the most fulfilling life. Remember, the ball is in your court, you get to decide how to care for yourself. Make it great! Make your self-care so effective that, in turn, you are effective in your relationships, your work, and your complete health and well-being.  </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from Pen Medicine, Sara, and Cindee 
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

export default SelfCare;
