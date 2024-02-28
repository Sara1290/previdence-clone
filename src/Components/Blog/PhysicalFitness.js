import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const PhysicalFitness = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "New Blog" ?
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
        For the month of March, the MHM will focus on the correlation between physical and mental health with a few tips on how to maintain and improve both. One important detail; we spring ahead one hour on March 10, so your sleep may be disrupted. This can affect you on many levels, as you know, so be aware of your schedule and how you are feeling. 
        </h5> 
        <p>
        A growing body of research makes it clear that mental health and physical health are deeply connected, with studies showing that an improvement or decline in one can lead to an improvement or decline in the other.1 But how exactly does one influence the other? What exactly is happening in the body to allow changes in one to change the other?
        </p>
        <p>
          <b>The Relationship Between Mental Health and Physical Health</b>
        </p>
        <p>
        To understand why mental health and physical health are so closely linked, it’s important to remember that the distinction between the two is less important than we may assume. Our thoughts, moods, and mental state may feel abstract or separate from the physical, but they are all happening as part of our brain activity.
        </p>
        <p>
        A good example of how interconnected your brain and body are is the set of mental and physical changes that happen during the menstrual cycle. More and more research shows that hormonal shifts throughout the menstrual cycle impact far more than just the reproductive system.
        </p>
        <p>
          <b>How Does Physical Health Affect Mental Health?</b>
        </p>
        <p>
        One complex interaction between physical changes and mental health involved the interaction of estrogen and dopamine. Dopamine, sometimes known as the “happiness hormone” is associated with motivation and reward among multiple other functions in the brain. Estrogen downregulates dopamine transmission, mimicking the effects of certain antipsychotic medications. Postpartum, when estrogen levels dramatically drop, there is an increased vulnerability to psychosis in some individuals. For people with ADHD, that can make symptoms even worse. But for people with bipolar disorder or other conditions involving psychosis, that can make psychosis symptoms better. 
        </p>
        <p>
        Another example of hormonal changes impacting mental health involves estrogen and serotonin, in some women the drop in estrogen at the end of their menstrual cycle leads to drops in serotonin in the brain, contributing to emotional symptoms.
        </p>
        <p>
        Reproductive hormones aren’t the only ones to be linked to mental health. Metabolic hormones—insulin, cortisol, leptin, and so on—have been found to impact a wide range of mental illnesses, from ADHD to schizophrenia to eating disorders.
        </p>
        <p>
        Research shows that interaction is a two-way street. Metabolic problems like diabetes, hypertension or even just prolonged periods of poor nutrition can cause stress-induced changes to the brain that lead to mood and neurodevelopmental disorders. Likewise, certain mental health disorders can cause stress that triggers metabolic changes that, over time, can develop into those same metabolic diseases.
        </p>
        <p>
          <b>How Does Mental Health Affect Physical Health?</b>
        </p>
        <p>
        A number of studies have found that mental illness may accelerate biological aging, manifesting as increased rates of cardiovascular and other age-related diseases. It’s important to take care of your mental health, just as you do your physical health, to avoid, or at least decrease, things like depression, anxiety, and other mental illnesses.
        </p>
        <ul className="blog-post-ul">
          <h5>What the research shows is that mental illnesses may be linked to premature aging in a few different ways:</h5>
            <li>They can lead to unhealthy behaviors like poor diet, lack of exercise, and substance use that are bad for physical health.</li>
            <li>Many mental health conditions and the stress they cause can disrupt sleep, which can harm physical health over time.</li>
            <li>Stress can cause chronically elevated levels of cortisol, which can disrupt just about every bodily function, including the digestive system, immune system, cardiovascular system, and even reproductive system.</li>
        </ul>
        <ul className="blog-post-ul">
          <h5>For people with mental illness, this can put them at risk for a range of medical conditions, including:</h5>
          <li>High Blood Pressure</li>
          <li>Heart Disease</li>
          <li>Diabetes</li>
          <li>Stroke</li>
          <li>Cancer</li>
        </ul>
        <p>
          <b>The Connection Between Mental Health and Physical Health and 
