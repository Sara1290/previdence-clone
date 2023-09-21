import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const FinancialFreedom = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Financial Freedom" ?
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
        <h5>Is this topic too taboo to talk about? Maybe not. We can all benefit from understanding financial freedom and how to obtain that seemingly elusive goal. Is your money working for you? Do you live from paycheck-to-paycheck? </h5> 
        <p>
        Throughout our lives we’re given advice on budgeting, financial independence, living a debt-free life, among other money matters. You do what’s best for you, but if that’s not working, take a different approach. From sources such as Lighthouse Health and Wellness comes a wealth of information of logical, doable ways to save and develop new habits. 
        </p>
        <ul className="blog-post-ul">
          <h5>Listed below are a few ways to start the journey to financial freedom:</h5>
          <li>Create a budget. Knowing how much money you have and how much you will need to pay bills are important details in identifying how much you are able to save. Not just the big bills, like rent/mortgage, food, etc., but other household needs; clothing, entertainment, and maybe a bit of a buffer for emergencies. Watch those credit card balances and bank statements, so you know your monthly average. It helps to take a month or two and write down all your spending, even the small stuff. This gives you an idea whether you are overspending in any of the categories.</li>
          <li>Open a savings account. This is possible! It may take some time while you are paying down debt, but it is attainable.</li>
          <li>Drop unneeded monthly memberships. Now that you’ve created your budget, it’s time for (wait for it)…cutting expenses. You know what you have, what you need, and how much you can save for that rainy day. Get rid of the memberships that are heavy on your bank account; streaming services, subscribe and save memberships. Do you need all of them?</li>
          <li>Unavoidable expenses. Though a house and possibly a vehicle will always be in our budget, the amount you pay is negotiable. You can downsize, take public transit, ride a bike, ride-share, or walk. These ideas won’t work for everybody, but they’re good to consider.</li>
          <li>Save money on food. Food costs are likely one of your biggest variable expenses each month, so maybe start here. How can you cut back? Eating out, that daily coffee/soda, quick trip to the fast food window? Make meal planning part of your weekly schedule and you will likely see your food bill decrease considerably.</li>
          <li>Save money on utilities. 
            <ul>
            <li>Take shorter showers and use less hot water</li>
            <li>Unplug appliances when not in use</li>
            <li>Program your thermostat</li>
            <li>Use energy-efficient light bulbs</li>
            <li>Use door draft stoppers</li>

            </ul>
    </li>
    <li>Commit to buying nothing new. Do this for a month at a time with items you know you do not need. Purchase only the necessities.</li>
    <li>Change where you keep your money. Many financial institutions offer incentives for moving your money to their organization. You can earn points when using the card attached to that account.</li>
    <li>Pay your monthly bills automatically. This is a good way to avoid late fees and can relieve some stress of bill paying. One caveat; be sure you connect only to reputable companies, like utilities, rent/mortgage.</li>
    <li>Pay down debt. Once some debts are paid down, or paid off, it is much easier to put money away into savings. Interest and fees eat up a lot of the hard-earned money you make.
      <ul>
    <li>Make minimum payments on other debts while trying to pay off a specific debt.</li>
    <li>Make payments on time to avoid late fees and credit score dings.</li>
    <li>Try to save at least $1,000 first, in the event of an emergency, so you don’t have to rely on a credit card to bail you out.</li>
    <li>Pay off the smallest debt first, then apply that minimum payment to the next smallest debt.</li>
        </ul> 
    </li>
    <li>Look for extra side work. You may not have time for this, but if you do, chances are, you’ll pay off debt quicker and add to your savings.</li>

        </ul>
        <p>
        This has been a much longer Mental Health Minute, but money management is crucial in relieving stress and maintaining healthy relationships, because the burden of debt is lighter, and those difficult times won’t seem so challenging when you have something soft to fall on.
        </p>
        <p style={{fontStyle: "italic"}}>This Mental Health Minute was created for you with contributions from Lighthouse Health and Current. </p>
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

export default FinancialFreedom;
