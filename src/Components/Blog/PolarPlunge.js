import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const PolarPlunge = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Polar Plunge" ?
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
        How about a nice ice bath? Have you ever experienced cryotherapy or ice bath therapy?
        </h5> 
        <p>
        Cryotherapy, or ice bath, is used to flush toxins and enrich red blood cells with oxygen, nutrients and enzymes that work to provide multiple benefits. Here are a few:
        </p>
        <p>
        Weight loss. As your body is exposed to extreme low temperatures, it is forced to keep its core temperature up, which takes great effort. This effort results in a 500-800 calorie use in just a few minutes of exposure to the icy temps. Even when the session of over, your body continues to work and use calories to reheat itself and return to normal. Blood vessels dilate and endorphins surge through the body. I love endorphins; they’re the hormones that make you feel alert and energetic. In short, cryotherapy is a healthy way to expel calories, while also acting as an immune booster.
        </p>
        <p>
        Athletic performance and injury recovery. Cryotherapy can enhance recovery after exercise and surgery, and reduce inflammation from injured muscles, bones and tissues. It works to decrease the time it takes for various injuries to repair themselves. DOMS – “delayed onset muscle soreness” is significantly reduced with the help of cryotherapy. 
        </p>
        <p>
        Cryotherapy and anti-aging (this is my favorite). Did you know cryotherapy stimulates collagen production and reduces the appearance of fine lines and wrinkles? It also helps reduce fat deposits and cellulite, and as the skin is exposed to the extreme cold, blood vessels contract, firming and tightening skin. Ice therapy balances hormones, which can be beneficial to anybody in high stress professions, which in turn, helps support a healthy sleep cycle. As a domino effect, these benefits lead to better mental and physical health, because stress affects sleep, which affects hormones, and quite literally affects every aspect of life.
        </p>
        <p>
        This just keeps getting better.
Pain management. This amazing therapy does so much to benefit our body and mind. Among the benefits are, reduction in pain related to arthritis, auto-immune disorders, and chronic fatigue. With cryotherapy pain and discomfort related to Lyme disease and skin disorders like psoriasis and acne is considerably decreased. Degenerative diseases of joints and spine can also be relieved with cryotherapy. 

        </p>
        <p>
        Improved mood and deep relaxation are two positive effects of cryotherapy, as these changes in mental state last a long time after ending the cycle of cryotherapy. Because cryotherapy treatment destroys fat cells (not just shrink them), the effects are long-lasting, even permanent, with a healthy lifestyle.
        </p>
        <p>
        We’ve addressed the pros with cryotherapy, now to disclose some of the cons. You may experience tingling, irritation, numbness, and skin redness after a cryotherapy treatment. These side effects will typically go away within 24 hours
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute is created for you with the help of Healthline, Harvard Health and National Institutes of Health. 
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

export default PolarPlunge;
