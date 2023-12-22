import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import MemberCareFooter from "../MemberCareFooter";

const HappyHolidays = () => {


let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    // pick the blog post you want - lets grab it by the title. if it matches that title ? then display that post : if it does not match the title then display nothing - so we only get the one post on the page.
    blogdata.title === "Happy Holidays" ?
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
        Happy holidays to you, to your family, and all those you hold dear. This time of year brings warm, happy celebrations and memories 
        </h5> 
        <p>
        Thank you for your support and guidance, for your gallant service to the communities you serve. We value you in so many ways, value what you stand for, your selflessness and courage. Our indelible gratitude for you is beyond measure and we exude that graciously and with authenticity.
        </p>
        <p>
        As we approach a lovely holiday, may the spirit of this time infuse your life with hope, optimism, peace, joy, and love. May you find joy in the small details and find hope in each day. May you know your worth, your value to those you serve and call family.
        </p>
        <p>
        As you approach the end of this year, count your contributions, the number of times you responded, rushing in without hesitation. Count among them the monumental difference you make in the lives of your community and your family. Your resilience and commitment are to be commended. 
        </p>
        <p>
        We support you!
        </p>

        <p style={{fontStyle: "italic"}}>
        This Mental Health Minute has been created for you. I hope you enjoyed your reading.
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

export default HappyHolidays;
