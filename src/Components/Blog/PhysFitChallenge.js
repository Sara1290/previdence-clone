import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const PhysFitChallenge = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "A Physical Fitness Challenge" ?
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
      <ul className="blog-post-ul">
          <h5> Have you experienced any of the following? </h5>
            <li>Difficulty balancing work and home </li>
            <li>Hyper-vigilance </li>
            <li>Lack of motivation </li>
            <li>Apathy </li>
            <li>Difficulty going to sleep or staying asleep </li>
            <li>Self-doubt </li>
            <li>Pressure to perform </li>
            <li>Intrusive memories or stress from difficult calls </li>
            <li>Increased substance use </li>
            <li>Overwhelmed </li>
            <li>Irritability </li>
            <li>Depression </li>
            <li>Anxiety </li>
        </ul> 
        <p>
          These are a few obstacles to a happy and healthy life that physical fitness can help curb. If you already have a fitness routine, toss it up a bit, make it more exciting and challenging. If you don’t have a routine, try incorporating some new movements and habits that will improve your quality of life.  
        </p>
        <p>
        Sometimes a little competition makes things more fun. A good challenge helps people get up and get moving, even if only to prove they are capable of getting it done. Pretty soon it’s a way of life, not just a friendly competition. It doesn’t have to be as aggressive as 100-mile bike ride or 50-mile run. Make it fun, but challenging, something everybody can participate in without too much difficulty. 
        </p>
        <p>
        In the Mental Health Minute the first week of March we talked about how incorporating exercise brings changes to the brain. These changes act like incentives for becoming fit and healthy, making the process less daunting, more positive, and possibly life changing. 
        </p>
        <p>
        As each person engages in a fitness challenge and meets their own goals, they build autonomy and start choosing healthy habits over the unhealthy ones. Do this as a department or office and start something positive! Now everybody is in on the fun and developing new lifestyle changes.  
        </p>
        <p>
        Here are a few ideas to get the challenge going and keep it active:
        </p>
        <p>
        <b>1. Set a goal</b><br></br>
Start with simple goals and then progress to longer-range goals. Remember to make your goals realistic and achievable. It's easy to get frustrated and give up if your goals are too ambitious. 
For example, if you haven't exercised in a while, a short-term goal might be to walk 10 minutes a day five days a week. An intermediate goal might be to walk 30 minutes five days a week. A long-term goal might be to complete a 5K walk/run.  
Most healthy adults need at least 150 minutes (about 2.5 hours) of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity. Greater amounts of exercise will provide even greater benefits. As a first responder, it’s a good idea to incorporate strength training exercises of all the major muscle groups into your fitness routine at least two times a week. 
        </p>
        <p>
        <b>2. Write it down</b><br></br>
Are you hoping to lose weight? Boost your energy? Sleep better? Finish a 5K? After you set that goal, write it down. Seeing the benefits of regular exercise and writing your goals down on paper may help you stay motivated. You may also find that it helps to keep an exercise journal or use an app to track workouts and progress. You might just want to start by marking the days that you worked out on a calendar. Seeing all of the marked days will give you a sense of accomplishment and motivate you to
do more. Recording your efforts and tracking your progress can help you work toward your goals and remind you that you're making progress. 

        </p>
        <p>
        <b>3. Follow a plan  </b><br></br>
Now, you need a plan of action to follow to accomplish your new goal. This is one of the biggest reasons people lose motivation and do not see results, they do not follow a plan. If you fail to plan, you plan to fail. A consistent and functional fitness plan will help you accomplish almost any goal and stay on track. First responders especially need to be ready for any situation, a well-planned fitness program is essential. Make sure you plan your workouts and focus on improving mobility along with strength and cardiovascular capacity and then focus on looking better in your uniform. 
Scheduling your plan around your shifts and time with your family can be challenging, plan to work out on shift if you can, for better work-life balance. 
        </p>
        <p>
        <b>4. Join forces with co-workers, friends, family members </b><br></br>
You're not in this alone in this! Invite friends, family, and members of your
department and crew to join you when you exercise. Working out with your crew and family can be very motivating and a great bonding experience. If you are the type of person that likes to work out alone, you may try to challenge your friends and crew to a fitness challenge or encourage them to do an event with you. Work out with your partner or other loved ones, encourage your children to join you. Working out with or around your children sets a good example and can be fun. 
        </p>
        <p>
        <b>5. Find a cause or event to train for </b><br></br>
Everyone experiences ebbs and flows with training and level of fitness. The times we seem to train the hardest are in the build-up to some sort of event – often a holiday, a wedding, a reunion, or a fitness race/run. Choosing an event with a timeline and following a training plan makes the exercise more interesting.
Training for a special event gives you a preset goal to focus on for each
workout, and throughout the weeks of your training program. When you sign up for an event like a 5K or bicycle race, you keep yourself accountable by preparing to participate. Knowing there is a culminating event in the near future means you can give yourself checkpoints along the way, which will help you stay on track with your goals. Imagine your sense of satisfaction when it’s all over and you’ve accomplished something great! 

        </p>
        <p>
        <b>6. Stay positive!</b><br></br>
 If you  find yourself going down the "negative" tunnel. Stop and focus on some positives. Sometimes you must dig to find them, but it will help change your entire outlook. Try to engage in healthy self-talk. If you think you dread exercising, have a little chat with yourself, but do so as if you’re speaking to someone else. This is more effective than just speaking in the first person. You are your biggest competition. It is easy to start looking at what everyone else is doing, their progress, etc. Do not get into that habit. Create YOUR OWN goals and work on improving yourself every day. 

        </p>
        <p>
        <b>7. Count your zzzz’s!  </b><br></br>
This is a very important part of your fitness challenge. Without plenty of sleep, your body stays in a state of deprivation, eventually being susceptible to diabetes, cardiovascular disease, obesity, and depression. In addition, sleep deprived first responders may not perform well and will not be as alert as those who are well-rested. Tired first responders can pose a safety risk. Consider taking naps before shifts or going to bed earlier to get as much sleep as possible.  
        </p>
        <p>
        One of my kids’ coaches has a saying, “You don’t get stronger lifting sticks.” That has stuck with me for years. If you do the same thing over and over, never challenging yourself to get out of your comfort zone, you will never see results, you will remain stagnant. What do you think he meant by this simple statement?
        </p>
        <p>
        Fitness challenges have resounding effects, and not just on physical health, but on mental health. People feel connected and supported by their co-workers, and that in itself is a huge win. Here’s to a good challenge!  
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
        This Mental Health Minute is created for you with contributions from National Volunteer Fire Council (NVFC) and National Institute of Health (NIH). I hope you enjoyed your reading
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

export default PhysFitChallenge;
