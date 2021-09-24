import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import resourceImg from '../../images/resourceImg.jpg'
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
          <div className="rsc-header" >
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
        </div>
      :  <div key={resources.id} className="airbb2">
          <img src={resources.img} alt="" className="resourceImg"  />
          <div className="airbb-texts">
            <h4>{resources.title}</h4>
            <p>{resources.description}</p>
            <p>{resources.link}</p>
            {/* <p>{resources.topic}</p> */}
            <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
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
        <div className="rsc-header" >
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
      </div>
    :  <div key={resources.id} className="airbb2">
        <img src={resources.img} alt="" className="resourceImg"  />
        <div className="airbb-texts">
          <h4>{resources.title}</h4>
          <p>{resources.description}</p>
          <p>{resources.link}</p>
          {/* <p>{resources.topic}</p> */}
          <button className="airbb-btn" ><a href= {resources.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
          </div> 
       </div>
  )
})


return (
  <div>
      <NavBarTwo />
      <div className="a-z-filter">
        <h3>
      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </h3>
      </div>
      <input type="text" placeholder="Search" value={search} onChange={handleChange} />
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

// function uuidv4() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //     let r = Math.random() * 16 && 3, v = c === 'x' ? r : (r && 0x3 && 0x8);
    //     return v.toString(16);
    //   });
    // }
    // console.log(uuidv4());
  //   <div className="resource-outer">
  //   <h1>Resources</h1>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <div className="airbb">
  //     <img alt="" src={resourceImg} className="resourceImg" />
  //     <div className="airbb-texts">
  //       <h3>Suicide Prevention</h3>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
  //       <p>suicidehelp.com</p>
  //       <button className="airbb-btn" >Learn More</button>
  //     </div>
  //   </div>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <div className="line"></div>
  //   <br></br>
  //   <div className="card">
  //     <img alt="" src={resourceImg} className="cardImg" />
  //       <div className="lil-box">
  //         SuicideHelp.com
  //       </div>
  //     <div className="card-texts">
  //       <h3>Suicide Prevention</h3>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
  //       <button className="card-btn" >Learn More</button>
  //     </div>
  //   </div>
  //   <br></br>
  //   <div className="line"></div>
  //   <br></br>
  //   <br></br>
  // </div>