Tips for Maintaining Mental and Physical Health
</b>
        </p>
        <p>
        There is a silver lining to all the research on the interactions between mental and physical health: it shows that the body and brain are both extremely responsive to change. Yay! There’s hope!
        </p>
        <p>
        That adaptability is partly what can cause a snowball effect of mental and physical health symptoms. But it’s that same adaptability that will allow anything you do to take care of yourself to have power to trigger a snowball effect of positive changes in your body. Here are a few places you might start.
        </p>
        <p>
          <b>Make Regular Exercise a Lifelong Habit</b>
        </p>
        <p>
        The physical and mental health benefits of regular exercise are hard to overstate. It improves muscle mass and function, improves metabolic function, reduces inflammation, strengthens the immune system, improves cardiovascular and respiratory health, and even contributes to better gut microbiome diversity.
        </p>
        <p>
        All of those physical health benefits will, in turn, improve mental health because they’re interconnected. But exercise also has direct benefits for the brain. Those benefits include improved cognitive function; improved executive function, including working memory and impulse control; reduced depression and anxiety symptoms; and reduced stress.
        </p>
        <p>
        Many of these benefits are cumulative, meaning you’ll have to stick with an exercise routine for a while before you notice a difference. But exercise may also have some useful immediate benefits, including elevated mood for several hours after exercise, improved energy levels, and mild pain relief. 
        </p>
        <ul className="blog-post-ul">
          <h5>For optimal short and long-term benefits, follow these tips:</h5>
          <li>Don’t overdo it. Training that is too intense can end up counteracting the physical and mental benefits of exercise because they cause stress and put you at risk of injuries.</li>
          <li>Aim for 150-300 minutes of moderate aerobic physical activity per week, including some muscle-strengthening activities at least two days per week.</li>
          <li>Pick activities you actually enjoy. Exercise doesn’t have to be about peak performance or maximizing each workout. It just has to be something that gets your body moving and challenges you a bit when you have the energy to challenge yourself. Hike, swim, dance, play with your dog, go for a walk, whatever gets you moving without dreading the idea of exercising. If you don’t know what you enjoy, try something different every week until you find it.</li>
          <li>Start with ridiculously small goals. To avoid quitting before exercising becomes a habit, start by setting daily goals that seem so easy it would be ridiculous not to do them. Each week, set the goal a little higher.</li>
        </ul>
        <p>
          <b>Eat a Healthy, Balanced Diet</b>
        </p>
        <p>
        Diet is one of the most important risk factors of illness, but it can also be one of the most confusing lifestyle changes to make. There’s so much conflicting information out there about what you should and shouldn’t eat. Plus, a lot of diet plans ask you to meticulously track things like fiber, protein, and micronutrients. It’s overwhelming.
        </p>
        
        <ul className="blog-post-ul">
          <h5>Instead of trying to follow any optimized diet plan or figure out which trending superfood you should be eating, just follow a few basic principles of good nutrition and then don’t stress about it:</h5>
          <li>Drink more water. Between three to four liters per day is the general recommendation. Don’t worry about alkalinity or electrolytes. Any safe drinking water will hydrate you.</li>
          <li>Eat more fruits and veggies. The recommended five servings work out to about 1 pound per day. Any fresh produce will be good for you, so don’t overthink it. With canned and frozen options, just make sure there isn’t a lot of added sugar or salt.</li>
          <li>Be mindful of processed foods. Even minimally processed and ready-made foods, like bread or soup, can contain a surprising amount of salt and sugar. If you do have these ready-made options, check the label to try and find low-sodium, low-sugar alternatives. </li>
        </ul>
        <p>
        If your current habits aren’t ideal, don’t worry about getting them perfect right from the start. Focus on one change at a time so you can turn these into lifelong habits.
        </p>
        <p>
          <b>Make Time for Doing Nothing</b>
        </p>
        <p>
        A lot of health advice, including the tips above, center on things you need to do or change. But it’s also important to remember that stress is a major factor in the harmful interactions between mental and physical health. So, part of your healing process should include finding time to not worry about whether you’re eating the right thing, exercising enough, or being productive enough.
        </p>
        <p>
        Just take a few minutes each day to sit down with no TV, no phone, no other distractions and just be. Notice where you are and what you’re feeling right now. That’s it. Don’t think about what you have to do after this or what you should be feeling or doing right now. Just be for a few minutes, maybe even 40-45 minutes if you have the time.
        </p>
        <p>
        This is often referred to as mindfulness, but don’t let the label pressure you into putting criteria around what you should be doing or how to optimize this time. The goal is to just check in with yourself and take a break from the noise of life for a bit. You can try a more defined mindfulness exercise once you've made a habit of carving out this time for yourself if you want to.
        </p>
        <p>
        Remember, the goal is to take care of the whole YOU. Though it seems like a lot, it all falls into place smoothly once you have developed these healthy habits…and it feels good, gives you energy, brings a more positive attitude about life, work, family, your partner, and your own self. Take time to make simple changes, which lead to more positive thinking, better relationships, an overall better quality of life, and a happier, healthier you. 
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from NIH and the Mental Health Foundation. I hope you enjoyed your reading.
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

export default PhysicalFitness;
