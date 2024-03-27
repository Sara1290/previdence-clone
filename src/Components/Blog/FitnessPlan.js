import React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const FitnessPlan = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "One Year Fitness Plan" ?
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
        This is a great way to stay committed and look forward to your scheduled workout each day. The best part is how you will feel; more energetic, more positive, stronger, more agile, less pain with movement and better sleep. Not only are there physical benefits, but your weight is easier to maintain, as well as your mental and emotional fitness. 
        </h5> 
        <p>
        As we begin this journey of self-improvement and self-care, it’s important to have an accountability partner. Who would you want as your accountability partner, a family member, friend, or a co-worker? With an accountability partner, you stay committed to each other, as well as your new lifestyle and you have somebody to check in with. 
        </p>
        <p>
        Exercising can reduce stress, strengthen your bones, burn calories, tone your muscles, and lower your risk of chronic diseases. The Centers for Disease Control and Prevention and the American College of Sports Medicine recommend that adults get at least 30 minutes of moderate physical activity on most (preferably all) days of the week to improve health. 
        </p>
        <p>
        The following five-month agenda by the National Volunteer Fire Council (NVFD)  is a great way to start this path.
        </p>
        <p>
          <b>April: Stand Up for Heart Health </b><br></br>
          April is Foot Health Awareness Month, so this is a great time to get on your feet! If you sit for a good share of your workday, standing can offer numerous benefits that positively impact both physical health and productivity. Standing engages more muscle groups, improves circulation, and can reduce the risk of sedentary-related health concerns such as obesity and cardiovascular disease. Furthermore, standing can boost energy levels, improve focus, promote better posture, and reduce back pain. Simply standing more and sitting less leads to enhanced alertness, creativity, and general well-being.  <br></br>
          Remember, every moment spent standing is a step towards a healthier and more vibrant work life. The more you stand, the better your body feels! So, keep standing and let the positive effects flow through your day! 
        </p>
        <p>
          <b>May: Walk It Off </b><br></br>
          May is National Physical Fitness and Sports Month, the perfect time to challenge your department to get fit. Walking may seem easy, but according to the Centers for Disease Control and Prevention, a 154-pound person burns 280 calories an hour walking at even a moderate pace. The weather is warmer but not yet into the dog days of summer, taking a walk around the neighborhood is a great option. You can also walk on a treadmill indoors, or just around the department. Try parking at the back of the parking lot when you go to the store, or taking the stairs instead of the elevator. <br></br>
          To start the challenge, make sure every department member has access to a pedometer. Most smartphones and smart watches have pedometers built in. Alternatively, you can search online for basic pedometers. 
        </p>
        <p>
          <b>June: Training </b><br></br>
          June’s challenge can be done as a group during breaks, before or after work, or individually on your own time. Challenge your department members to seek opportunities to improve their health and safety knowledge. There are many free webinars and other online training
courses available. The National Volunteer Fire Council (NVFC) currently offers courses through the NVFC Virtual Classroom. Online training lets first
responders learn about health and safety at their convenience. 
        </p>
        <p>
          <b>July: Stay Hydrated </b><br></br>
          With summer in full swing, challenge each of your department members to stay hydrated by drinking at least 48 ounces of water per day. Six to eight 8-ounce glasses of water are generally recommended on a daily basis, but individuals should check with their healthcare provider for any special needs. <br></br>
          1. Record each time you consume six 8-ounce cups (48 ounces) of water. Using a hydration progress log sheet (it can be on your device) can make this process easier to track. <br></br>
          2. Only water can be counted toward your 6 cups.<br></br>
          3. You have successfully completed the challenge when you have consumed 48 ounces of water on at least 20 days during the month.<br></br>
          4. This challenge is for water only and does not include coffee, soda, or other fluid that is not H2O.
        </p>
        <p>
          <b>August: Kick Up Your Cardio </b><br></br>
          This month, challenge your department members to increase their lung capacity and get their heart rate up through aerobic exercise. Aerobic exercise conditions the heart and lungs by increasing the oxygen available to the body and by helping the heart to use oxygen more efficiently. Aerobic activity, or "cardio," includes everything from running, to mowing the lawn, to dancing – as long as you are doing them at a moderate or vigorous intensity for at least 10 minutes at a time.  <br></br>
According to the Centers for Disease Control and Prevention, adults need at least two and a half hours of moderate-intensity or one hour and fifteen minutes of high-intensity aerobic activity every week (in addition to strength training). There’s a lot of information on the web for this challenge, so do some searching if you need ideas. 
        </p>
        <p>
        If you already have a fitness routine, share it with co-workers and others who are looking to improve their health. You may be the catalyst to a new way of life. 
        </p>
        <p>
        Keep an eye on the Mental Health Minute for more monthly challenges for September – December. Good luck with your monthly challenges and feel free to reach out if you need some motivation or support. 
        </p>
        <p>
        Give us a call to chat or find a vetted therapist at <a href="tel:+1-385-298-8152">385-298-8152</a>, or email at Bobbi.mcgraw@previdence.com
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from the National Volunteer Fire Council. I hope you enjoyed your reading.  
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

export default FitnessPlan;
