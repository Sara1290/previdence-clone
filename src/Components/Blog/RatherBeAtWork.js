import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const RatherBeAtWork = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "You'd Rather Be At Work" ?
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
        The focus this month has been relationships and how to keep them healthy. Sustaining relationships can be a challenge, it takes complete commitment from both parties. On familial, friend, and work levels our relationships present diverse challenges, but somehow seem easier to maintain. We ask ourselves why, why is our most important asset the most difficult to sustain?
        </h5> 
        <p style={{fontStyle: "italic"}}>
        “When it feels easier to be at work than at home. When we go home, there is no structure, rules or chain of command. Home starts to feel unhinged, untethered, unsafe, and we want out.”
        </p>
        <p>
        It’s a harsh statement, unfair even, but true for many, and in this week’s MHM, taken from American Police Beat, we begin to understand the process of maintaining a healthy distance between work and home.
        </p>
        <p>
        Most first responders will experience a period of time during their career when life outside of work seems hard. This is normal. This is OK — until it’s not. If you find that you are in this boat, and you want to be on a different boat, there is value in understanding why you might feel this way and what to do about it.
        </p>
        <p>
        You rely on chain of command, protocols, procedures and training to get through your shift. Not only does this structure keep first responders alive and out of unnecessary precarious legal situations, it is by design and serves you when shit hits the fan, when your emotional brain tries to override your logical brain and when you need to proceed with the mission under the most dire of circumstances. 
        </p>
        <p>
        Our brain likes structure, consistency and dependability. We tend to feel a sense of safety when we know what we are doing, who has our back, what comes next and what might come after that. Not only does our brain like dependability, but because of neuroplasticity (the brain’s capacity to continue growing and evolving in response to life experiences), our brain structure changes to accommodate these experiences we have. Structure, discipline and chain of command equal safety. 
        </p>
        <p>
          <b>What to do about it:</b>
        </p>
        <p>
        You can’t run your household like a paramilitary organization (unless you live alone, in which case more power to you). So, trying to have your home life bend to the ways of your work life isn’t entirely reasonable. That said, implementing some structure and talking with people who live with you about what you need is not only reasonable but may help you feel safe. Perhaps on your days off you start every morning with a workout and a cup of coffee. Or before you go to bed at night you work in the garage for 30 minutes. The hope is that you can do these activities at the same time every day to the extent that it’s feasible and get your family on board. This way, no matter what else happens during your days off, you have some sort of anchor. Have the conversation with your spouse ahead of time about what might be helpful so that there are no surprises or last-minute honey-dos during your 30-minute garage time. Your brain will thank you for it.
        </p>
        <p>
        <b>Trauma bothers us when it gets quiet</b>
        </p>
        <p>
        Have you ever walked through the door after a good day at work and as soon as you lay your head down, try to take a shower, attempt to do laundry or just sit in silence, you start feeling anxious? Or you start thinking about that call that bothered you, whether it happened that day or years prior? 
        </p>
        <p>
        These recollections and sensations don’t usually come at you when you’re at work. When you are working, you must be laser-focused on the task. Whether you are picking up the 9-1-1 calls or responding to them, your job is to be present, be aware and solve the problem. You cannot do any of those things if you are hijacked by your memories or emotions. It’s ritual and habitual for you to be able to put all those distractions aside so you can do your job. You become so good at it, in fact, that you hardly even notice you’ve tuned the rest of the world out to focus on the task in front of you, and then the next one and the next one — until you get home, when the task isn’t as demanding (sure, you’re focused on making lunches for school the next day, but not as focused as you are when responding to a call). Your mind has space and time to wander. So, naturally, what it does is start to process shit you dealt with throughout the day. This is why as soon as you start to “relax,” your brain tells you, “Nope, not now, bro, we have trauma to process.”
        </p>
        <p>
        What to do about it: First, recognize that it’s normal. It’s normal that the emotions come up at what may seem like weird times. I remember, after doing a critical incident debrief that involved two dead children who were similar ages to my own children, it wasn’t until I heard the first Christmas song on the radio months later that I felt my feelings related to that incident. What I wanted to do was jump on a “really important phone call,” something to distract myself from my drive and my thoughts. What I did, instead, was acknowledge I felt like crap, breathe it out doing four-count breathing and let the feelings go. 
        </p>
        <p>
        You’ll find over time that trying to avoid emotions is like running on the treadmill while eating Twinkies: pointless. Over time, unprocessed emotions turn into things like anxiety, depression and anger that we can’t put our finger on and eventually lose control over … so might as well work the OT, right? Wrong. OT shouldn’t be the answer to your unprocessed “stuff.” Processing it is. It doesn’t necessarily mean you have to go to therapy and talk about it — some people surf, some do woodwork, some let the tears come and go while they’re driving, others find peace in therapy. The key is acknowledging it, letting it be there and then letting it go in a way that works for you.
        </p>
        <p>
        If you feel more comfortable at work than at home, take some time to reconsider your priorities. Set aside time with your partner that focuses solely on the two of you. Get to know one another again, laugh, be silly, cry, talk, talk, talk. It starts with you, with your desire and willingness to make some profound changes in your relationship. Once you set the precedence, home will be your refuge and work will be just that…work, a place you go for your shift. You will look forward to going home at the end of the day/night.
        </p>
        <p>
        Previdence has many resources for you on our website, as well as people you can talk to. Please reach out if you, a co-worker, or loved one is in need of assistance.
        </p>
        <p>
        Give us a call to chat or find a vetted therapist at <a href="tel:+1-385-298-8152">385-298-8152</a>, or email at Bobbi.mcgraw@previdence.com
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute is created for you with contributions from American Police Beat and NIH. I hope you enjoyed your reading.
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

export default RatherBeAtWork;
