import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import NavBarTwo from '../NavBarTwo';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const resources1 = [
    {
      "id": 47,
      "title": "National Institute of Mental Health (NIMH)",
      "link": "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
      "description": "The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH is one of the 27 Institutes and Centers that make up the National Institutes of Health (NIH), the largest biomedical research agency in the world. NIH is part of the U.S. Department of Health and Human Services (HHS).",
      "img": "https://globalhealth.duke.edu/sites/default/files/styles/person_headshot_default/public/events/nimh-logo2.png?itok=bsvgR4Ym&h=7353e344",
      "topic": "adhd",
      "alpha": "A"
    },
    {
      "id": 48,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/ADHD",
      "description": "NAMI is the National Alliance on Mental Illness, the nations largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "adhd",
      "alpha": null
    },
    {
      "id": 63,
      "title": "American Addiction Centers",
      "link": "https://www.alcohol.org/",
      "description": "Alcohol.org is brought to you by the specialists at American Addiction Centers (AAC), a leading provider of addiction treatment services nationwide",
      "img": "https://www.alcohol.org/app/uploads/tx-guide.jpg",
      "topic": "alcohol abuse and alcoholism",
      "alpha": null
    },
    {
      "id": 62,
      "title": "National Institute on Alcohol Abuse and Alcoholism",
      "link": "https://www.niaaa.nih.gov/",
      "description": "NIAAA supports and conducts research on the impact of alcohol use on human health and well-being",
      "img": "https://www.niaaa.nih.gov/sites/default/files/2020-03/init-001-1.jpg",
      "topic": "alcohol abuse and alcoholism",
      "alpha": null
    },
    {
      "id": 69,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "anxiety",
      "alpha": null
    },
    {
      "id": 46,
      "title": "Anxiety & Depression Association of America",
      "link": "https://adaa.org/",
      "description": "ADAA is an international nonprofit organization dedicated to the prevention, treatment, and cure of anxiety, depression, OCD, PTSD, and co-occurring disorders through the alignment of science, treatment, and education.",
      "img": "https://adaa.org/sites/default/files/module%20images/tips-manage-anxiety-banner-600.jpg",
      "topic": "anxiety",
      "alpha": null
    },
    {
      "id": 71,
      "title": "The Rosenzweig Center for Rapid Recovery Accelerated Resolution Therapy",
      "link": "https://acceleratedresolutiontherapy.com/",
      "description": "Accelerated Resolution Therapy works directly to reprogram the way in which distressing memories and images are stored in the brain so that they no longer trigger strong physical and emotional reactions",
      "img": "https://t5z8s9z2.rocketcdn.me/wp-content/uploads/2018/07/how-art-works.jpg",
      "topic": "art",
      "alpha": null
    },
    {
      "id": 72,
      "title": "ART International",
      "link": "https://artherapyinternational.org/",
      "description": "ART International Training and Research is committed to helping hundreds of thousands of people who suffer with post-traumatic stress (PTS) and other psychological traumas.",
      "img": "https://artherapyinternational.org/wp-content/uploads/2020/10/find_therapist.jpg",
      "topic": "art",
      "alpha": null
    },
    {
      "id": 59,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Borderline-Personality-Disorder",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "bpd borderline personality disorder",
      "alpha": "B"
    },
    {
      "id": 60,
      "title": "National Education Alliance for Borderline Personality Disorder",
      "link": "https://www.borderlinepersonalitydisorder.org/consumer-recovery-resources1/",
      "description": "A collection of information about recovering from borderline personality disorder, reviewed by a committee of people who have had the diagnosis, are family members of a loved one with the diagnosis, and two dedicated professionals who work with individuals diagnosed with BPD.",
      "img": "https://www.borderlinepersonalitydisorder.org/wp-content/uploads/2020/07/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg",
      "topic": "bpd borderline personality disorder",
      "alpha": null
    },
    {
      "id": 61,
      "title": "Crisis Response Plan How To",
      "link": "https://crpforsuicide.com/",
      "description": "The Crisis Response Plan (CRP) is a brief procedure used to reduce an individual`s risk for suicidal behavior. The CRP is created collaboratively between a suicidal individual and a trained individual and is typically handwritten on an index card for easy, convenient access during times of need. The CRP serves as a checklist to follow during periods of intense emotional distress. At its core, the CRP helps someone remember what to do when they feel emotionally overwhelmed.",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE8DoBvTS2dGGXS5yZYIfVWkRpnX2iIJbKA&usqp=CAU",
      "topic": "crisis response plan - suicide",
      "alpha": "C"
    },
    {
      "id": 45,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Depression",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "depression",
      "alpha": "D"
    },
    {
      "id": 44,
      "title": "National Institute of Mental Health (NIMH)",
      "link": "https://www.nimh.nih.gov/health/topics/depression/index.shtml",
      "description": "The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH is one of the 27 Institutes and Centers that make up the National Institutes of Health (NIH), the largest biomedical research agency in the world. NIH is part of the U.S. Department of Health and Human Services (HHS).",
      "img": "https://globalhealth.duke.edu/sites/default/files/styles/person_headshot_default/public/events/nimh-logo2.png?itok=bsvgR4Ym&h=7353e344",
      "topic": "depression",
      "alpha": null
    },
    {
      "id": 68,
      "title": "Anxiety & Depression Association of America",
      "link": "https://adaa.org/",
      "description": "ADAA is an international nonprofit organization dedicated to the prevention, treatment, and cure of anxiety, depression, OCD, PTSD, and co-occurring disorders through the alignment of science, treatment, and education.",
      "img": "https://adaa.org/sites/default/files/module%20images/tips-manage-anxiety-banner-600.jpg",
      "topic": "depression and anxiety",
      "alpha": null
    },
    {
      "id": 52,
      "title": "National Resource Center on Domestic Violence",
      "link": "https://www.nrcdv.org/",
      "description": "For more than 25 years, the National Resource Center on Domestic Violence (NRCDV) has been a comprehensive source of information for those wanting to educate themselves and help others on the many issues related to domestic violence.",
      "img": "https://www.nrcdv.org/sites/default/files/image-grid/logo_DVAP.png",
      "topic": "domestic violence",
      "alpha": null
    },
    {
      "id": 53,
      "title": "National Coalition Against Domestic Violence",
      "link": "https://ncadv.org/",
      "description": "Our mission is to lead, mobilize and raise our voices to support efforts that demand a change of conditions that lead to domestic violence such as patriarchy, privilege, racism, sexism, and classism. We are dedicated to supporting survivors and holding offenders accountable and supporting advocates.",
      "img": "data:image/png;base64,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",
      "topic": "domestic violence",
      "alpha": null
    },
    {
      "id": 65,
      "title": "National Institute for Drug Abuse",
      "link": "https://www.drugabuse.gov/publications/drugs-brains-behavior-science-addiction/preface",
      "description": "NIAAA supports and conducts research on the impact of alcohol use on human health and well-being",
      "img": "https://www.drugabuse.gov/sites/default/files/styles/featured_card/public/images/recoverysuccess.jpg?itok=OpeSd6Cf",
      "topic": "drug abuse",
      "alpha": null
    },
    {
      "id": 64,
      "title": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
      "link": "https://www.samhsa.gov/",
      "description": "National Helpline 8006624357",
      "img": "https://www.samhsa.gov/sites/default/files/css-smi-390x390.jpg",
      "topic": "drug abuse",
      "alpha": null
    },
    {
      "id": 67,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Eating-Disorders",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "eating disorders ed`s ed",
      "alpha": "E"
    },
    {
      "id": 74,
      "title": "EMDR Institute",
      "link": "www.emdr.com",
      "description": "The speed at which change occurs during EMDR contradicts the traditional notion of time as essential for psychological healing. Shapiro has integrated elements from many different schools of psychotherapy into her protocols, making EMDR applicable to a variety of clinical populations and accessible to clinicians from different orientations. “Bessel A. van der Kolk, MD",
      "img": "https://www.appliedbehavioranalysisprograms.com/wp-content/uploads/2021/04/shutterstock_1579391470.jpg",
      "topic": "emdr",
      "alpha": null
    },
    {
      "id": 73,
      "title": "EMDR International Association (EMDRIA)",
      "link": "https://www.emdria.org/",
      "description": "EMDR Therapy helps people heal from trauma or other distressing life experiences.",
      "img": "https://mk0emdrias99osg9utnb.kinstacdn.com/wp-content/uploads/2020/03/healing-head.jpg",
      "topic": "emdr",
      "alpha": null
    },
    {
      "id": 66,
      "title": "1000+ List of Hobbies and Interests ideas",
      "link": "https://boredombusted.com/definitive-list-of-hobbies-interests/",
      "description": "Hobbies make us human! Interests with certain topics helped spur our brains and make us the people we are today. Hobbies foster Eustress, offer new challenges and have a variety of physical, emotional, psychological, spiritual and social benefits.",
      "img": "https://boredombusted.com/wp-content/uploads/2016/06/e837b1062ef6083ecd0b470de7444e90fe76e6d21db0134494f5c3_640_canvas-1-600x400.jpg",
      "topic": "hobbies",
      "alpha": "H"
    },
    {
      "id": 49,
      "title": "National Institute of Mental Health (NIMH)",
      "link": "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/index.shtml",
      "description": "The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH is one of the 27 Institutes and Centers that make up the National Institutes of Health (NIH), the largest biomedical research agency in the world. NIH is part of the U.S. Department of Health and Human Services (HHS).",
      "img": "https://globalhealth.duke.edu/sites/default/files/styles/person_headshot_default/public/events/nimh-logo2.png?itok=bsvgR4Ym&h=7353e344",
      "topic": "ptsd",
      "alpha": "P"
    },
    {
      "id": 51,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Posttraumatic-Stress-Disorder/Support",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "ptsd family",
      "alpha": null
    },
    {
      "id": 50,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Posttraumatic-Stress-Disorder/Support",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "ptsd family",
      "alpha": null
    },
    {
      "id": 70,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Common-with-Mental-Illness/Self-harm",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "self harm",
      "alpha": "S"
    },
    {
      "id": 54,
      "title": "Sleep foundation",
      "link": "https://www.sleepfoundation.org/",
      "description": "Writers and editors exclusively use reputable, data-driven sources such as peer-reviewed journals, government reports, and articles from established medical associations. They bring the most accurate and up-to-date information about different sleep health topics. Rest assured every Sleep Foundation guide is carefully vetted and fact-checked prior to publication",
      "img": "https://www.sleepfoundation.org/wp-content/uploads/2021/09/shutterstock_1106545970.jpg",
      "topic": "sleep",
      "alpha": null
    },
    {
      "id": 58,
      "title": "Crisis Response Plan How To",
      "link": "https://crpforsuicide.com/",
      "description": "The Crisis Response Plan (CRP) is a brief procedure used to reduce an individual`s risk for suicidal behavior. The CRP is created collaboratively between a suicidal individual and a trained individual and is typically handwritten on an index card for easy, convenient access during times of need. The CRP serves as a checklist to follow during periods of intense emotional distress. At its core, the CRP helps someone remember what to do when they feel emotionally overwhelmed.",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE8DoBvTS2dGGXS5yZYIfVWkRpnX2iIJbKA&usqp=CAU",
      "topic": "suicide crisis response",
      "alpha": null
    },
    {
      "id": 56,
      "title": "National Institute of Mental Health (NIMH)",
      "link": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
      "description": "The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH is one of the 27 Institutes and Centers that make up the National Institutes of Health (NIH), the largest biomedical research agency in the world. NIH is part of the U.S. Department of Health and Human Services (HHS).",
      "img": "https://globalhealth.duke.edu/sites/default/files/styles/person_headshot_default/public/events/nimh-logo2.png?itok=bsvgR4Ym&h=7353e344",
      "topic": "suicide prevention",
      "alpha": null
    },
    {
      "id": 55,
      "title": "American Foundation of Suicide Prevention",
      "link": "https://afsp.org/",
      "description": "Find support for yourself or those who may be at risk for suicide",
      "img": "https://www.datocms-assets.com/12810/1579090936-gettyimages-1055705410.jpg?auto=format&crop=faces&fit=crop&h=370&w=600",
      "topic": "suicide prevention",
      "alpha": null
    },
    {
      "id": 57,
      "title": "National Alliance of Mental Illness (NAMI)",
      "link": "https://www.nami.org/About-Mental-Illness/Common-with-Mental-Illness/Risk-of-Suicide",
      "description": "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
      "img": "https://www.nami.org/CMSPages/GetFile.aspx?guid=4c883fdd-7714-4c96-b895-1b725449f0ac",
      "topic": "suicide risk",
      "alpha": null
    }
  ]


  //get all resources1 on load
  const getResources = () => {
    axios.get("/api/resources1")
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
    const results = resources1.filter((resources1) => 
    resources1.topic.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [resources, search])


  //map over resourcecards and return the structure of the cards
  let mappedResources = resources1.map((resources1) => {
    return (
      resources1.alpha 
      ? <div className="card-container">
          <div className="rsc-header" >
          <h3 id="alpha">{resources1.alpha}</h3>
          <div className="line"></div>
          <p>{resources1.topic}</p>
          </div>
        <div key={resources1.id} className="airbb">
        <img src={resources1.img} alt="" className="resourceImg"  />
        <div className="airbb-texts">
          <h4>{resources1.title}</h4>
          <p>{resources1.description}</p>
          <p>{resources1.link}</p>
          {/* <p>{resources1.topic}</p> */}
          <button className="airbb-btn" ><a href= {resources1.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
          </div> 
          </div>
          <br></br>
        </div>
        : <div className="card-container" >
         <div className="rsc-header">
            <div className="line"></div>
            <p>{resources1.topic}</p>
            </div> 
          <div key={resources1.id} className="airbb2">
          <img src={resources1.img} alt="" className="resourceImg"  />
          <div className="airbb-texts">
            <h4>{resources1.title}</h4>
            <p>{resources1.description}</p>
            <p>{resources1.link}</p>
            {/* <p>{resources1.topic}</p> */}
            <button className="airbb-btn" ><a href= {resources1.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
            </div> 
        </div>
         </div>
    )
      })
console.log(resources1)

//map over the resources1 that match search results

let mappedSearch = searchResults.map((resources1) => {
  console.log(resources1.alpha)
  return (
    resources1.alpha 
    ? <div className="card-container">
        <div className="rsc-header" >  
        <h3 id="alpha">{resources1.alpha}</h3>
        <div className="line"></div>
        <p>{resources1.topic}</p>
        </div>
      <div key={resources1.id} className="airbb">
      <img src={resources1.img} alt="" className="resourceImg"  />
      <div className="airbb-texts">
        <h4>{resources1.title}</h4>
        <p>{resources1.description}</p>
        <p>{resources1.link}</p>
        {/* <p>{resources1.topic}</p> */}
        <button className="airbb-btn" ><a href= {resources1.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
        </div> 
        </div>
        <br></br>
      </div>
      : <div className="card-container" >
       <div className="rsc-header" >
          <div className="line"></div>
          <p>{resources1.topic}</p>
          </div> 
        <div key={resources1.id} className="airbb2">
        <img src={resources1.img} alt="" className="resourceImg"  />
        <div className="airbb-texts">
          <h4>{resources1.title}</h4>
          <p>{resources1.description}</p>
          <p>{resources1.link}</p>
          {/* <p>{resources1.topic}</p> */}
          <button className="airbb-btn" ><a href= {resources1.link} target="_blank" rel="noreferrer" className='link2'>Learn More</a></button>
          </div> 
      </div>
       </div>
  )
})


return (
  <div>
      <NavBarTwo />
      {/* <div className="a-z-filter">
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
      </div> */}
      <h1 id="h3">Resources</h1>
      <input className="resource-input" type="text" placeholder="Search" value={search} onChange={handleChange} />
      <div className="resources1">
        {searchResults.length < 1 
        ? mappedResources 
        : mappedSearch 
        }
      </div>
    </div>
  )

}
export default Resources;