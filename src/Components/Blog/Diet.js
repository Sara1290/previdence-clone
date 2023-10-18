import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Diet = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Diet and Mental Health" ?
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
        What’s for breakfast?
        </h5> 
        <p>
        You know your diet is important, but do you realize how it affects your brain and your mental health? It’s obvious how a healthy diet contributes to our physical well-being and function, but there’s so much more to the simple concept of eating and what we put in our body. Yep, what we eat can make us happy…or really, really crabby. There’s a lot of science behind this. Remember the microbiome from April?
        </p>
        <p>
        Our brain never turns off! It controls our thoughts, breathing, movement, heartbeat, and senses; this is the autonomic nervous system, controlled by the hypothalamus. That’s a lot of work for a small organ, so the fuel we provide is crucial to the structure and function of our brain, as well as our mood. It’s kinda like how we take care of our car.
        </p>
        <p>
        Imagine leaving the car running 24/7…something would shut down, overheat, or simply stop. So, quite miraculously, the brain is on a continuous cycle of running and needs a constant supply of fuel. What kind of fuel we consume is vital to how well our “car” runs. We want premium fuel, foods that contain lots of vitamins, minerals, and antioxidants. Like a car, our body can be damaged when we ingest the wrong fuel. Processed foods and foods high in refined sugar can have a negative impact on our health, both mental and physical.
        </p>
        <p>
        High quality “fuel” can help reduce not only weight gain, but inflammation and oxidative stress. In addition, a healthy diet can improve the symptoms of mood disorders, such as depression. See, there’s a connection between mood and food, as well as how we behave.
        </p>
        <h5>What’s for lunch?</h5>
        <p>
        You know about serotonin and how it helps regulate sleep and appetite, modify moods, and inhibit pain. But did you know that about 95% of serotonin is produced in your gastrointestinal tract? There’s a lot of science to this, but to keep it short and simple, the production of serotonin is influenced by billions of good bacteria in the intestinal microbiome. To keep this microbiome on track, the quality of food we consume is important to the neural pathways that travel directly between the gut and the brain.
        </p>
        <p>
        Diets high in fresh vegetables and fruits, unprocessed grains, fish and seafood, and moderate amounts of lean meats and dairy will help you feel good, get your gut healthy, and improve your mood. Try eliminating refined food and sugar for just one week. You’ll see less inflammation throughout your body, as well as feeling happier and increased energy levels.
        </p>
        <p>
        Give your menu a new look by incorporating the Mediterranean diet, or the traditional Japanese diet for cleaner eating. A clean diet is one that incorporates foods that are as close as possible to their natural state. You can also create your own by finding “clean” eating recipes and including more unprocessed foods and less sugar in your daily routine. 
        </p>
        <h5>So, what's for dinner?</h5>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you with contributions from Eating Well and Harvard Health.
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
      <UniFooter />
    </div>
  )
  
}

export default Diet;
