import React, {useState, useEffect } from 'react';
// import axios from 'axios';
import NavBar from '../NavBar';
import UniFooter from '../UniFooter';
import { resources } from './data'
import ReactGA from 'react-ga';
import ScrollToTop from '../ScrollToTop';


const Resources = () => {
  ReactGA.pageview('src/Components/Resources/Resources.js');

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
    const results = resources.filter((resources) => 
    resources.topic.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search])


  //map over resourcecards and return the structure of the cards
  let mappedResources = resources.map((resources) => {
    return (
      resources.alpha 
      ? <div className="card-container">
          <div className="rsc-header" >
          <h3 id="alpha">{resources.alpha}</h3>
          <div className="line"></div>
          <p>{resources.topic}</p>
          </div>
        <div key={resources.id} className="airbb">
        <img src={resources.img} alt="" className="resourceImg"  />
        <div className="airbb-texts">
          <h4>{resources.title}</h4>
          <p>{resources.description}</p>
          <p>{resources.link}</p>
          {/* <p>{resources.topic}</p> */}
          <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
          </div> 
          </div>
          <br></br>
        </div>
        : <div className="card-container" >
         <div className="rsc-header">
            <div className="line"></div>
            <p>{resources.topic}</p>
            </div> 
          <div key={resources.id} className="airbb2">
          <img src={resources.img} alt="" className="resourceImg"  />
          <div className="airbb-texts">
            <h4>{resources.title}</h4>
            <p>{resources.description}</p>
            <p>{resources.link}</p>
            {/* <p>{resources.topic}</p> */}
            <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
            </div> 
        </div>
         </div>
    )
      })
console.log(resources)

//map over the resources that match search results

let mappedSearch = searchResults.map((resources) => {
  console.log(resources.alpha)
  return (
    // if the object contains an alpha value, handle it this way. If no alpha value, handle it a different way.
    resources.alpha 
    ? <div className="card-container">
        <div className="rsc-header" >  
        <h3 id="alpha">{resources.alpha}</h3>
        <div className="line"></div>
        <p>{resources.topic}</p>
        </div>
      <div key={resources.id} className="airbb">
      <img src={resources.img} alt="" className="resourceImg"  />
      <div className="airbb-texts">
        <h4>{resources.title}</h4>
        <p>{resources.description}</p>
        <p>{resources.link}</p>
        {/* <p>{resources.topic}</p> */}
        <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
        </div> 
        </div>
        <br></br>
      </div>
      : <div className="card-container" >
       <div className="rsc-header" >
          <div className="line"></div>
          <p>{resources.topic}</p>
          </div> 
        <div key={resources.id} className="airbb2">
        <img src={resources.img} alt="" className="resourceImg"  />
        <div className="airbb-texts">
          <h4>{resources.title}</h4>
          <p>{resources.description}</p>
          <p>{resources.link}</p>
          {/* <p>{resources.topic}</p> */}
          <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
          </div> 
      </div>
       </div>
  )
})


return (
  <div>
      <NavBar />
      <h1 id="h3">Resources</h1>
      <input className="resource-input" type="text" placeholder="Search" value={search} onChange={handleChange} />

    <div className='hotline-resource-container'>
      <h1>National Crisis Hotlines</h1>
        <div className='hrc-inner'>
          <h3>United States</h3> 
          <ul>
            <li> <span style={{color:'red', fontWeight: 'bold'}}>Emergency: </span><span>911</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Suicide & Crisis Lifeline: </span><span>Call or Text 988</span></li>
            <li> <span style={{fontWeight: 'bold'}}>National Domestic Violience Hotline: </span><span>1-800-799-7233</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Crisis Text Line: </span><span>Text "DESERVE" TO 741-741</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Lifeline Crisis Chat (Online live messaging): </span><span>https://988lifeline.org/chat</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Self-Harm Hotline: </span><span>1-800-DONT CUT (1-800-366-8288)</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Essential local and community services: </span><span> 211, https://www.211.org/</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Planned Parenthood Hotline: </span><span>1-800-230-PLAN (7526)</span></li>
            <li> <span style={{fontWeight: 'bold'}}>American Association of Poison Control Centers: </span><span>1-800-222-1222</span></li>
            <li> <span style={{fontWeight: 'bold'}}>National Council on Alcoholism & Drug Dependency Hope Line: </span><span>1-800-622-2255</span></li>
            <li> <span style={{fontWeight: 'bold'}}>National Crisis Line - Anorexia and Bulimia: </span><span>1-800-233-4357</span></li>
            <li> <span style={{fontWeight: 'bold'}}>LGBT Hotline: </span><span>1-888-843-4564</span></li>
            <li> <span style={{fontWeight: 'bold'}}>TREVOR Crisis Hotline: </span><span> 1-866-488-7386</span></li>
            <li> <span style={{fontWeight: 'bold'}}>AIDS Crisis Line: </span><span>1-800-221-7044</span></li>
            <li> <span style={{fontWeight: 'bold'}}>Veterans Crisis Line: </span><span>https://www.veteranscrisisline.net</span></li>
            <li> <span style={{fontWeight: 'bold'}}>TransLifeline: </span><span>https://www.translifeline.org - 877-565-8860</span></li>
          </ul>
        </div>
    </div>
      <div className="resources">
        {/* basically saying if there is 0 search length return the original mapped, and if there is ANY amount of search text then return the searched results */}
        {searchResults.length < 1 
        ? mappedResources 
        : mappedSearch 
        }
      </div>
      <ScrollToTop />
      <UniFooter />
    </div>
  )

}
export default Resources;