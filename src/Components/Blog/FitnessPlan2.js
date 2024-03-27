import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const FitnessPlan2 = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "One Year Fitness Plan Continued" ?
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
       Understanding that your food intake, stress levels, daily habits, and avoiding the “crash” are vital to your success. What you put in your body is as important, if not more, than what you do to acquire and maintain your physical health
        </h5> 
        <p>
        This challenge is taken from the National Volunteer Fire Council (NVFC).
        </p>
        <p>
          <b>September: 5-A-Day Challenge </b><br></br>
          Challenge each of your department members to increase their intake of fruits and vegetables as part of Fruit and Veggies – More Matters Month. Your food intake is a fundamental aspect to your success. You need healthy fuel to keep up the pace.<br></br>
          Fruits and vegetables contain essential vitamins, minerals, and fiber that may help protect you from chronic diseases. Compared with people who consume a diet with only small amounts of fruits and vegetables, those who eat more generous amounts as part of a healthful diet are more likely to have reduced risk of chronic diseases, including stroke, cardiovascular diseases, and certain cancers. <br></br>
          Start the challenge by distributing the 5-A-Day Challenge worksheets and personal scoresheets to all participants. These can be found anywhere on the web.
        </p>
        <ul className="blog-post-ul">
          <h5>Challenge Rules </h5>
            <li>Using the 5-A-Day Challenge worksheet, find your baseline number of servings of fruits and vegetables that you currently eat each day. </li>
            <li>Take stock of your eating habits to determine where you can make changes. </li>
            <li>Set your goal. Determine how many servings of fruits and vegetables you can realistically strive to eat each day during September. </li>
            <li>Track the number of servings you eat each day </li>
        </ul>
        <p>
        <b>October: Reduce Your Stress </b><br></br>
        The first full week in October is Mental Illness Awareness Week. In observance of this year’s event, challenge your department to reduce their stress levels this month. Every job can cause stress; however, firefighting takes stress to a new level. Each time you get called out to an emergency, you are expected to drop everything to serve your community. This means possibly 7 missing out on family gatherings and other important events in your life, as well as risking your physical and mental health. <br></br>
        According to American Psychological Association (APA), poorly managed stress can contribute to obesity, increased blood pressure, and increased risk of heart disease. Hobbies and sports can provide a nice distraction from stress and relieve tension. Having down-time is important, too. When it comes to effectively managing stress, recreation and relaxation are just as important as household chores or bills. <br></br>
        <b>Challenge Rules</b><br></br>
        Do something for you to clear your mind for at least 20 minutes a day. Whether it’s picking up a new hobby or sport, taking your dog for a walk, reading a book outside on a nice day, or going for a run on a treadmill, the point is to clear your mind while doing something you enjoy and getting your mind off of your stressors. You have completed the challenge if you take 20 minutes of relaxation time each day for at least 21 days this month. 
        </p>
        <ul className="blog-post-ul">
          <h5>Tips to Help Complete Your Challenge  </h5>
            <li>If you choose a hobby, match it to your personality. If you are a detail-oriented person, you might like hobbies that require precision, such as welding or working on cars. If you are more spontaneous and like to make a mess, you could try ceramics, gardening, or photography. If you want to get your heart pumping and want to pick up a new sport, try kayaking, rock climbing, or biking.</li>
            <li>Take a class or join a club to meet other people that enjoy your new hobby or sport. Human beings are social animals, and research shows that socializing with others helps release stress.  </li>
            <li>Make time for your hobby or sport every week and ideally every day. Experts advise meditating for at least 20 minutes a day, so try to do the same to get continuing benefits.  </li>
            <li>Enjoy the process of learning your new hobby or sport. Many people rush to perfection, but the fun and the healing benefits are in the process. That is when you push anger, anxiety, and everyday worries out of the way.</li>
            <li>Do not be a perfectionist. Give yourself permission to enjoy your hobby without expecting your projects to be masterpieces. If it becomes just another chore to complete perfectly, you will lose the therapeutic benefits and the fun.</li>
            <li>Do not compare yourself to others. If you are a beginner, let yourself be a beginner. Persevere with your hobby because you love it. You do not even have to finish your projects if you don't want to.</li>
        </ul>
        <p>
        <b>November: Put It Out </b><br></br>
        A key component in leading a heart-healthy lifestyle is eliminating the habit of smoking. Heart attack is the leading cause of first responder deaths. Other illnesses such as lung cancer, emphysema, and chronic bronchitis pose significant threats to smokers and those exposed to second-hand smoke. Leading a smoke-free life is a critical component to keeping first responders safe and healthy. <br></br>
        November is Lung Cancer Awareness Month, a national campaign dedicated to increasing attention to lung cancer issues. In addition, the Great American Smokeout is the third Thursday in November and encourages smokers to use that day to make a plan to quit. If you smoke, make your plan to quit this month. If you are a nonsmoker, use these events to promote a smoke-free lifestyle in your department.
        </p>
        <p>
        <b>December: Holiday Health </b><br></br>
        It can be hard to focus on your health during the holidays, with plenty of events going on to distract you from working out – not to mention the abundance of food at holiday events! During these times, challenge yourself and your department to stay focused on your fitness and nutrition while enjoying all the fun the holidays have to offer. <br></br>
        Working out has many benefits, including decreased risk of disease, increased strength, and reduced stress levels. Eating a well-rounded, healthy diet can also reduce your risk of disease, plus give your body the tools it needs to fight illness. You can still enjoy holiday treats in moderation. 
        </p>
        <ul className="blog-post-ul">
          <h5>Challenge Rules </h5>
            <li>Have each member of your department log their fitness and nutrition intake information. </li>
            <li>The challenge is complete if you have logged at least 15 hours of fitness time and reached your nutrition goals 15 days of the month.</li>
        </ul>
        <p>
        Remember, your diet is key to success. Feed your body healthy foods and drink plenty of water for energy, endurance, strength, and longevity. For ways to improve and maintain a healthy eating lifestyle look for next week’s Mental Health Minute where simple changes to your daily eating habits will be addressed.
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

export default FitnessPlan2;
