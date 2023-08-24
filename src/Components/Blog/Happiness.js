import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";

const Happiness = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Happiness" ?
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
        A little science…neuroscience to be exact. In a nutshell; study of the structure and function of the nervous system, with a large focus on the brain and its impact on reasoning and behavior. There’s a lot to know, but to keep it short, I’ll keep it simple.       
        </h5> 
        <p>
        Happiness means different things for each of us, but we all want it. Some people are naturally happy, while others struggle to find their joy. How do you achieve happiness and joy in life? Really consider this for a moment, then read on to find a few ideas to promote “happiness hormones”.
        </p>
        <p>
        Happiness hormones…what are they? Dopamine, serotonin, endorphins, oxytocin
        </p>
        <ul className="blog-post-ul">
          <h5>There are eight factors that promote the production of happiness hormones. Maybe you already do these things, maybe you are at a point where you need to rejuvenate your life and adapt to a few changes. Either way, these are rather simple and take little time and effort.</h5>
          <li>Exercise. It feels good to be fit! Exercise supports the brain in producing hormones like dopamine, serotonin, and endorphins, along with growth hormones, testosterone, and insulin. </li>
          <li>Participate in fulfilling activities that make you smile. Play a game with family, get a massage, go fishing, visit a museum. Activities that bring you joy.</li>
          <li>Get out in the sun. Vitamin D keeps bones and immune system functioning, but it also produces serotonin, which reduces symptoms linked to depression.</li>
          <li>Eat chocolate. Ok, who knew? Just small amounts throughout the week aids both  circulation and help strengthen coronary arteries.</li>
          <li>Eat foods high in tryptophan. Turkey, milk, eggs, fish, peanuts, almonds, bananas and other protein rich foods. This essential amino acid aids in the production of serotonin, folic acid and iron, which assists in the production of red blood cells</li>
          <li>Interact with pets. Dogs, horses, cats, reptiles, any pet can bring us happiness. Pets and children…the world’s perfect beings. They love unconditionally.</li>
          <li>Hug and/or kiss a loved one. A little love goes a long way, and showing affection actually helps the body produce several hormones like endorphins, dopamine and oxytocin. But truth be told, it feels good to give a big, gentle hug.</li>
          <li>Meditate. Sit, breathe slowly and deeply, then gently release the air along with the negativity of the day. Be alone with your thoughts, listen to music, a podcast, soft sounds, or just the silence. Meditating for 30 minutes helps decrease the production of cortisol, the hormone produced during stressful times. Endorphins replace the stress hormones and make you feel relief and happiness, which slow the aging process and strengthen the body’s immune system.</li>
        </ul>
        <p>
        A few simple ways to boost your happiness and make life so much better. For more information, go to National Institute of Health, Mayo Clinic, and Harvard Health.
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

export default Happiness;
