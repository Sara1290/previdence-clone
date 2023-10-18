import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const CostofCaring = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "The Cost of Caring" ?
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
        From law enforcement to fire fighters to dispatch to health care providers, first responders are called on every day to come to the aid of others and sustain our health and safety. As the men and women with these difficult jobs, you are often met with horrific experiences. However, there are the rewarding aspects to your profession, the parts that help solidify your passion. 
        </h5> 
        <p>
        Though you are trained to handle the difficult calls, you are still capable of feeling some trepidation and fear when responding. Some calls are hard to forget, they stay with you. You may feel anger, sadness, and discouragement. These emotions can make it difficult to respond with empathy, which is normal when your day-to-day is filled with seeing and hearing trauma of others.
        </p>
        <p>
        The way your body responds to trauma takes on different forms. You may not be bothered by a particular call, but you know you should be. Maybe you are losing sleep or having nightmares; your appetite has changed; you feel irritable and want to be alone. You have sudden, unexplained emotions or even physical pain. You feel anxious, depressed and want to isolate yourself, especially when you relive the traumatic event(s). You may have developed a substance use problem. 
        </p>
        <p>
        Now let’s focus on the positive and what you can do to improve how you cope and feel better emotionally. The cost of caring, also referred to as compassion fatigue, is real, it is normal for those in high-stress positions and needs to be addressed so you can continue doing what you love
        </p>
        <p>
        When you take care of your mental health the way you take care of your physical health, the weight of those calls seems lighter. Below are some ways you can focus on healing and sustaining your mental and physical health.
        </p>
        <p>
        Peer Support is a great resource. Let’s face it, you can’t disclose these incidents to loved ones or friends. You experience the unthinkable, so lean on your peers for support. Your coworker notices concerning signs that you are struggling, and they want to be supportive, so they reach out to you. You can help one another through the times that just seem too heavy to carry alone. You are not alone in this.
        </p>
        <ul className="blog-post-ul">
          <h5>Resilience! You have it, it’s vital to your survival. Resiliency can reduce the harmful effects of stress and trauma, like a protective barrier that helps you maintain your well-being. When you add and strengthen protective factors, like social support, access to resources and caring for your physical health, it helps you more effectively counteract collective stress. The following is taken from NAMI (National Alliance on Mental Illness):</h5>
            <li>First and foremost, give yourself a break. Your work is difficult and demanding, and you often witness what is unthinkable to most. It’s normal for stress and trauma to have a negative effect on your health — mentally and physically.</li>
            <li>Recognize what you’re feeling. Identify the emotions: shock, anger, sadness, fear, relief, etc. These are normal responses, and it is ok to feel them, in any combination. Calling them what they are helps you gain perspective on how to address them.</li>
            <li>Identify the symptoms that are bothering you and pay attention to how they are impacting you daily. Then talk to someone about it, whether through peer support or through professional channels.</li>
        </ul>
        <ul className="blog-post-ul">
         <h5>It’s always helpful to add tools to your toolbox, especially if they’re tools you actually use.</h5>
         <li>Identify your sources of strength: family, friends, faith, pets, music or hobbies. Think of ways to incorporate more of what brings you happiness and motivates you.</li>
         <li>Prioritize relationships and be intentional about connecting with people. Social support is a protective factor and connection with others is as fundamental to health and well-being as nutrition and physical activity.</li>
            <ul>
              <li>Even when you feel like being alone, spending time with a friend or family member can boost your mood.</li>
              <li>Take a few minutes to call a friend or loved one.</li>
              <li>Meet a friend for lunch or hit the gym with a co-worker.</li>
            </ul>
         <li>Envision positive outcomes and foster a sense of optimism. This may seem simplistic, but resiliency includes a sense of self-efficacy, optimism, self-esteem and a feeling of personal control and independence.</li>
         <li>How many firemen does it take to....use humor to cope? Most first responders understand that humor is a coping mechanism, but you should also know that it has healthy short and long-term benefits. Listen to a stand-up routine, tell corny jokes with your kids or watch a comedy.</li>
         <li>Set the tone for each day. Take charge of the day from the outset with a healthy and positive habit. It can be five minutes of mindful meditation or prayer, 10 minutes of stretching or even just a few minutes to focus on your goals for the day.</li>
         <li>Limit your media exposure and the amount of time spent on social media to maintain a positive outlook. Continual review of negative stories and outcomes can increase your stress. You might even try doing nothing for two minutes.</li>
         <li>Create a list of strategies for taking care of yourself throughout your shift. You don’t have to be off duty to use stress management skills. Often, even the simplest thing, such as tactical or box breathing, or stepping outside for a break, can make the day seem less stressful. (NAMI, 2023)</li>
        </ul>
        <p>Finally, reach out for confidential, professional support. A lot of people are reluctant to do this. It may be due to concerns about leaders or coworkers finding out and losing confidence in your ability to do the job. Maybe it’s the stigma that has been placed on mental health. Perhaps it’s because your job is centered on saving others in emergency situations, so it may be difficult to resolve needing help yourself. The fact is that we all need support sometimes. When other forms of support and self-care are no longer effective, it’s time to make that call for a professional. </p>
        <p>How are you feeling today?</p>

      <h5 style={{fontStyle: 'italic'}}>Links from this article</h5>
      <p><a className="" target="blank" rel="noreferrer" href="https://www.themuse.com/advice/how-to-find-a-hobby-you-love">Hobbies</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5598785/">Social Support</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.studyfinds.org/friends-appreciate-reach-out/">Call A Friend</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.firerescue1.com/leadership/articles/the-power-of-optimism-how-firefighters-can-grow-this-essential-trait-gwgINMqLBUMDUHlJ/e">Sense of Optimism</a></p>

      <p><a target="blank" rel="noreferrer" href="https://positivepsychology.com/humor-psychology/#coping">Use Humor to Cope</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.themuse.com/advice/how-to-find-a-hobby-you-love">Benefits of Humor</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.bustle.com/articles/142792-7-morning-rituals-to-set-the-tone-for-a-positive-day">Set the Tone for Each Day</a></p>

      <p><a target="blank" rel="noreferrer" href="https://hminnovations.org/meditation-app">Mindful Meditation</a></p>

      <p><a target="blank" rel="noreferrer" href="https://edis.ifas.ufl.edu/publication/FY1499">Media Exposure</a></p>

      <p><a target="blank" rel="noreferrer" href="http://www.donothingfor2minutes.com/">Do Nothing for Two Minutes</a></p>

      <p><a target="blank" rel="noreferrer" href="https://www.police1.com/health-wellness/articles/why-you-should-combat-breathe-before-you-leave-vDXBxY6svOPQy7l6/">Tactile Breathing</a></p>

      <p><a target="blank" rel="noreferrer" href="https://quietkit.com/box-breathing/">Box Breathing</a></p>
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

export default CostofCaring;
