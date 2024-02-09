import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const HealthyRelationships = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Healthy Relationships" ?
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
        Why can’t we all just get along? Is it really so hard? With an open-minded attitude, it’s not impossible. And maybe a bit of child-like forgiveness. 
        </h5> 
        <p>
        We talk to young people about healthy relationships and what they look like. We tell them one is built on attributes of respect, integrity, trust, equality, communication, compromise, friendship, affection, boundaries, acceptance, support, and love. They run on a continuum of these traits, as well as mutual gratitude and service to one another. 
        </p>
        <p>
        You may be thinking about your own relationships and what they look and feel like. This Mental Health Minute focuses on the relationship with your spouse/partner because it has profound effects on all aspects of life. 
        </p>
        <p>
        A research study I participated in, compiled responses from 300 couples ranging from newly married to 30+ years of marriage. From those lasting well into the decades, we found that love was last on their list of required needs and wants. They stated that friendship was the foundation of their strength and longevity. Love is necessary but develops over time with the aforementioned traits. 
        </p>
        <p>
        A successful relationship develops with effort and desire from both people. If it sounds like a lot of work, you’re right, it is, but when two people give selflessly and with a positive attitude, they create a bond that is undoubtedly unbreakable. From a couple married for over 65 years, “You have to love the way children do, with everything you got, all your heart, with forgiveness, laughter, and no grudges, and knowing you are loved in return.” 
        </p>
        <p>
        We found that these enduring partnerships also possessed humor. Both parties were able to not only laugh at themselves, but at their partner, as well. Not in a mocking or degrading manner, but in a lighthearted way that created an atmosphere of acceptance and love. Humor helps alleviate tension created by conflict or a misunderstanding.
        </p>
        <p>
        Boundaries also play a role in relationships that weather the storms. Physical, emotional, sexual, intellectual, and financial boundaries are necessary and set the stage for respect, self-awareness, and independence. Boundaries help people feel respected, valued, and safe.  
        </p>
        <p>
        A healthy relationship is a conscious effort to put the other person’s interests, needs, and safety first. BUT…it is also recognizing your own needs, interests, and safety, because if you are not taking care of yours, then how can you take care of somebody else’s? 
        </p>
        <ul className="blog-post-ul">
          <h5>Consider the following principles of a healthy relationship. </h5>
            <li>Be a “safe” listener – this involves your body language as much as your verbal and facial expressions. Remove distractions, put the phone away, turn off the TV, put the kids in bed  </li>
            <li>Listen to yourself – what is your tone? What words do you use? How do you act when speaking?</li>
            <li>Listen with empathy – pay attention to what your partner is saying, not just their words, their body language. Use what you know about your partner, put yourself in their shoes. What is s/he feeling that is not being said? What are their concerns?</li>
            <li>Listen with intent – don’t listen to reply. We do this often, and not just in our close relationships, but at work, with friends, strangers. We have a lot to say, but more importantly, we have a lot to learn. So just listen! </li>
            <li>Give appreciation as often as possible – tell your partner what they are doing right, compliment them, let them know your appreciation. It takes 5-23 positive statements to counteract just one negative comment or criticism. Let the positive words flow. </li>
            <li>Even the strongest relationships have trials, but with the attributes mentioned, there is an unspoken understanding of personal responsibility and accountability, thus, helping to overcome struggles. </li>
        </ul>
        <p>
        A healthy relationship just feels different, it feels good to be around, it is contagious, and leaves people with a sense of human goodness. This sense fills their soul with hope that they, too, can have a strong, healthy relationship that endures the challenges of life and time. 
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from Humanity’s Team and Mental Health Foundation.   
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

export default HealthyRelationships;
