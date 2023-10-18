import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const SupportForFamilies = () => {
  ReactGA.pageview('src/Components/Blog/SupportForFamilies.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Support for Families" ?
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
        This Mental Health Minute addresses families and those close to first responders. The message is necessary in order to help families recognize their own health, both physical and mental. Please share this information with those who are in your circle of relationships. 
        </h5> 
        <p>
        This Mental Health Minute addresses families and those close to first responders. The message is necessary in order to help families recognize their own health, both physical and mental. Please share this information with those who are in your circle of relationships. 
        </p>
        <p>
        You realize there are risks your loved one faces each day as they put on the uniform, and you worry about the effects on their health and safety. But what about the toll it takes on their mental health, and what about your own mental health? There is a ripple effect that reverberates throughout the entire home. You may feel overwhelmed and wonder how to support your loved one, how to talk to them, and how to provide for their needs without putting your, and your family’s, on the back burner.
        </p>
        <p>
        In order to provide support to your loved one, your needs must be met. Caring for yourself is important so you can keep your family happy and healthy. Social support can help you manage the stress and worry with others but that can be hard to find, especially if your friends and extended family members don’t understand the unique experiences you face due to your loved one’s job.
        </p>
        <p>
        As you traverse the world of first responder life, understand the frustrations are real and can be overwhelming. Make sure to remember your own needs. Take care of yourself the way you take care of others.
        </p>
        <p>
        </p>
        <ul className="blog-post-ul">
          <h5>The following resources for families are not links, but can be Googled for excellent information:</h5>
            <li>Hope for Emergency Responders Organization (HOPE)- offers a warmline, peer support and other resources for first responders, their families and their friends.</li>
            <li>Firestrong - a 24/7 firefighter and family crisis and support line.</li>
            <li>International Association of Chiefs of Police offers resources for law enforcement families including resilience strategies for families and children.</li>
            <li>What to Expect: A Guide for Family Members of Volunteer Firefighters - a digital resource developed by The National Volunteer Fire Council and Firefighter Wife.</li>
            <li>How2LoveOurCops - offers resources for law enforcement families.</li>
            <li>Police Wives of America - offers a listing of police wives’ groups by state as well as information to help start a new group, blog posts and other helpful resources for law enforcement families.</li>
            <li>FirefighterWife - provides information and resources to honor, strengthen, support and encourage fire service marriages and families.</li>
            <li>Help Starts at Home: Fire Service Families and Behavioral Health – webinars from the IAFF Center of Excellence for Behavioral Health Treatment and Recovery for fire service families</li>
            <li>Fire Family Dynamics: Promoting Healthy Home Lives - webinars from the IAFF Center of Excellence for Behavioral Health Treatment and Recovery for fire service families</li>
            <li>Code4Couples - offers advice and resources for law enforcement spouses including a downloadable skills guide and podcast series.</li>
            <li>All Clear Foundation - provides a comprehensive resource database dedicated to improving the life expectancy and well-being of emergency responders and their families.</li>
            <li>Bulletproof - links you to confidential and anonymous mental health and wellness resources for law enforcement professionals and their families.</li>
        </ul>

        <ul className="blog-post-ul">
          <h5>For helpful advice related to marriage, parenting, communication or supporting your first responder’s physical and mental health, check out these resources:</h5>
            <li>The Partner at Home: Maintaining a Strong First Responder Marriage, Relationship</li>
            <li>Signs Your First Responder Needs Help and How to Get It</li>
            <li>5 Tips for First Responder Spouses to Help Their Loved One</li>
            <li>When Work Comes Home: Help for Responders and Their Family</li>
            <li>What to Say to Your Firefighter When He's Had a Bad Call</li>
            <li>Parenting While Policing</li>
            <li>Tough Talk: How to Talk to Kids About Close Calls</li>
            <li>Tough Talk: How to Talk to Kids About Tragedy and Line-of-Duty-Death</li>
            <li>Officer Family Wellness Podcast Series</li>
        </ul>
        <p style={{fontStyle: "italic"}}>This Mental Health Minute has been created for you with contributions from NAMI and National Institute of Health (NIH).</p>
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

export default SupportForFamilies;
