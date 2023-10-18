import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const HeatTherapy = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Heat Therapy" ?
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
        <h5 style={{fontStyle: "italic"}}>
        Note: heat therapy can quickly lead to heat stroke, organ failure, or death. Please consult your doctor before starting any heat-related therapy. Also important, be very attentive to your mineral and electrolyte levels to ensure your body is properly hydrated before starting any thermotherapy.
        </h5>
        <h5>
        Have you ever considered thermotherapy, or heat therapy? This therapy dates back to ancient civilization. What’s so remarkable about this type of therapy is that it is still around to bring you significant physical and mental health benefits. It is the controlled application of heat to the body. 
        </h5> 
        <p>
        How this particular therapy is applied to the first responder population differs from the general public, because of your exposure to extreme weather conditions. What you face is unique and challenging and brings serious concern to your body’s health and daily function. Your body needs to be acclimated to withstand intense temperatures, and this MHM will cover a few types of thermotherapy.
        </p>
        <p>
        Common to many is the use of hot tubs and steam rooms, both in homes and for commercial use. These forms of therapy use moisture and humidity to increase your body temperature and relax muscles. Due to the high levels of humidity, the overall temperature can remain at a low 105 degrees Fahrenheit. This is much more comfortable for some who have difficulty bearing high heat.
        </p>
        <p>
        The dry heat, like saunas and infrared saunas are more popular than in the past. These are used frequently in homes and commercial settings, like their hot tub relatives. This dry heat uses higher temperatures and less humidity that allows body temperature to increase and relax those tight muscles.
        </p>
        <p>
        More common and affordable in homes is the use of heat pads. Though they do not improve your overall health, they are a good option for localized healing caused by injuries or muscle tightness. 
        </p>
        <p>
        There are many benefits to heat therapy, as you know. Relief from pain, relaxed muscles, improved circulation, reduced chronic inflammation, and enhanced flexibility. But do you know that along with these physical benefits are mental well-being improvements? Saunas, especially help reduce stress and anxiety and can improve depression.
        </p>
        <p>
        There are these things, heat-shock proteins (HSP), that make healthy cells stronger by protecting them against stress and injuries. When your cells process stress, you become more resilient and resistant. If your body is not producing HSP, your cells become more vulnerable to damage. You see, your cells fold and process stress, and HSPs help them do this. Cells under stress will fold with the aid of proteins. Proper folding is crucial to maintain cell health and shape. The incorrectly folded cell will become sick and diseased. Heat is one of the best ways to increase HSP, but before taking the leap into the heat, your body must be acclimated first. 
        </p>
        <p>
        How do you acclimate your body? If you work in the high heat, your body naturally adjusts as days/weeks become hotter. To begin your acclimation, get into an uncomfortably hot bath (not hot enough to scald your skin). Keep the water temperature at 98 degrees. This aids in relaxing your muscles and calming your mind. When the goal is to be more tolerant to heat, increase the temperature to 104 degrees Fahrenheit. Be aware of how you feel. Are you lightheaded? If so, get out and cool down. Don’t push this process. Once your body adjusts to the hot tub temperature, you’ll be ready to work toward the higher temps of a sauna.
        </p>
        <p>
        The dry heat of saunas and infrared saunas will work your body much more than a hot tub, which makes them a bit more dangerous to use. With saunas, the ambient air temperatures increase body temperature from the outside. Infrared saunas use infrared lights to increase body temperature from the inside out, like a microwave, which is why it can be dangerous when not done correctly. 
        <p>
        Your body uses the same process to become heat-acclimated.
        </p>
        </p>
        <p>
        Low and slow… no more than five minutes at your desired temperature. It is so important to remember this. As your body easily manages five minutes, gradually increase the time 20 minutes at the same temperature. As your body safely manages 20 minutes at that temperature, increase the temperature by five degrees until you reach your desired temperature. This process can take weeks, so just take your time and don’t be in a hurry. Times and temperatures are unique to the individual, so be acutely aware of what your body is doing and how you feel. Just as important, stay hydrated during the process. 
        </p>
        <p>
        In conclusion, your profession is unique and with it comes unique challenges, mental and physical stressors, as well as unforeseen trials. Heat therapy can help decompress your mind, relax your muscles, and change cellular construction, which in turn can increase your resistance and resilience to these uncontrolled stresses
        </p>
        <p>
        Go hop in the tub, turn on some music, a podcast, or just bask in the silence and feel your body relax and your mind decompress.
        </p>
        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute is created for you with the help of EMS1 and National Institutes of Health. 
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

export default HeatTherapy;
