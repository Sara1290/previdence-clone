import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const MentalPhysical = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "The Science of Mentahl and Physical Health" ?
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
        Let’s dig into the science of physical fitness and how it affects your mental health. Things like cortisol, adrenal glands, the amygdala, stress…among other things… and how these all combine to not only help you physically, but mentally and emotionally. I love this stuff, and I know you do, too. 
        </h5> 
        <p>
        Get your running shoes on!
        </p>
        <ul className="blog-post-ul">
          <h5>Cortisol is a naturally occurring steroid hormone that plays a key role in the body's stress response. While it is often called the stress hormone for its best-known role, it also contributes to many of the body's processes. It's secreted by the adrenal glands and involved in the regulation of the following functions and more:</h5>
            <li>Blood pressure regulation</li>
            <li>Glucose metabolism</li>
            <li>Immune Function</li>
            <li>Inflammatory response</li>
            <li>Insulin release</li>
        </ul>
        <p>
        The adrenal glands release cortisol in response to stress or fear as part of the body's fight, flight, or freeze response. When confronted by some type of threat in your environment, your body goes through a series of near-instantaneous reactions that prepare you to either stay and deal with the problem, escape to safety, or freeze.
        </p>
        <p>
        A brain structure known as the amygdala alerts the hypothalamus, which then signals a range of responses including the release of hormones such as adrenaline and cortisol (go to Mayo Clinic or Very Well Mind for more detailed information) 
        </p>
        <p>
        Cortisol is a hormone made by the adrenal cortex (the outer layer of the adrenal gland). It helps the body use glucose, protein, and fats. Cortisol made in the laboratory is called hydrocortisone. Healthcare providers use it to treat conditions such as inflammation, allergies, and some cancers.
        </p>
        <p>
          <b>Impact of Cortisol</b>
        </p>
        <p>
        Cortisol levels naturally fluctuate at different times in the day. For example, normally, cortisol is present in the body at higher levels in the morning, and at it is lowest at night. The cycle repeats daily.
        </p>
        <p>
        Cortisol levels can also fluctuate based on what a person is experiencing. For instance, although stress isn’t the only reason that cortisol is secreted into the bloodstream, it has been termed “the stress hormone” because it’s also secreted in higher levels during the body’s stress response and is responsible for several stress-related changes in the body.
        </p>
        <ul className="blog-post-ul">
          <h5>Small increases of cortisol have some positive effects:</h5>
            <li>A quick burst of energy for survival reasons</li>
            <li>Heightened alertness</li>
            <li>A burst of increased immunity</li>
            <li>Helps maintain homeostasis in the body</li>
        </ul>
        <p>
        Some people experience a greater spike in cortisol than others when they experience stress. It is also possible to minimize the amount of cortisol you secrete in response to stressors. Stress management techniques are one way that you can manage how you experience stress and possibly reduce cortisol levels in your body.
        </p>
        <p>
          <b>Tips for Controlling Cortisol and Stress</b>
        </p>
        <p>
        To keep cortisol levels healthy and under control, the body’s relaxation response should be activated after the fight or flight response occurs. You can learn to relax your body with various stress management techniques, and you can make lifestyle changes in order to keep your body from reacting to stress in the first place.
        </p>
        <ul className="blog-post-ul">
          <h5>Many find the following strategies helpful in relaxing the body and mind, which assist the body in maintaining healthy cortisol levels:</h5>
            <li>Breathing exercises (this really is a BIG deal)</li>
            <li>Exercise</li>
            <li>Guided imagery</li>
            <li>Journaling </li>
            <li>Listening to music</li>
            <li>Meditation </li>
            <li>Sex (yep, that’s right, this is a big deal, too)</li>
            <li>Yoga </li>
        </ul>
        <p>
        To help decrease stress, start by eliminating the small, insignificant details that worry you, or make you feel uptight. Things like the house or your family being perfect (we’re all human); looking flawless (again, we’re all human); avoiding unhealthy habits like too much caffeine and foods high in sugar and fat; eliminating/reducing use of substances that alter your thinking and behavior. Start connecting with others, have a good belly laugh, laugh at yourself sometimes, be assertive, and get sufficient sleep. 
        </p>
        <p>
          <b>So, what really happens to our body when we Exercise?</b>
        </p>
        <p>
        Recent research has suggested that the exercise we do to improve our body also helps our brain. When we do high intensity exercise our heart rate increases, supplying more blood flow to the brain. The increased heart rate also increases our breathing, making us breathe harder and faster. As a result, more oxygen is supplied in our blood stream and more oxygen reaches our brain. This leads to neurogenesis, which is the production of neurons. Research has indicated that physical exercise increases neurogenesis in the hippocampus, the brain area important for learning and memory. 
        </p>
        <p>
        Exercise also influences the neurotrophins; it’s the family of protein that aids neuron survival, development and function. This leads to greater brain plasticity and as a result, better memory and learning. Regular physical activity lowers the risk of developing cognitive impairment, such as dementia, including Alzheimer’s disease. This specific improvement from exercise helps people with normal, as well as impaired cognitive health, including people with ADHD, schizophrenia, multiple sclerosis, Parkinson’s disease, and stroke. 
        </p>
        <p>
        Additionally, exercise modulates the secretion of major neurotransmitters dopamine and serotonin, which are linked with treating depression. Indirectly, Exercise improves mood and sleep, and reduces stress and anxiety. Trouble in these aspects of our life frequently causes or contributes to cognitive impairment (Whole Brain Health, 2020).
        </p>
        <p>
        Remember physical fitness literally changes the way you think and behave. It reduces brain fog, prevents depression and stress, reduces risk of heart problems, lowers blood pressure, and helps control weight. Among these benefits, it also improves your mood, boosts energy, increases optimism, induces feelings of peace, and can improve your sex life. Imagine all this good from simply incorporating exercise into your daily routine. 
        </p>
        <p>
        There’s a lot to be said for a few lifestyle changes, but if you find yourself in a place where you just can’t find peace, cannot seem to feel like yourself, please reach out, we are phone call, text, or email away. 
        </p>
        <p>
        Give us a call to chat or find a vetted therapist at <a href="tel:+1-385-298-8152">385-298-8152</a>, or email at Bobbi.mcgraw@previdence.com
        </p>

        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute is created for you with contributions from Whole Brain Health, Mayo Clinic, and Very Well Mind. I hope you enjoyed your reading.
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

export default MentalPhysical;
