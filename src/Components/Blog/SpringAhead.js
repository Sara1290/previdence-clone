import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const SpringAhead = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Spring Ahead" ?
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
        Good morning, merry sunshine! That’s all it took…well, and a hug…to set my teen daughter into a spiral of emotions, “Mom, you know I am not a morning person, AND I don’t like to be touched” Ok, well, I did not know that because when you were just a sweet little thing (yesterday, even), you ran to me first thing in the morning, gave me a hug, and said, “I love you, you’re the best mom”. Who is this standing in front of me? Give me back my daughter. 
        </h5> 
        <p>
        Later that day it hit me; we had sprung forward and had lost an hour of sleep. I blew this off thinking she needed to get some spine and deal with this new time thing, AND she needed a hug. Ok, maybe not a hug, I would not provoke that temper, (poke the bear, bison, badger, whichever is meanest) so I left the beast alone. Werewolf and full moon come to mind for this ball of sunshine during that first week of time change, so I would crack the door of her lair and tell her I love her from a safe distance. But all joking aside (she jokes about, too) it’s real for her, just as it is for many.
        </p>
        <p>
          <b>What impact does the time change have on you?</b>
        </p>
        <p>
        How can just one hour of time change in the spring disrupt your body, sleep, and mental health? On March 10, most Americans will observe the start of daylight saving time (DST) and "spring forward" by setting their clocks one hour ahead. (The exceptions are people living in Arizona and Hawaii.) DST lasts from mid-March until early November when the clocks turn back an hour and return to standard time. During DST, people can enjoy more time in the sunlight in the evenings, but that convenience comes at a price.
        </p>
        <p>
        "That one-hour change may not seem like much, but it can wreak havoc on people's mental and physical well-being in the short term," says Dr. Charles Czeisler, professor of sleep medicine at Harvard Medical School's Division of Sleep Medicine (Harvard Health).
        </p>
        <p>
        How does the time change affect you? Do you feel groggy, edgy, angry, like the monster who resembled my daughter in my kitchen? If you do, you’re normal. Feeling the effects of DST is typical. 
        </p>
        <p>
        Though DST does not cause depression, anxiety, or other mental health conditions, it can exacerbate pre-existing conditions and it is NOT a joke. These emotions are real and affect people for some period of time. However, it’s likely that you’ll bounce back after a few days. 
        </p>
        <p>
          <b>Go toward the light</b>
        </p>
        <p>
        Research suggests that changing our clocks twice a year can have various health consequences. Of the two, springing ahead one hour tends to be more disruptive. That hour change can upset our circadian rhythms, the body's natural 24-hour cycles regulating key functions like appetite, mood, and sleep.
        </p>
        <p>
        Circadian rhythms largely depend on light exposure. The hour transition in the spring initially causes darker mornings and lighter evenings. Less morning light can decrease levels of the mood-boosting hormone serotonin. In contrast, exposure to light later in the evening can delay the production of melatonin, the hormone that helps you fall asleep. “Disrupted sleep can cause people to feel fatigued, groggy, and less focused," says Dr. Czeisler (Harvard Health).
        </p>
        <p>
        Many people also have trouble adjusting their sleep schedule to the new time. For the first few days or even a week, they may go to bed later or wake up earlier than usual, which can cause sleep deprivation. One study found that the average person gets 40 minutes less sleep on the Monday after DST begins compared with other nights of the year.
        </p>
        <p>
          <b>Prepare for the switch</b>
        </p>
        <p>
        <b>Alter your bedtime.</b> About three days before the time change, go to bed and wake up 10 to 15 minutes earlier than usual. The next night, aim for 20 to 30 minutes, and then 30 to 45 minutes on the third night. "By the end of this period, your body would have adjusted to that lost hour, and you won't have the stress of trying to quickly catch up on sleep," says Dr. Czeisler.
        </p>
        <p>
        <b>Take afternoon naps.</b> If you feel tired in the afternoons after DST starts, take scheduled midday naps for 20 to 30 minutes (napping longer than that can make you feel even more groggy).
        </p>
        <p>
        <b>Get more light. </b> During the first week after the time change, try to get about 15 minutes of exposure to morning light, which can help maintain your circadian rhythms. Another option is to use a light box that produces a bright white light. Choose a light box with 10,000 lux exposure (lux is a measure of light intensity). Sit about 12 inches away for up to 30 minutes. Keep your eyes open, but don't look directly at the light. Spend the time reading, writing, or just being present.
        </p>
        <p>
        <b>Delay your day.</b> If possible, for several days after the time change, postpone beginning your daily routine for 10-15 minutes. "Your internal clock is still running an hour behind, so you give it a chance to adjust," says Dr. Czeisler. Gradually shorten your start time by 10 or 15 minutes; within a week, your body's clock should be reset to the new time.
        </p>
        <p>
        <b>Curb the alcohol and caffeine.</b> Cut back on drinking alcohol and caffeinated beverages several days before and after the time change, as they can disrupt your sleep.
        </p>
        <p>
        These are just a few steps to help adjust to the time change and make your life a bit easier. It’s not a guarantee the change will have a negative impact on your mental or physical health but be prepared and take care of yourself. 
        </p>
        <p>
          <b>Resources and Support</b>
        </p>
        <p>
        <p>
        Give us a call to chat or find a vetted therapist at <a href="tel:+1-385-298-8152">385-298-8152</a>, or email at Bobbi.mcgraw@previdence.com
        </p>
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute is created for you with contributions from Harvard Health. I hope you enjoyed your reading.
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

export default SpringAhead;
