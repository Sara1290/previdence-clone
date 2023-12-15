import React, {useState, useEffect } from 'react';
// import axios from 'axios';
import NavBar from '../NavBar';
import MemberCareFooter from "../MemberCareFooter.js";
import { blogdata } from './BlogData.js';
import ReactGA from 'react-ga';
import ScrollToTop from '../ScrollToTop';

import './blog.css';

const Blog = () => {
  ReactGA.pageview('src/Components/Blog/Blog.js');

  // const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  //get all resources on load
  // const getResources = () => {
  //   axios.get("/api/resources")
  //   .then((res) => { 
  //     setResources(res.data)
  //   })
  //   .catch((err) => console.log(err));
  // }
  
  // useEffect(() => {
  //   getResources();
  // }, []);

  //SEARCH
  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  useEffect(() => {
    const results = blogdata.filter((blogdata) => 
    blogdata.topic.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search])

  //map over resourcecards and return the structure of the cards
  let mappedResources = blogdata.map((blogdata) => {
    return (
      blogdata.alpha 
      ? <div className="blog-card">
    <div key={blogdata.id} className="">
    <img src={blogdata.img} alt="" className="blogImg"  />
    <div className="blog-texts">
      <h4>{blogdata.title}</h4>
      <p>{blogdata.description}</p>
      {/* <p>{blogdata.topic}</p> */}
      <button className="read-more-btn" ><a href={blogdata.link} target="_blank" rel="noreferrer" className='link2'>Read More</a></button>
      </div> 
      </div>
      <div className='blog-references'>
      <p>{blogdata.author}</p>
      <p>{blogdata.date}</p>
      </div>
      <br></br>
    </div>
        : <div className="blog-card" >
         <div key={blogdata.id} className="">
         <img src={blogdata.img} alt="" className="blogImg"  />
         <div className="blog-texts">
           <h4>{blogdata.title}</h4>
           <p>{blogdata.description}</p>
           <p>{blogdata.link}</p>
           {/* <p>{blogdata.topic}</p> */}
           <button className="read-more-btn" ><a href={blogdata.link} target="_blank" rel="noreferrer" className='link2'>Read More</a></button>
           </div> 
       </div>
       <div className='blog-references'>
         <p>{blogdata.author}</p>
         <p>{blogdata.date}</p>
         </div>
        </div>
    )
      })

//map over the resources that match search results

let mappedSearch = searchResults.map((blogdata) => {
  return (
    // if the object contains an alpha value, handle it this way. If no alpha value, handle it a different way.
    blogdata.alpha 
    ? <div className="blog-card">
      <div key={blogdata.id} className="">
      <img src={blogdata.img} alt="" className="blogImg"  />
      <div className="blog-texts">
        <h4>{blogdata.title}</h4>
        <p>{blogdata.description}</p>
        {/* <p>{blogdata.topic}</p> */}
        <button className="read-more-btn" ><a href={blogdata.link} target="_blank" rel="noreferrer" className='link2'>Read More</a></button>
        </div> 
        </div>
        <div className='blog-references'>
        <p>{blogdata.author}</p>
        <p>{blogdata.date}</p>
        </div>
        <br></br>
      </div>
      : <div className="blog-card" > 
        <div key={blogdata.id} className="">
        <img src={blogdata.img} alt="" className="blogImg"  />
        <div className="blog-texts">
          <h4>{blogdata.title}</h4>
          <p>{blogdata.description}</p>
          <p>{blogdata.link}</p>
          {/* <p>{blogdata.topic}</p> */}
          <button className="read-more-btn" ><a href={blogdata.link} target="_blank" rel="noreferrer" className='link2'>Read More</a></button>
          </div> 
      </div>
      <div className='blog-references'>
        <p>{blogdata.author}</p>
        <p>{blogdata.date}</p>
        </div>
       </div>
       
       )
      })

return (
  <div>
      <NavBar />
      <h1 id="h3">Blog</h1>
      <input className="resource-input" type="text" placeholder="Search" value={search} onChange={handleChange} />
<div className='blog-container'>

      <div className="blog-inner">
        {/* basically saying if there is 0 search length, then return the original mapped blog posts (an array), and if there is ANY amount of search text then return the searched results */}
        {searchResults.length < 1 
        ? mappedResources 
        : mappedSearch 
      }
      </div>
  </div>
      <ScrollToTop />
      <MemberCareFooter />
    </div>
  )

}
export default Blog;
