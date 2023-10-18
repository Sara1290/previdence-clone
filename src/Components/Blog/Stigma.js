import  React from "react";
import NavBar from '../NavBar';
import { blogdata } from './BlogData.js';
import UniFooter from "../UniFooter";
import ReactGA from 'react-ga';

const Stigma = () => {
  ReactGA.pageview('src/Components/Blog/Stigma.js');

let mappedBlogPost = blogdata.map((blogdata) => {
  return (
    blogdata.title === "Stigma" ?
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
        <h5>My friend told me something that really struck me; how great it would be if all people in need of mental health therapy actually went and got it. One of the main obstacles is the stigma against mental health. My friend and I discussed that one of the best ways to deal with stigma is for well-functioning people with mental illness to come out of the closet about their condition.” (Very Well Mind).</h5> 
        <p>
        When someone with a mental illness is called dangerous, crazy, or incompetent, rather than unwell, that is stigma. Sometimes people are mocked or called weak or cowardly for seeking help. Stigma is stereotyping a person based on inaccurate information and/or beliefs.
        </p>
        <p>
        Social stigmas such as disapproval, discrimination, and prejudices against an individual, or illness, are like labels and can be difficult to remove. They are unfair and breed fear and hate. For the individual facing such challenges, it can be like a ball and chain, leading to seclusion, loneliness, depression, and anxiety. This further intensifies a mental illness.
        </p>
        <p>To remove stigma, we start by understanding our own mental health; we all have it, just like we have physical health. We must understand the impact of stigma on people. All humans face challenges and by sharing how we overcome them, whether with therapy, or support of family, friends, or co-workers, allows others to see the hope in healing and that stigmas are a simple state of mind.</p>
        <p>For more information on stigma, refer to the following sites, Very Well Mind, American Psychiatric Association, Mayo Clinic, and National Institutes of Health.
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

export default Stigma;
