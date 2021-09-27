import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { HashLink as Links } from 'react-router-hash-link';
import NavBarTwo from '../NavBarTwo';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  //get all resources on load
  const getResources = () => {
    axios.get("/api/resources")
    .then((res) => { 
      setResources(res.data)
    })
    .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    getResources();
  }, []);

  //SEARCH
  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  useEffect(() => {
    const results = resources.filter((resources) => 
    resources.topic.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [resources, search])


  //map over resourcecards and return the structure of the cards
  let mappedResources = resources.map((resources) => {
    return (
      resources.alpha 
      ? <div className="card-container">
          <div className="rsc-header" id={resources.alpha}  >
          <h3>{resources.alpha}</h3>
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
         <div className="rsc-header" id={resources.alpha}  >
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
  return (
    resources.alpha 
    ? <div className="card-container">
        <div className="rsc-header" id={resources.alpha} >
        <h3>{resources.alpha}</h3>
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
       <div className="rsc-header" id={resources.alpha} >
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
      <NavBarTwo />
      <div className="a-z-filter">
      <Links smooth to={resources.alpha === 'A'} className="link t-link">A</Links>
      <Links smooth to={resources.alpha === 'B'} className="link t-link">B</Links>
      <Links smooth to={resources.alpha === 'C'} className="link t-link">C</Links>
      <Links smooth to={resources.alpha === 'D'} className="link t-link">D</Links>
      <Links smooth to={resources.alpha === 'E'} className="link t-link">E</Links>
      <Links smooth to={resources.alpha === 'F'} className="link t-link">F</Links>
      <Links  className="link t-link">G</Links>
      <Links smooth to={resources.alpha === 'H'} className="link t-link">H</Links>
      <Links  className="link t-link">I</Links>
      <Links  className="link t-link">J</Links>
      <Links  className="link t-link">K</Links>
      <Links  className="link t-link">L</Links>
      <Links  className="link t-link">M</Links>
      <Links  className="link t-link">N</Links>
      <Links  className="link t-link">O</Links>
      <Links smooth to={resources.alpha === 'P'} className="link t-link">P</Links>
      <Links  className="link t-link">Q</Links>
      <Links  className="link t-link">R</Links>
      <Links smooth to={resources.alpha === 'S'} className="link t-link">S</Links>
      <Links  className="link t-link">T</Links>
      <Links  className="link t-link">U</Links>
      <Links  className="link t-link">V</Links>
      <Links  className="link t-link">W</Links>
      <Links  className="link t-link">X</Links>
      <Links  className="link t-link">Y</Links>
      <Links  className="link t-link">Z</Links>
  </div>
      <input className="resource-input" type="text" placeholder="Search" value={search} onChange={handleChange} />
      <div className="resources">
        {searchResults.length < 1 
        ? mappedResources 
        : mappedSearch 
        }
      </div>
    </div>
  )

}
export default Resources;